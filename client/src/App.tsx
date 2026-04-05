import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { lazy, Suspense } from "react";
import Landing from "@/pages/landing";
import { BrandLoader } from "@/components/LoadingStates";

const Features = lazy(() => import("@/pages/features"));
const FeatureInvoicing = lazy(() => import("@/pages/feature-invoicing"));
const FeatureExpenses = lazy(() => import("@/pages/feature-expenses"));
const FeatureTax = lazy(() => import("@/pages/feature-tax"));
const FeatureInventory = lazy(() => import("@/pages/feature-inventory"));
const FeatureMobile = lazy(() => import("@/pages/feature-mobile"));
const FeatureReports = lazy(() => import("@/pages/feature-reports"));
const FeatureDebt = lazy(() => import("@/pages/feature-debt"));
const FeatureSecurity = lazy(() => import("@/pages/feature-security"));
const FeatureMigration = lazy(() => import("@/pages/feature-migration"));
const FeatureClients = lazy(() => import("@/pages/feature-clients"));
const FeatureVendors = lazy(() => import("@/pages/feature-vendors"));
const FeatureCalendar = lazy(() => import("@/pages/feature-calendar"));
const FeatureAttendance = lazy(() => import("@/pages/feature-attendance"));
const FeatureHR = lazy(() => import("@/pages/feature-hr"));
const FeatureQuotes = lazy(() => import("@/pages/feature-quotes"));
const FeatureFleet = lazy(() => import("@/pages/feature-fleet"));
const FeatureMaintenance = lazy(() => import("@/pages/feature-maintenance"));
const FeaturePayroll = lazy(() => import("@/pages/feature-payroll"));
const FeatureLeaves = lazy(() => import("@/pages/feature-leaves"));
const FeatureBuyerCards = lazy(() => import("@/pages/feature-buyer-cards"));
const FeatureTraining = lazy(() => import("@/pages/feature-training"));
const About = lazy(() => import("@/pages/about"));
const Collaboration = lazy(() => import("@/pages/collaboration"));
const Contact = lazy(() => import("@/pages/contact"));
const Login = lazy(() => import("@/pages/login"));
const Trial = lazy(() => import("@/pages/trial"));
const Dashboard = lazy(() => import("@/pages/dashboard"));
const Subscribe = lazy(() => import("@/pages/subscribe"));
const Compare = lazy(() => import("@/pages/compare"));
const CompareFeatures = lazy(() => import("@/pages/compare-features"));
const LoadingDemo = lazy(() => import("@/pages/loading-demo"));
const Success = lazy(() => import("@/pages/success"));
const NotFound = lazy(() => import("@/pages/not-found"));
const AIDashboard = lazy(() => import("@/pages/ai-dashboard"));
const SetupMigration = lazy(() => import("@/pages/setup-migration"));
const MigrationRequest = lazy(() => import("@/pages/migration-request"));
const CancelAnytime = lazy(() => import("@/pages/cancel-anytime"));
const ExpertSupport = lazy(() => import("@/pages/expert-support"));
const BankSecurity = lazy(() => import("@/pages/bank-security"));
const DataProtection = lazy(() => import("@/pages/data-protection"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const MobileApp = lazy(() => import("@/pages/mobile-app"));
const Integrations = lazy(() => import("@/pages/integrations"));
const API = lazy(() => import("@/pages/api"));
const Careers = lazy(() => import("@/pages/careers"));
const HelpCenter = lazy(() => import("@/pages/help-center"));
const Tutorials = lazy(() => import("@/pages/tutorials"));
const Community = lazy(() => import("@/pages/community"));
const Blog = lazy(() => import("@/pages/blog"));
const CaseStudies = lazy(() => import("@/pages/case-studies"));
const BestPractices = lazy(() => import("@/pages/best-practices"));
const FAQ = lazy(() => import("@/pages/faq"));
const Affiliate = lazy(() => import("@/pages/affiliate"));

const getLoadingText = () => {
  try {
    const lang = localStorage.getItem('clientlly-language') || 'sq';
    switch(lang) { case 'en': return 'Loading...'; case 'es': return 'Cargando...'; case 'de': return 'Wird geladen...'; case 'mk': return 'Се вчитува...'; default: return 'Duke ngarkuar...'; }
  } catch { return 'Duke ngarkuar...'; }
};
const PageLoader = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin" style={{borderWidth: '3px'}} />
      <p className="text-sm text-gray-500 font-medium">{getLoadingText()}</p>
    </div>
  </div>
);

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {isLoading ? (
          <Route>
            <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/50">
              <BrandLoader size="lg" message={getLoadingText()} />
            </div>
          </Route>
        ) : !isAuthenticated ? (
          <>
            <Route path="/" component={Landing} />
            <Route path="/features" component={Features} />
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
            <Route path="/features/hr" component={FeatureHR} />
            <Route path="/features/quotes" component={FeatureQuotes} />
            <Route path="/features/fleet" component={FeatureFleet} />
            <Route path="/features/maintenance" component={FeatureMaintenance} />
            <Route path="/features/payroll" component={FeaturePayroll} />
            <Route path="/features/leaves" component={FeatureLeaves} />
            <Route path="/features/buyer-cards" component={FeatureBuyerCards} />
            <Route path="/features/training" component={FeatureTraining} />
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
            <Route path="/migration-request" component={MigrationRequest} />
            <Route path="/cancel-anytime" component={CancelAnytime} />
            <Route path="/expert-support" component={ExpertSupport} />
            <Route path="/bank-security" component={BankSecurity} />
            <Route path="/data-protection" component={DataProtection} />
            <Route path="/terms-of-service" component={TermsOfService} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/mobile-app" component={MobileApp} />
            <Route path="/integrations" component={Integrations} />
            <Route path="/api" component={API} />
            <Route path="/careers" component={Careers} />
            <Route path="/help-center" component={HelpCenter} />
            <Route path="/tutorials" component={Tutorials} />
            <Route path="/community" component={Community} />
            <Route path="/blog" component={Blog} />
            <Route path="/case-studies" component={CaseStudies} />
            <Route path="/best-practices" component={BestPractices} />
            <Route path="/faq" component={FAQ} />
            <Route path="/affiliate" component={Affiliate} />
          </>
        ) : (
          <>
            <Route path="/" component={Dashboard} />
            <Route path="/features" component={Features} />
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
            <Route path="/features/hr" component={FeatureHR} />
            <Route path="/features/quotes" component={FeatureQuotes} />
            <Route path="/features/fleet" component={FeatureFleet} />
            <Route path="/features/maintenance" component={FeatureMaintenance} />
            <Route path="/features/payroll" component={FeaturePayroll} />
            <Route path="/features/leaves" component={FeatureLeaves} />
            <Route path="/features/buyer-cards" component={FeatureBuyerCards} />
            <Route path="/features/training" component={FeatureTraining} />
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
            <Route path="/migration-request" component={MigrationRequest} />
            <Route path="/cancel-anytime" component={CancelAnytime} />
            <Route path="/expert-support" component={ExpertSupport} />
            <Route path="/bank-security" component={BankSecurity} />
            <Route path="/data-protection" component={DataProtection} />
            <Route path="/terms-of-service" component={TermsOfService} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/mobile-app" component={MobileApp} />
            <Route path="/integrations" component={Integrations} />
            <Route path="/api" component={API} />
            <Route path="/careers" component={Careers} />
            <Route path="/help-center" component={HelpCenter} />
            <Route path="/tutorials" component={Tutorials} />
            <Route path="/community" component={Community} />
            <Route path="/blog" component={Blog} />
            <Route path="/case-studies" component={CaseStudies} />
            <Route path="/best-practices" component={BestPractices} />
            <Route path="/faq" component={FAQ} />
            <Route path="/affiliate" component={Affiliate} />
          </>
        )}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
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
