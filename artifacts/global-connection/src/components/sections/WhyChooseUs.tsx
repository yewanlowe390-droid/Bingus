import { motion } from "framer-motion";
import { ShieldCheck, PlaneTakeoff, HeartHandshake, Globe2, Headset, BookOpenCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { icon: ShieldCheck, title: "15+ Years Experience", description: "A legacy of trust and excellence in the travel industry." },
  { icon: BookOpenCheck, title: "Visa Assistance", description: "Hassle-free visa processing with expert guidance." },
  { icon: PlaneTakeoff, title: "Airline Ticketing", description: "Best rates and seamless booking for global airlines." },
  { icon: HeartHandshake, title: "Pilgrimage Specialists", description: "Dedicated spiritual journeys curated with utmost care." },
  { icon: Globe2, title: "Worldwide Tours", description: "Customized holiday packages across all continents." },
  { icon: Headset, title: "24/7 Support", description: "Round-the-clock assistance throughout your journey." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">The Global Connection Difference</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Why Choose Us For Your Next Journey?
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We don't just book tickets; we craft experiences. With over 15 years of industry expertise, we ensure every detail of your trip is handled with precision, care, and a personal touch.
            </p>
            <div className="h-1 w-20 bg-accent rounded-full mb-8" />
          </motion.div>

          <motion.div 
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-slate-50">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
