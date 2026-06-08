import { useState } from "react";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Destinations } from "@/components/sections/Destinations";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Tours } from "@/components/sections/Tours";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Statistics } from "@/components/sections/Statistics";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="https://wa.me/1234567890" // Placeholder
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid="floating-whatsapp"
    >
      <MessageCircle className="w-7 h-7" />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: -70, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute right-0 whitespace-nowrap bg-white text-slate-800 px-4 py-2 rounded-lg shadow-md font-medium text-sm"
          >
            Chat with us!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navigation />
      <main>
        <Hero />
        <Destinations />
        <WhyChooseUs />
        <Tours />
        <Services />
        <Testimonials />
        <Statistics />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
