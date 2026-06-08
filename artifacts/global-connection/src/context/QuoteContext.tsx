import { createContext, useContext, useState } from "react";

export interface QuoteDefaults {
  tour?: string;
  destination?: string;
  departure?: string;
  price?: string;
}

interface QuoteContextValue {
  isOpen: boolean;
  defaults: QuoteDefaults;
  openQuote: (defaults?: QuoteDefaults) => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaults, setDefaults] = useState<QuoteDefaults>({});

  const openQuote = (d: QuoteDefaults = {}) => {
    setDefaults(d);
    setIsOpen(true);
  };

  const closeQuote = () => {
    setIsOpen(false);
  };

  return (
    <QuoteContext.Provider value={{ isOpen, defaults, openQuote, closeQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}
