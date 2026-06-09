import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Globe, Award, Heart, Shield, Users, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { useQuote } from "@/context/QuoteContext";

const milestones = [
  { year: "2008", title: "Founded", description: "Global Connection Travels & Tours established in Sri Lanka with a mission to serve pilgrims and holiday travelers worldwide." },
  { year: "2011", title: "First Pilgrimage", description: "Successfully organized our inaugural Holy Land pilgrimage group — 42 travelers, zero complications." },
  { year: "2015", title: "Expanded Services", description: "Launched full visa assistance, hotel reservations, and cruise package services across 20+ destinations." },
  { year: "2018", title: "5,000 Travelers", description: "Reached the milestone of 5,000 happy travelers — a testament to our commitment to quality and care." },
  { year: "2022", title: "Europe Specialists", description: "Became recognized specialists for European pilgrimage and holiday tours, including France, Greece, and Italy." },
  { year: "2026", title: "Today", description: "Over 5,000 travelers served, 150+ tours conducted across 40+ destinations — and still growing." },
];

const values = [
  {
    icon: Heart,
    title: "Genuine Care",
    description: "Every traveler is treated like family. From the first enquiry to the safe return home, we are with you every step of the journey.",
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "15+ years of flawless operations. We handle every detail — visas, flights, hotels, transfers — so you can travel with complete peace of mind.",
  },
  {
    icon: Award,
    title: "Expert Knowledge",
    description: "Our team has personally visited every destination we offer. We share insider knowledge, not just itineraries.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We specialize in pilgrimage and group travel, building journeys that create lasting bonds among fellow travelers.",
  },
];

const team = [
  {
    name: "Founder & Managing Director",
    role: "Pilgrimages & Europe Tours Specialist",
    description: "With over 15 years in the travel industry, our founder personally oversees every major pilgrimage and ensures each group receives the highest level of care.",
  },
  {
    name: "Head of Operations",
    role: "Visa & Documentation Expert",
    description: "Our operations head manages all visa applications, documentation, and travel logistics with meticulous attention to detail.",
  },
  {
    name: "Senior Travel Consultant",
    role: "Holiday Tours & Air Ticketing",
    description: "Specializing in holiday packages and airline reservations, our consultant ensures the best routes and fares for every traveler.",
  },
  {
    name: "Client Relations Manager",
    role: "Group Coordinator & 24/7 Support",
    description: "Available around the clock, our client relations team ensures travelers always have someone to call — before, during, and after the trip.",
  },
];

const certifications = [
  "Sri Lanka Tourism Development Authority Registered",
  "IATA Accredited Agent",
  "Member — Sri Lanka Association of Inbound Tour Operators",
  "Licensed Air Ticketing Agent",
  "Approved Hajj & Umrah Operator",
  "15+ Years Pilgrimage Specialist",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const { openQuote } = useQuote();

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      <Navigation />

      {/* Page Header */}
      <div className="bg-[#0F4C81] pt-32 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 60%, #00A8E8 0%, transparent 50%), radial-gradient(circle at 85% 20%, #FF7A00 0%, transparent 40%)",
          }}
        />
        <div className="container mx-auto relative z-10 max-w-4xl">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm font-medium mb-8 transition-colors" data-testid="link-back-home-about">
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
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Connecting People<br />to the World Since 2008
            </h1>
            <p className="text-blue-200 text-lg md:text-xl max-w-2xl leading-relaxed">
              Global Connection Travels & Tours is Sri Lanka's trusted partner for pilgrimages, holiday tours, visa assistance, and air ticketing — built on 15+ years of genuine service and thousands of happy travelers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                More Than a Travel Agency — We Are Your Travel Family
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2008, Global Connection Travels & Tours was born from a simple belief: travel should be accessible, stress-free, and deeply meaningful — especially for those embarking on sacred pilgrimages.
                </p>
                <p>
                  What began as a small pilgrimage organizer serving the Sri Lankan community has grown into a full-service travel company serving thousands of travelers each year across Europe, the Middle East, Asia, Australia, and the Americas.
                </p>
                <p>
                  We specialize in pilgrimage tours to Lourdes, the Holy Land, Fatima, and Greece — as well as premium holiday packages to destinations across the globe. Every tour we design is built around one priority: <span className="font-semibold text-slate-800">your experience.</span>
                </p>
              </div>
              <Button
                data-testid="btn-about-get-quote"
                onClick={() => openQuote()}
                className="mt-8 rounded-full bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-semibold px-8 h-12"
              >
                Plan Your Journey
              </Button>
            </motion.div>

            {/* Stats panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { value: "15+", label: "Years of Experience", color: "bg-[#0F4C81]" },
                { value: "5,000+", label: "Happy Travelers", color: "bg-accent" },
                { value: "150+", label: "Tours Conducted", color: "bg-[#00A8E8]" },
                { value: "40+", label: "Destinations", color: "bg-slate-800" },
              ].map((stat) => (
                <div key={stat.label} className={`${stat.color} rounded-2xl p-7 text-white`}>
                  <p className="text-4xl font-serif font-bold mb-1">{stat.value}</p>
                  <p className="text-sm font-medium opacity-80">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">What Drives Us</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Our Core Values</h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F4C81]/10 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-[#0F4C81]" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Our Journey</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Milestones & Moments</h3>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-6 md:gap-10 items-start"
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-serif font-bold text-sm text-white shadow-md ${m.year === "2026" ? "bg-accent" : "bg-[#0F4C81]"}`}>
                      {m.year}
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 flex-1 border border-slate-100">
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{m.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">The People Behind the Journeys</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Our Team</h3>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Experienced, passionate, and dedicated — our team ensures every journey is handled with expertise and warmth.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-32 bg-gradient-to-br from-[#0F4C81] to-[#00A8E8] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-slate-900 mb-0.5">{member.name}</h4>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wide mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#0F4C81] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 50%, #00A8E8 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-3">Credentials & Recognition</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Licensed, Accredited & Trusted</h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert}
                variants={fadeUp}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white text-sm font-medium">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-slate-500 text-lg mb-8">
              Talk to our team today — we'll craft the perfect tour tailored to your needs, budget, and travel dates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                data-testid="btn-about-cta-quote"
                onClick={() => openQuote()}
                className="rounded-full bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-semibold px-8 h-12"
              >
                Get a Free Quote
              </Button>
              <div className="flex items-center gap-6 text-slate-500 text-sm">
                <a href="tel:+94117392070" className="flex items-center gap-1.5 hover:text-[#0F4C81] transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                  +94 11-7392070
                </a>
                <a href="mailto:info@globalconnection.lk" className="flex items-center gap-1.5 hover:text-[#0F4C81] transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                  info@globalconnection.lk
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
