import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuote } from "@/context/QuoteContext";

export function Navigation() {
  const { openQuote } = useQuote();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Destinations", href: "#destinations", external: false },
    { name: "Tours", href: "/tours", external: true },
    { name: "Services", href: "#services", external: false },
    { name: "Gallery", href: "#gallery", external: false },
    { name: "Contact", href: "#contact", external: false },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Globe className={`h-8 w-8 ${isScrolled ? "text-primary" : "text-white"}`} />
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? "text-primary" : "text-white"}`}>Global Connection</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.external ? (
              <Link key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-slate-700" : "text-white/90"}`}>
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-slate-700" : "text-white/90"}`}>
                {link.name}
              </a>
            )
          )}
          <Button
            data-testid="btn-get-quote"
            variant={isScrolled ? "default" : "secondary"}
            className="font-semibold rounded-full px-6"
            onClick={() => openQuote()}
          >
            Get Quote
          </Button>
        </nav>

        <button 
          data-testid="btn-mobile-menu"
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? "text-primary" : "text-white"} /> : <Menu className={isScrolled ? "text-primary" : "text-white"} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.external ? (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-800 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-800 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            )
          )}
          <Button
            data-testid="btn-mobile-get-quote"
            className="w-full mt-2 rounded-full"
            onClick={() => { openQuote(); setIsMobileMenuOpen(false); }}
          >
            Get Quote
          </Button>
        </div>
      )}
    </header>
  );
}
