import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, MapPin, Calendar, ChevronRight } from "lucide-react";
import { tours } from "@/data/toursData";

const featured = tours.filter((t) => t.badge === "Featured" || [1, 4, 9, 17].includes(t.id)).slice(0, 4);

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
            <Link href="/tours">
              <Button variant="outline" className="rounded-full" data-testid="btn-view-all-tours">
                View All Packages
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((tour, index) => (
            <motion.div
              key={tour.id}
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
                  {tour.departure && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                      <div className="flex items-center gap-1.5 text-white text-xs font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {tour.departure}
                      </div>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground mb-3 gap-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-accent" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-accent" />
                      {tour.country[0] ?? "International"}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 font-serif group-hover:text-primary transition-colors">
                    {tour.title}
                  </h4>
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-3">
                    {tour.description}
                  </p>
                  <ul className="space-y-1">
                    {tour.highlights.slice(0, 2).map((h) => (
                      <li key={h} className="flex items-center gap-1.5 text-xs text-slate-500">
                        <ChevronRight className="w-3 h-3 text-accent flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto">
                  <Link href="/tours" className="w-full">
                    <Button
                      data-testid={`btn-tour-details-${tour.id}`}
                      className="w-full rounded-full bg-slate-900 hover:bg-primary text-white transition-colors"
                    >
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
