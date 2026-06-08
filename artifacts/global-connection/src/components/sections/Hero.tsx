import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import heroImg from "@/assets/hero.png";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Hot air balloons over Cappadocia" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-24 pb-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium tracking-wider mb-6">
            15+ YEARS OF EXCELLENCE
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-serif">
            Explore the World with <span className="text-accent italic">Confidence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light tracking-wide">
            Pilgrimages • Holiday Tours • Air Ticketing • Visa Services
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="rounded-full px-8 h-14 text-base w-full sm:w-auto bg-accent hover:bg-accent/90 text-white border-none">
              View Tours
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
              Get Free Consultation
            </Button>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="bg-white p-2 rounded-full flex flex-col sm:flex-row shadow-xl max-w-2xl mx-auto gap-2"
          >
            <div className="flex-1 flex items-center px-4">
              <MapPin className="text-muted-foreground w-5 h-5 mr-3" />
              <Input 
                placeholder="Where do you want to go?" 
                className="border-none shadow-none focus-visible:ring-0 px-0 text-base placeholder:text-muted-foreground"
              />
            </div>
            <Button className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
