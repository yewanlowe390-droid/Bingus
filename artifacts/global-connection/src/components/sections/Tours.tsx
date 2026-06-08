import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import tourHolyLand from "@/assets/tour-holyland.png";
import tourPetra from "@/assets/tour-petra.png";
import tourGreece from "@/assets/tour-greece.png";
import tourSriLanka from "@/assets/tour-srilanka.png";

const tours = [
  {
    title: "Holy Land Pilgrimage",
    image: tourHolyLand,
    duration: "10 Days",
    location: "Israel & Palestine",
    price: "$2,499",
    description: "A deeply spiritual journey walking in the footsteps of faith across Jerusalem, Bethlehem, and Galilee."
  },
  {
    title: "Jordan & Petra Expedition",
    image: tourPetra,
    duration: "8 Days",
    location: "Jordan",
    price: "$1,899",
    description: "Discover the ancient wonders of the Rose City, the vast Wadi Rum desert, and float in the Dead Sea."
  },
  {
    title: "Grecian Antiquities",
    image: tourGreece,
    duration: "12 Days",
    location: "Greece",
    price: "$2,899",
    description: "Explore the cradle of Western civilization, from the Acropolis to the stunning islands of the Aegean."
  },
  {
    title: "Sri Lanka Discovery",
    image: tourSriLanka,
    duration: "9 Days",
    location: "Sri Lanka",
    price: "$1,299",
    description: "Experience lush tea plantations, ancient temples, golden beaches, and magnificent wildlife."
  }
];

export function Tours() {
  return (
    <section id="tours" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Handpicked Journeys</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Featured Tour Packages</h3>
            <p className="text-lg text-slate-600">
              Expertly crafted itineraries balancing exploration, relaxation, and cultural immersion.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Button variant="outline" className="rounded-full">View All Packages</Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group h-full flex flex-col border-none shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
                <CardHeader className="p-0 overflow-hidden relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-bold text-sm shadow-sm">
                    {tour.price}
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground mb-3 gap-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-accent" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-accent" />
                      {tour.location}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 font-serif group-hover:text-primary transition-colors">
                    {tour.title}
                  </h4>
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                    {tour.description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto">
                  <Button className="w-full rounded-full bg-slate-900 hover:bg-primary text-white transition-colors">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
