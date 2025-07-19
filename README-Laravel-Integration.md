# Laravel Integration Guide for BusinessFlow Pro

## Overview
This guide explains how to integrate the BusinessFlow Pro subscription frontend with a Laravel backend application for automated user account creation and management.

## Architecture Overview

The BusinessFlow Pro frontend handles:
- User authentication via Replit Auth
- Subscription management through Stripe
- Demo request collection
- User interface for business management features

Your Laravel application will receive:
- Webhook notifications when subscriptions are activated
- User data for account creation
- Subscription plan information
- Demo request leads

## 1. Prerequisites

### Required Packages for Laravel
```bash
composer require stripe/stripe-php
composer require guzzlehttp/guzzle
composer require laravel/horizon  # For job queues
```

### Required Environment Variables
Add these to your Laravel `.env` file:
```env
# Stripe Configuration
STRIPE_KEY=pk_test_your_publishable_key
STRIPE_SECRET=sk_test_your_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# BusinessFlow Pro API Integration
BUSINESSFLOW_API_URL=https://your-businessflow-domain.replit.app
BUSINESSFLOW_API_SECRET=your_secure_api_secret

# Queue Configuration for Background Jobs
QUEUE_CONNECTION=redis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
```

## 2. Database Migration

Create a migration for storing BusinessFlow Pro user data:

```bash
php artisan make:migration create_businessflow_users_table
```

Migration file content:
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('businessflow_users', function (Blueprint $table) {
            $table->id();
            $table->string('businessflow_user_id')->unique(); // From Replit Auth
            $table->string('email')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('profile_image_url')->nullable();
            $table->string('stripe_customer_id')->nullable();
            $table->string('stripe_subscription_id')->nullable();
            $table->string('subscription_status')->nullable(); // active, canceled, past_due
            $table->string('subscription_plan')->nullable(); // basic, professional, business
            $table->timestamp('subscription_created_at')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('businessflow_users');
    }
};
```

## 3. Models

Create the BusinessFlow User model:

```bash
php artisan make:model BusinessFlowUser
```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessFlowUser extends Model
{
    use HasFactory;

    protected $table = 'businessflow_users';

    protected $fillable = [
        'businessflow_user_id',
        'email',
        'first_name', 
        'last_name',
        'profile_image_url',
        'stripe_customer_id',
        'stripe_subscription_id',
        'subscription_status',
        'subscription_plan',
        'subscription_created_at',
    ];

    protected $casts = [
        'subscription_created_at' => 'datetime',
    ];

    public function getFullNameAttribute()
    {
        return trim("{$this->first_name} {$this->last_name}");
    }

    public function isActiveSubscriber()
    {
        return $this->subscription_status === 'active';
    }

    public function getSubscriptionPlanDisplayAttribute()
    {
        return match($this->subscription_plan) {
            'basic' => 'Basic Plan ($29/month)',
            'professional' => 'Professional Plan ($79/month)', 
            'business' => 'Business Plus Plan ($159/month)',
            default => 'No Plan'
        };
    }
}
```

## 4. Jobs for Background Processing

Create a job to handle account creation when subscriptions are activated:

```bash
php artisan make:job CreateBusinessFlowAccount
```

