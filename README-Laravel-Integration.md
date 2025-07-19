# Laravel Integration Guide for BusinessFlow Pro

This guide shows how to integrate your Laravel application with BusinessFlow Pro's subscription system to automatically create user accounts when subscriptions are completed.

## Overview

BusinessFlow Pro sends webhook notifications to your Laravel application whenever:
- A new subscription is created
- A subscription is updated or cancelled
- Payment events occur

## Laravel Setup

### 1. Create Webhook Endpoint

Create a new controller to handle BusinessFlow Pro webhooks:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\Subscription;

class BusinessFlowWebhookController extends Controller
{
    public function handle(Request $request): JsonResponse
    {
        // Verify webhook authentication
        $authHeader = $request->header('Authorization');
        if (!$authHeader || !str_starts_with($authHeader, 'Bearer ')) {
            Log::warning('BusinessFlow webhook: Missing or invalid authorization header');
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        
        $token = substr($authHeader, 7);
        if ($token !== config('services.businessflow.webhook_secret')) {
            Log::warning('BusinessFlow webhook: Invalid token');
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // Parse webhook data
        $subscriptionId = $request->input('subscription_id');
        $planId = $request->input('plan_id');
        $userData = $request->input('user_data');
        $billingPeriod = $request->input('billing_period');
        $subscriptionStatus = $request->input('subscription_status');

        try {
            // Create or update user
            $user = User::updateOrCreate(
                ['email' => $userData['email']],
                [
                    'name' => trim($userData['first_name'] . ' ' . $userData['last_name']),
                    'first_name' => $userData['first_name'],
                    'last_name' => $userData['last_name'],
                    'company_name' => $userData['company_name'],
                    'company_size' => $userData['company_size'],
                    'industry' => $userData['industry'],
                    'password' => bcrypt(str()->random(32)), // Random password, user will reset
                    'email_verified_at' => now(),
                ]
            );

            // Create or update subscription record
            Subscription::updateOrCreate(
                ['stripe_subscription_id' => $subscriptionId],
                [
                    'user_id' => $user->id,
                    'plan_id' => $planId,
                    'billing_period' => $billingPeriod,
                    'status' => $subscriptionStatus,
                    'current_period_end' => $request->input('current_period_end') 
                        ? date('Y-m-d H:i:s', $request->input('current_period_end'))
                        : null,
                ]
            );

            // Send welcome email
            $user->sendWelcomeNotification($planId);

            Log::info('BusinessFlow webhook processed successfully', [
                'user_id' => $user->id,
                'email' => $user->email,
                'subscription_id' => $subscriptionId,
                'plan_id' => $planId
            ]);

            return response()->json(['success' => true]);

        } catch (\Exception $e) {
            Log::error('BusinessFlow webhook processing failed', [
                'error' => $e->getMessage(),
                'subscription_id' => $subscriptionId,
                'user_data' => $userData
            ]);

            return response()->json(['error' => 'Processing failed'], 500);
        }
    }
}
```

### 2. Add Route

Add the webhook route to your `routes/api.php`:

```php
// BusinessFlow Pro webhook
Route::post('/businessflow/webhook', [BusinessFlowWebhookController::class, 'handle'])
    ->name('businessflow.webhook');
```

### 3. Environment Configuration

Add these environment variables to your `.env` file:

```env
# BusinessFlow Pro Integration
BUSINESSFLOW_WEBHOOK_SECRET=your_secure_webhook_secret_here
BUSINESSFLOW_WEBHOOK_URL=https://your-laravel-app.com/api/businessflow/webhook
```

### 4. Configure BusinessFlow Pro

In your BusinessFlow Pro environment, set these variables:

```env
# Production only - Laravel webhook integration
LARAVEL_WEBHOOK_URL=https://your-laravel-app.com/api/businessflow/webhook
LARAVEL_WEBHOOK_SECRET=your_secure_webhook_secret_here
```

### 5. Database Migrations

Create migrations for user and subscription tracking:

```php
<?php
// Migration: create_users_table_updates.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTableUpdates extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('company_name')->nullable();
            $table->string('company_size')->nullable();
            $table->string('industry')->nullable();
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['first_name', 'last_name', 'company_name', 'company_size', 'industry']);
        });
    }
}
```

```php
<?php
// Migration: create_subscriptions_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscriptionsTable extends Migration
{
    public function up()
    {
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('stripe_subscription_id')->unique();
            $table->string('plan_id');
            $table->string('billing_period'); // 'monthly' or 'yearly'
            $table->string('status'); // 'active', 'cancelled', etc.
            $table->timestamp('current_period_end')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('subscriptions');
    }
}
```

### 6. Models

Create or update your models:

```php
<?php
// App/Models/User.php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name', 'email', 'password', 'first_name', 'last_name',
        'company_name', 'company_size', 'industry', 'email_verified_at'
    ];

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }

    public function activeSubscription()
    {
        return $this->subscriptions()->where('status', 'active')->first();
    }

    public function sendWelcomeNotification($planId)
    {
        // Send welcome email with login instructions
        // You can customize this based on your notification system
    }
}
```

```php
<?php
// App/Models/Subscription.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    protected $fillable = [
        'user_id', 'stripe_subscription_id', 'plan_id', 
        'billing_period', 'status', 'current_period_end'
    ];

    protected $casts = [
        'current_period_end' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```

### 7. Configuration File

Create a config file for BusinessFlow integration:

```php
<?php
// config/services.php

return [
    // ... other services

    'businessflow' => [
        'webhook_secret' => env('BUSINESSFLOW_WEBHOOK_SECRET'),
        'webhook_url' => env('BUSINESSFLOW_WEBHOOK_URL'),
    ],
];
```

## Testing

### Development Mode

BusinessFlow Pro automatically simulates webhook events in development mode. You'll see logs like:

```
[DEV] Would create Laravel account with data: {
  email: "user@example.com",
  firstName: "John",
  lastName: "Doe",
  companyName: "Acme Corp",
  planId: "basic",
  subscriptionId: "sub_mock_1234567890"
}
```

### Production Testing

1. Set up a test webhook endpoint (you can use tools like ngrok for local testing)
2. Configure the `LARAVEL_WEBHOOK_URL` environment variable
3. Complete a test subscription in BusinessFlow Pro
4. Check your Laravel logs to verify webhook processing

## Security Considerations

1. **Always verify the webhook secret** - This prevents unauthorized requests
2. **Use HTTPS** - Webhook URLs should always use HTTPS in production
3. **Log webhook events** - Keep detailed logs for debugging and audit purposes
4. **Handle failures gracefully** - Return appropriate HTTP status codes
5. **Validate input data** - Always validate webhook payload data

## Webhook Payload Example

```json
{
  "subscription_id": "sub_1234567890",
  "plan_id": "basic",
  "user_data": {
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "company_name": "Acme Corp",
    "company_size": "11-50",
    "industry": "technology"
  },
  "billing_period": "monthly",
  "subscription_status": "active",
  "current_period_end": 1673539200
}
```

## Troubleshooting

### Common Issues

1. **401 Unauthorized**: Check that `LARAVEL_WEBHOOK_SECRET` matches between both applications
2. **500 Server Error**: Check Laravel logs for specific error details
3. **Webhook not received**: Verify the `LARAVEL_WEBHOOK_URL` is correct and accessible
4. **User creation fails**: Check database permissions and table structure

### Debugging

Enable detailed logging in your Laravel application:

```php
// In your webhook controller, add debugging
Log::debug('BusinessFlow webhook received', [
    'headers' => $request->headers->all(),
    'payload' => $request->all()
]);
```

## Support

For issues with the BusinessFlow Pro integration:
1. Check the webhook logs in both applications
2. Verify environment variables are correctly set
3. Test the webhook endpoint manually with curl
4. Contact BusinessFlow Pro support with specific error messages

This integration ensures seamless user account creation in your Laravel application whenever someone subscribes to BusinessFlow Pro!