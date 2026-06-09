import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ToursPage from "@/pages/Tours";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import { QuoteProvider } from "@/context/QuoteContext";
import { QuoteModal } from "@/components/QuoteModal";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tours" component={ToursPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <QuoteProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <QuoteModal />
          <Toaster />
        </QuoteProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
