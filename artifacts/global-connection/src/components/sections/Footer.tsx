import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Global Connection Travels & Tours"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-2xl font-bold tracking-tight text-white">Global Connection</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your trusted partner for pilgrimages and premium holidays. Creating unforgettable journeys worldwide with over 15 years of excellence.
            </p>
            <div className="flex gap-4">
              <a href="https://web.facebook.com/globalconnectionlk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><a href="#destinations" className="hover:text-accent transition-colors">Destinations</a></li>
              <li><Link href="/tours" className="hover:text-accent transition-colors">Tour Packages</Link></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="leading-relaxed">No. 226/1/1, Negombo Road,<br />Wattala, Sri Lanka</li>
              <li>
                <a href="tel:+94117392070" className="hover:text-accent transition-colors">+94 11-7392070 (Office)</a>
              </li>
              <li>
                <a href="https://wa.me/9477737920" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">+94 77 737920 (WhatsApp)</a>
              </li>
              <li>
                <a href="mailto:globalconnectionoperations@gmail.com" className="hover:text-accent transition-colors">globalconnectionoperations@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to receive our latest offers and travel inspiration.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white font-medium rounded-lg px-4 py-3 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Global Connection Travels & Tours. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
