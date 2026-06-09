import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Phone, Mail, Clock, MessageCircle, Globe } from "lucide-react";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { useQuote } from "@/context/QuoteContext";

const contactDetails = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["No. 226/1/1, Negombo Road,", "Wattala, Sri Lanka"],
    action: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=226/1/1+Negombo+Road+Wattala+Sri+Lanka",
    },
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    lines: ["+94 11-7392070 (Office)", "+94 77 737920 (Mobile)"],
    action: { label: "Call Office", href: "tel:+94117392070" },
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["+94 77 737920", "Chat with us anytime"],
    action: {
      label: "Open WhatsApp",
      href: "https://wa.me/9477737920",
    },
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["info@globalconnection.lk", "globalconnectionoperations@gmail.com"],
    action: { label: "Send Email", href: "mailto:info@globalconnection.lk" },
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Friday: 9:00 AM – 5:30 PM", "Saturday: 9:00 AM – 1:00 PM"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Contact() {
  const { openQuote } = useQuote();

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      <Navigation />

      {/* Header */}
      <div className="bg-[#0F4C81] pt-32 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 60%, #00A8E8 0%, transparent 50%), radial-gradient(circle at 85% 20%, #FF7A00 0%, transparent 40%)",
          }}
        />
        <div className="container mx-auto relative z-10 max-w-4xl">
          <Link href="/">
            <a
              className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm font-medium mb-8 transition-colors"
              data-testid="link-back-home-contact"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Globe className="w-9 h-9 text-accent" />
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Reach Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-5 leading-tight">
              We'd Love to<br />Hear From You
            </h1>
            <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
              Visit us at our Wattala office, call us directly, or send a WhatsApp message — we're here to help plan your perfect journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Map + Contact Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* Contact cards */}
            <motion.div
              className="lg:col-span-2 space-y-4"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {contactDetails.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0F4C81]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-[#0F4C81]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 mb-1.5">{item.title}</h4>
                      {item.lines.map((line) => (
                        <p key={line} className="text-slate-500 text-sm leading-relaxed">{line}</p>
                      ))}
                      {item.action && (
                        <a
                          href={item.action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`link-contact-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-2 hover:underline"
                        >
                          {item.action.label} →
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quick enquiry CTA */}
              <motion.div variants={fadeUp} className="bg-[#0F4C81] rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-2">Ready to Book?</h4>
                <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                  Get a personalised quote for any tour or destination — free, with no commitment.
                </p>
                <Button
                  data-testid="btn-contact-page-quote"
                  onClick={() => openQuote()}
                  className="w-full rounded-full bg-accent hover:bg-accent/90 text-white font-semibold"
                >
                  Get a Free Quote
                </Button>
              </motion.div>
            </motion.div>

            {/* Google Maps embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <iframe
                  title="Global Connection Travels & Tours — Wattala Office"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFmBWY&q=Negombo+Road+Wattala+Sri+Lanka"
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <div className="mt-4 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
                <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Global Connection Travels & Tours</p>
                  <p className="text-slate-500 text-sm">No. 226/1/1, Negombo Road, Wattala, Sri Lanka</p>
                  <a
                    href="https://maps.google.com/?q=226/1/1+Negombo+Road+Wattala+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm font-semibold hover:underline"
                    data-testid="link-google-maps-directions"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp banner */}
      <section className="py-16 bg-[#25D366]">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
              Prefer to Chat? Message Us on WhatsApp
            </h3>
            <p className="text-green-100 mb-6 text-lg">
              Our team is available to answer your questions, share itineraries, and confirm bookings — all via WhatsApp.
            </p>
            <a
              href="https://wa.me/9477737920"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-whatsapp-contact"
            >
              <Button className="rounded-full bg-white text-[#25D366] hover:bg-white/90 font-bold text-base px-8 h-12 shadow-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                +94 77 737920 — Chat Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
