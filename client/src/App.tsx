import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import Landing from "@/pages/landing";
import FeatureInvoicing from "@/pages/feature-invoicing";
import FeatureExpenses from "@/pages/feature-expenses";
import FeatureTax from "@/pages/feature-tax";
import FeatureInventory from "@/pages/feature-inventory";
import FeatureMobile from "@/pages/feature-mobile";
import FeatureReports from "@/pages/feature-reports";
import FeatureMultiCurrency from "@/pages/feature-multicurrency";
import FeatureSecurity from "@/pages/feature-security";
import FeatureMigration from "@/pages/feature-migration";
import Dashboard from "@/pages/dashboard";
import Subscribe from "@/pages/subscribe";
import Compare from "@/pages/compare";
import Calculator from "@/pages/calculator";
import Success from "@/pages/success";
import NotFound from "@/pages/not-found";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Switch>
      {isLoading ? (
        <Route>
          <div className="min-h-screen w-full flex items-center justify-center">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
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
          <Route path="/features/multicurrency" component={FeatureMultiCurrency} />
          <Route path="/features/security" component={FeatureSecurity} />
          <Route path="/features/migration" component={FeatureMigration} />
          <Route path="/subscribe" component={Subscribe} />
          <Route path="/compare" component={Compare} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/success" component={Success} />
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
          <Route path="/features/multicurrency" component={FeatureMultiCurrency} />
          <Route path="/features/security" component={FeatureSecurity} />
          <Route path="/features/migration" component={FeatureMigration} />
          <Route path="/subscribe" component={Subscribe} />
          <Route path="/compare" component={Compare} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/success" component={Success} />
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
