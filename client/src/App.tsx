import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import Landing from "@/pages/landing";
import FeatureInvoicing from "@/pages/feature-invoicing";
import FeatureExpenses from "@/pages/feature-expenses";
import FeatureTax from "@/pages/feature-tax";
import FeatureInventory from "@/pages/feature-inventory";
import FeatureMobile from "@/pages/feature-mobile";
import FeatureReports from "@/pages/feature-reports";
import FeatureDebt from "@/pages/feature-debt";
import FeatureSecurity from "@/pages/feature-security";
import FeatureMigration from "@/pages/feature-migration";
import FeatureClients from "@/pages/feature-clients";
import FeatureVendors from "@/pages/feature-vendors";
import FeatureCalendar from "@/pages/feature-calendar";
import FeatureAttendance from "@/pages/feature-attendance";
import About from "@/pages/about";
import Collaboration from "@/pages/collaboration";
import Contact from "@/pages/contact";
import Login from "@/pages/login";
import Trial from "@/pages/trial";
import Dashboard from "@/pages/dashboard";
import Subscribe from "@/pages/subscribe";
import Compare from "@/pages/compare";
import CompareFeatures from "@/pages/compare-features";
import LoadingDemo from "@/pages/loading-demo";
import Success from "@/pages/success";
import NotFound from "@/pages/not-found";
import AIDashboard from "@/pages/ai-dashboard";
import SetupMigration from "@/pages/setup-migration";
import CancelAnytime from "@/pages/cancel-anytime";
import ExpertSupport from "@/pages/expert-support";
import BankSecurity from "@/pages/bank-security";
import { BrandLoader } from "@/components/LoadingStates";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Switch>
      {isLoading ? (
        <Route>
          <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/50">
            <BrandLoader size="lg" message="Welcome to BusinessFlow Pro" />
          </div>
        </Route>
      ) : !isAuthenticated ? (
        <>
          <Route path="/" component={Landing} />
          <Route path="/features/invoicing" component={FeatureInvoicing} />
          <Route path="/features/expenses" component={FeatureExpenses} />
          <Route path="/features/tax" component={FeatureTax} />
          <Route path="/features/inventory" component={FeatureInventory} />
          <Route path="/features/mobile" component={FeatureMobile} />
          <Route path="/features/reports" component={FeatureReports} />
          <Route path="/features/debt" component={FeatureDebt} />
          <Route path="/features/security" component={FeatureSecurity} />
          <Route path="/features/migration" component={FeatureMigration} />
          <Route path="/features/clients" component={FeatureClients} />
          <Route path="/features/vendors" component={FeatureVendors} />
          <Route path="/features/calendar" component={FeatureCalendar} />
          <Route path="/features/attendance" component={FeatureAttendance} />
          <Route path="/about" component={About} />
          <Route path="/collaboration" component={Collaboration} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/trial" component={Trial} />
          <Route path="/subscribe" component={Subscribe} />
          <Route path="/compare" component={Compare} />
          <Route path="/compare-features" component={CompareFeatures} />
          <Route path="/loading-demo" component={LoadingDemo} />
          <Route path="/success" component={Success} />
          <Route path="/ai-dashboard" component={AIDashboard} />
          <Route path="/setup-migration" component={SetupMigration} />
          <Route path="/cancel-anytime" component={CancelAnytime} />
          <Route path="/expert-support" component={ExpertSupport} />
          <Route path="/bank-security" component={BankSecurity} />
        </>
      ) : (
        <>
          <Route path="/" component={Dashboard} />
          <Route path="/features/invoicing" component={FeatureInvoicing} />
          <Route path="/features/expenses" component={FeatureExpenses} />
          <Route path="/features/tax" component={FeatureTax} />
          <Route path="/features/inventory" component={FeatureInventory} />
          <Route path="/features/mobile" component={FeatureMobile} />
          <Route path="/features/reports" component={FeatureReports} />
          <Route path="/features/debt" component={FeatureDebt} />
          <Route path="/features/security" component={FeatureSecurity} />
          <Route path="/features/migration" component={FeatureMigration} />
          <Route path="/features/clients" component={FeatureClients} />
          <Route path="/features/vendors" component={FeatureVendors} />
          <Route path="/features/calendar" component={FeatureCalendar} />
          <Route path="/features/attendance" component={FeatureAttendance} />
          <Route path="/about" component={About} />
          <Route path="/collaboration" component={Collaboration} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/trial" component={Trial} />
          <Route path="/subscribe" component={Subscribe} />
          <Route path="/compare" component={Compare} />
          <Route path="/compare-features" component={CompareFeatures} />
          <Route path="/loading-demo" component={LoadingDemo} />
          <Route path="/success" component={Success} />
          <Route path="/ai-dashboard" component={AIDashboard} />
          <Route path="/setup-migration" component={SetupMigration} />
          <Route path="/cancel-anytime" component={CancelAnytime} />
          <Route path="/expert-support" component={ExpertSupport} />
          <Route path="/bank-security" component={BankSecurity} />
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AccessibilityProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AccessibilityProvider>
    </QueryClientProvider>
  );
}

export default App;