```php
<?php

namespace App\Jobs;

use App\Models\BusinessFlowUser;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

class CreateBusinessFlowAccount implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public string $userId,
        public string $planId,
        public string $subscriptionId,
        public array $userData = []
    ) {}

    public function handle()
    {
        try {
            // Create or update the BusinessFlow user record
            $user = BusinessFlowUser::updateOrCreate(
                ['businessflow_user_id' => $this->userId],
                [
                    'email' => $this->userData['email'] ?? null,
                    'first_name' => $this->userData['firstName'] ?? null,
                    'last_name' => $this->userData['lastName'] ?? null,
                    'profile_image_url' => $this->userData['profileImageUrl'] ?? null,
                    'stripe_customer_id' => $this->userData['stripeCustomerId'] ?? null,
                    'stripe_subscription_id' => $this->subscriptionId,
                    'subscription_status' => 'active',
                    'subscription_plan' => $this->planId,
                    'subscription_created_at' => now(),
                ]
            );

            Log::info("BusinessFlow account created/updated for user {$this->userId}", [
                'plan' => $this->planId,
                'subscription_id' => $this->subscriptionId
            ]);

            // Here you can add additional logic like:
            // - Creating main application user account
            // - Setting up initial business data
            // - Sending welcome emails
            // - Configuring user permissions based on plan

            $this->createMainApplicationAccount($user);
            $this->setupInitialBusinessData($user);
            $this->sendWelcomeEmail($user);

        } catch (\Exception $e) {
            Log::error("Failed to create BusinessFlow account for user {$this->userId}: " . $e->getMessage());
            throw $e; // Re-throw to trigger job retry
        }
    }

    private function createMainApplicationAccount(BusinessFlowUser $user)
    {
        // Create your main application user account here
        // This depends on your application's user model and requirements
        
        // Example:
        // User::firstOrCreate([
        //     'email' => $user->email
        // ], [
        //     'name' => $user->full_name,
        //     'businessflow_user_id' => $user->businessflow_user_id,
        //     'subscription_plan' => $user->subscription_plan,
        //     'email_verified_at' => now(),
        // ]);
    }

    private function setupInitialBusinessData(BusinessFlowUser $user)
    {
        // Set up initial business data based on subscription plan
        switch ($user->subscription_plan) {
            case 'basic':
                // Basic plan setup
                break;
            case 'professional':
                // Professional plan setup with more features
                break;
            case 'business':
                // Business plan setup with all features
                break;
        }
    }

    private function sendWelcomeEmail(BusinessFlowUser $user)
    {
        // Send welcome email with account details
        // You can use Laravel's Mail facade here
    }
}
```

## 5. Webhook Controller

Create a controller to handle webhooks from BusinessFlow Pro:

```bash
php artisan make:controller BusinessFlowWebhookController
```

```php
<?php

namespace App\Http\Controllers;

use App\Jobs\CreateBusinessFlowAccount;
use App\Models\BusinessFlowUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

class BusinessFlowWebhookController extends Controller
{
    public function handleSubscriptionActivated(Request $request)
    {
        // Verify the webhook signature
        if (!$this->verifyWebhookSignature($request)) {
            return response()->json(['error' => 'Invalid signature'], 401);
        }

        $data = $request->all();

        // Validate required fields
        $this->validate($request, [
            'userId' => 'required|string',
            'planId' => 'required|string',
            'subscriptionId' => 'required|string',
            'userData' => 'required|array'
        ]);

        // Dispatch job to create/update account
        CreateBusinessFlowAccount::dispatch(
            $data['userId'],
            $data['planId'], 
            $data['subscriptionId'],
            $data['userData']
        );

        Log::info('BusinessFlow subscription webhook processed', [
            'user_id' => $data['userId'],
            'plan' => $data['planId']
        ]);

        return response()->json(['success' => true]);
    }

    public function handleSubscriptionCanceled(Request $request)
    {
        if (!$this->verifyWebhookSignature($request)) {
            return response()->json(['error' => 'Invalid signature'], 401);
        }

        $data = $request->all();
        
        BusinessFlowUser::where('businessflow_user_id', $data['userId'])
            ->update(['subscription_status' => 'canceled']);

        // Additional cleanup logic here

        return response()->json(['success' => true]);
    }

    public function handleDemoRequest(Request $request)
    {
        if (!$this->verifyWebhookSignature($request)) {
            return response()->json(['error' => 'Invalid signature'], 401);
        }

        $data = $request->all();

        // Store demo request in your CRM or lead management system
        // Send notification to sales team
        // Create follow-up tasks

        Log::info('New demo request received', $data);

        return response()->json(['success' => true]);
    }

    private function verifyWebhookSignature(Request $request): bool
    {
        $signature = $request->header('X-BusinessFlow-Signature');
        $payload = $request->getContent();
        $secret = config('services.businessflow.webhook_secret');

        $computedSignature = hash_hmac('sha256', $payload, $secret);

        return hash_equals($signature, $computedSignature);
    }
}
```

## 6. Routes

Add webhook routes to `routes/web.php` or `routes/api.php`:

```php
// BusinessFlow Pro Webhooks
Route::prefix('webhooks/businessflow')->group(function () {
    Route::post('subscription-activated', [BusinessFlowWebhookController::class, 'handleSubscriptionActivated']);
    Route::post('subscription-canceled', [BusinessFlowWebhookController::class, 'handleSubscriptionCanceled']);
    Route::post('demo-request', [BusinessFlowWebhookController::class, 'handleDemoRequest']);
});
```

## 7. Configuration

