import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import destJordan from "@/assets/dest-jordan.png";
import destGreece from "@/assets/dest-greece.png";
import destDubai from "@/assets/dest-dubai.png";
import destEurope from "@/assets/dest-europe.png";
import destSriLanka from "@/assets/dest-srilanka.png";

const destinations = [
  { name: "Jordan & Holy Land", image: destJordan, price: "From $1,299", duration: "10 Days" },
  { name: "Greece", image: destGreece, price: "From $1,499", duration: "8 Days" },
  { name: "Dubai", image: destDubai, price: "From $899", duration: "5 Days" },
  { name: "Europe", image: destEurope, price: "From $2,199", duration: "14 Days" },
  { name: "Sri Lanka", image: destSriLanka, price: "From $699", duration: "7 Days" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Top Locations</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Popular Destinations</h3>
            <p className="text-lg text-slate-600">
              Discover the most sought-after locations for spiritual journeys and unforgettable holidays.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {destinations.map((dest) => (
            <motion.div key={dest.name} variants={itemVariants}>
              <Card className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 h-[400px] cursor-pointer rounded-2xl">
                <CardContent className="p-0 h-full relative">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-bold font-serif mb-1">{dest.name}</h4>
                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <span className="text-sm font-medium text-white/90">{dest.duration}</span>
                      <span className="text-accent font-bold">{dest.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
