import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Star, Flame } from "lucide-react";
import tourFranceSpain from "@/assets/tour-france-spain-portugal.png";
import tourLourdes from "@/assets/tour-lourdes.png";
import tourMilanNetherlands from "@/assets/tour-milan-netherlands.png";

const departures = [
  {
    id: 1,
    title: "France, Portugal & Spain",
    subtitle: "A grand journey across three iconic European nations",
    image: tourFranceSpain,
    departure: "20th September 2026",
    duration: "10 Nights / 11 Days",
    price: "LKR 1,100,000",
    highlights: ["Paris & Versailles", "Camino de Santiago", "Lisbon & Sintra", "Barcelona"],
    badge: "Limited Seats",
    badgeColor: "bg-accent",
    featured: true,
  },
  {
    id: 2,
    title: "Lourdes Pilgrimage",
    subtitle: "A sacred journey to the world's most beloved Marian shrine",
    image: tourLourdes,
    departure: "6th September 2026",
    duration: "6 Nights / 7 Days",
    price: "LKR 675,000",
    highlights: ["Grotto of Massabielle", "Candlelight Procession", "Basilica of the Immaculate Conception", "Blessing of the Sick"],
    badge: "Selling Fast",
    badgeColor: "bg-[#0F4C81]",
    featured: false,
  },
  {
    id: 3,
    title: "Milan to Netherlands",
    subtitle: "From Italian elegance to Dutch charm across the continent",
    image: tourMilanNetherlands,
    departure: "15th October 2026",
    duration: "10 Nights / 11 Days",
    price: "LKR 1,175,000",
    highlights: ["Milan & Lake Como", "Swiss Alps Transit", "Rhine Valley", "Amsterdam Canals"],
    badge: "New Tour",
    badgeColor: "bg-emerald-600",
    featured: false,
  },
];

export function FeaturedDepartures() {
  return (
    <section id="featured-departures" className="py-20 bg-[#0F4C81] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #00A8E8 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FF7A00 0%, transparent 40%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Flame className="w-4 h-4 text-accent" />
            Upcoming Departures — Book Your Spot Now
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Specially Promoted Tours
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Handpicked departures with confirmed dates. These tours fill fast — reserve your seat before it's gone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {departures.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative flex flex-col rounded-3xl overflow-hidden shadow-2xl ${
                tour.featured ? "lg:scale-105 lg:-translate-y-2 ring-4 ring-accent/60" : ""
              } bg-white`}
            >
              {tour.featured && (
                <div className="absolute top-0 left-0 right-0 z-20 bg-accent text-white text-center text-xs font-bold tracking-widest uppercase py-2">
                  <Star className="inline w-3 h-3 mr-1 fill-white" />
                  Top Pick
                </div>
              )}

              <div className={`relative overflow-hidden ${tour.featured ? "aspect-[4/3] mt-7" : "aspect-[4/3]"}`}>
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute top-4 left-4 ${tour.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow`}>
                  {tour.badge}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="font-semibold">Departs: {tour.departure}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                  <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                  {tour.duration}
                </div>

                <h3 className="text-xl font-serif font-bold text-slate-900 mb-1 group-hover:text-[#0F4C81] transition-colors">
                  {tour.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{tour.subtitle}</p>

                <ul className="space-y-1.5 mb-6 flex-grow">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Per Person</p>
                    <p className="text-xl font-bold text-[#0F4C81]">{tour.price}</p>
                  </div>
                  <Button
                    data-testid={`btn-book-${tour.id}`}
                    className={`rounded-full font-semibold shadow-md transition-all ${
                      tour.featured
                        ? "bg-accent hover:bg-accent/90 text-white px-6"
                        : "bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white px-5"
                    }`}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-blue-300 text-sm mt-10"
        >
          All prices are per person. Contact us for group rates and early-bird offers.
        </motion.p>
      </div>
    </section>
  );
}