Add BusinessFlow configuration to `config/services.php`:

```php
'businessflow' => [
    'api_url' => env('BUSINESSFLOW_API_URL'),
    'api_secret' => env('BUSINESSFLOW_API_SECRET'),
    'webhook_secret' => env('BUSINESSFLOW_WEBHOOK_SECRET'),
],
```

## 8. Implementation Steps

### Step 1: Run Migrations
```bash
php artisan migrate
```

### Step 2: Configure Queue Workers
```bash
# Start Redis (if not already running)
redis-server

# Start queue workers
php artisan queue:work
```

### Step 3: Set Up Webhooks
In your BusinessFlow Pro application, configure webhook URLs to point to your Laravel endpoints:

- Subscription Activated: `https://yourapp.com/webhooks/businessflow/subscription-activated`
- Subscription Canceled: `https://yourapp.com/webhooks/businessflow/subscription-canceled`
- Demo Request: `https://yourapp.com/webhooks/businessflow/demo-request`

### Step 4: Update BusinessFlow Pro Server Code
Modify the BusinessFlow Pro server to send webhooks when subscriptions are activated. In `server/routes.ts`, update the webhook handler:

```javascript
// In the invoice.payment_succeeded case
if (userId) {
  await storage.updateUserSubscription(userId, 'active', planId);
  
  // Send webhook to Laravel application
  try {
    const user = await storage.getUser(userId);
    const webhookData = {
      userId,
      planId,
      subscriptionId,
      userData: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
        stripeCustomerId: user.stripeCustomerId
      }
    };

    const signature = crypto
      .createHmac('sha256', process.env.LARAVEL_WEBHOOK_SECRET)
      .update(JSON.stringify(webhookData))
      .digest('hex');

    await fetch(`${process.env.LARAVEL_API_URL}/webhooks/businessflow/subscription-activated`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-BusinessFlow-Signature': signature,
      },
      body: JSON.stringify(webhookData)
    });
  } catch (error) {
    console.error('Failed to send webhook to Laravel:', error);
  }
}
```

## 9. Testing

### Test Webhook Endpoints
```bash
# Test with curl
curl -X POST https://yourapp.com/webhooks/businessflow/subscription-activated \
  -H "Content-Type: application/json" \
  -H "X-BusinessFlow-Signature: your_test_signature" \
  -d '{"userId":"test123","planId":"professional","subscriptionId":"sub_123","userData":{"email":"test@example.com"}}'
```

### Monitor Logs
```bash
# Watch Laravel logs
tail -f storage/logs/laravel.log

# Watch queue jobs
php artisan queue:monitor
```

## 10. Additional Features

### User Synchronization Service
Create a service to sync user data between BusinessFlow Pro and your Laravel app:

```bash
php artisan make:command SyncBusinessFlowUsers
```

### Subscription Plan Management
Create endpoints to manage subscription plans and features:

```php
Route::get('/admin/businessflow/users', [AdminController::class, 'businessflowUsers']);
Route::get('/admin/businessflow/analytics', [AdminController::class, 'subscriptionAnalytics']);
```

### API Integration
Create services to communicate with BusinessFlow Pro API for real-time data:

```php
class BusinessFlowApiService
{
    public function getUserSubscription(string $userId)
    {
        return Http::withToken(config('services.businessflow.api_secret'))
            ->get(config('services.businessflow.api_url') . "/api/users/{$userId}/subscription");
    }
}
```

## 11. Security Considerations

1. **Webhook Signature Verification**: Always verify webhook signatures
2. **Rate Limiting**: Implement rate limiting on webhook endpoints
3. **HTTPS Only**: Ensure all webhook URLs use HTTPS
4. **Secret Management**: Use Laravel's config system for secrets
5. **Database Security**: Encrypt sensitive data like customer IDs

## 12. Monitoring and Maintenance

### Health Checks
```php
Route::get('/health/businessflow', function () {
    $checks = [
        'database' => BusinessFlowUser::count() > 0,
        'queue' => Queue::size() < 100,
        'api_connectivity' => // Test BusinessFlow API
    ];
    
    return response()->json($checks);
});
```

### Analytics Dashboard
Track subscription metrics, user engagement, and revenue data from BusinessFlow Pro integrations.

This integration will automatically create user accounts in your Laravel application whenever someone subscribes to BusinessFlow Pro, ensuring seamless user experience and proper data synchronization between systems.
