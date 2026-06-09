import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import destFrance from "@/assets/dest-france.png";
import destSpain from "@/assets/dest-spain.png";
import destItaly from "@/assets/dest-italy.png";
import destUK from "@/assets/dest-uk.png";
import destGermany from "@/assets/dest-germany.png";
import destGreece from "@/assets/dest-greece.png";
import destTurkey from "@/assets/dest-turkey.png";
import destDubai from "@/assets/dest-dubai.png";
import destAustralia from "@/assets/dest-australia.png";
import destAmerica from "@/assets/dest-america.png";
import destIndia from "@/assets/dest-india.png";
import destThailand from "@/assets/dest-thailand.png";
import destMalaysia from "@/assets/dest-malaysia.png";
import destCanada from "@/assets/dest-canada.png";
import destEurope from "@/assets/dest-europe.png";

const destinations = [
  { name: "France", image: destFrance, price: "From LKR 875,000", duration: "8 Days" },
  { name: "Spain", image: destSpain, price: "From LKR 820,000", duration: "9 Days" },
  { name: "Italy", image: destItaly, price: "From LKR 895,000", duration: "8 Days" },
  { name: "United Kingdom", image: destUK, price: "From LKR 950,000", duration: "7 Days" },
  { name: "Germany", image: destGermany, price: "From LKR 860,000", duration: "8 Days" },
  { name: "Greece", image: destGreece, price: "From LKR 780,000", duration: "8 Days" },
  { name: "Turkey", image: destTurkey, price: "From LKR 695,000", duration: "7 Days" },
  { name: "Dubai", image: destDubai, price: "From LKR 425,000", duration: "5 Days" },
  { name: "Australia", image: destAustralia, price: "From LKR 1,450,000", duration: "12 Days" },
  { name: "America", image: destAmerica, price: "From LKR 1,550,000", duration: "14 Days" },
  { name: "India", image: destIndia, price: "From LKR 285,000", duration: "7 Days" },
  { name: "Thailand", image: destThailand, price: "From LKR 365,000", duration: "6 Days" },
  { name: "Malaysia", image: destMalaysia, price: "From LKR 320,000", duration: "5 Days" },
  { name: "Canada", image: destCanada, price: "From LKR 1,480,000", duration: "12 Days" },
  { name: "All of Europe", image: destEurope, price: "From LKR 1,100,000", duration: "14 Days" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
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
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">
              Where Will You Go?
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Popular Destinations
            </h3>
            <p className="text-lg text-slate-600">
              From sacred pilgrimages to grand European adventures — we cover the world so you can explore it.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {destinations.map((dest, index) => {
            const isLast = index === destinations.length - 1;
            const isSecondLast = index === destinations.length - 2;
            const totalCols = 5;
            const lastRowCount = destinations.length % totalCols || totalCols;
            const emptySlots = totalCols - lastRowCount;
            const leftPadding = Math.floor(emptySlots / 2);

            return (
              <motion.div
                key={dest.name}
                variants={itemVariants}
                data-testid={`dest-card-${dest.name.toLowerCase().replace(/\s+/g, "-")}`}
                style={
                  isLast && lastRowCount === 1
                    ? { gridColumn: `${leftPadding + 1}` }
                    : undefined
                }
              >
                <Link href={`/tours?destination=${encodeURIComponent(dest.name)}`}>
                  <Card className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 h-[320px] cursor-pointer rounded-2xl">
                    <CardContent className="p-0 h-full relative">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 w-full p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-base font-bold font-serif mb-1 leading-tight">
                          {dest.name}
                        </h4>
                        <div className="flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          <span className="text-xs font-medium text-white/80">{dest.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
