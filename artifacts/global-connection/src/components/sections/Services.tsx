import { motion } from "framer-motion";
import { Plane, FileText, Building2, Ship, Map, Umbrella } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Plane,
    title: "Air Ticketing",
    description: "Worldwide flight bookings with the best connections and competitive rates."
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "Comprehensive visa processing support for tourist and pilgrimage travels."
  },
  {
    icon: Building2,
    title: "Hotel Reservations",
    description: "Carefully selected accommodations ranging from boutique to luxury."
  },
  {
    icon: Ship,
    title: "Cruise Packages",
    description: "Unforgettable ocean and river cruises across the globe's most scenic routes."
  },
  {
    icon: Map,
    title: "Pilgrimage Tours",
    description: "Specialized spiritual journeys with expert guides and well-planned itineraries."
  },
  {
    icon: Umbrella,
    title: "Custom Holidays",
    description: "Tailor-made vacation packages designed around your personal preferences."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">What We Offer</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Our Premium Services</h3>
            <p className="text-lg text-slate-600">
              From the moment you start planning until you return home, we handle every detail with expertise.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group rounded-xl">
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 font-serif">{service.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
