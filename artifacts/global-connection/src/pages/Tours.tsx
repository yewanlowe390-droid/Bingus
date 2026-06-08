import { useState, useEffect } from "react";
import { useSearch, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, MapPin, Calendar, ChevronRight, Globe, ArrowLeft, Search } from "lucide-react";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { tours, ALL_DESTINATIONS } from "@/data/toursData";
import type { Tour } from "@/data/toursData";
import { useQuote } from "@/context/QuoteContext";

function TourCard({ tour, index }: { tour: Tour; index: number }) {
  const { openQuote } = useQuote();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      data-testid={`tour-card-${tour.id}`}
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
          <div className="absolute top-0 inset-x-0 p-4 flex items-start justify-between">
            {tour.badge ? (
              <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow text-white ${
                tour.badge === "Featured" ? "bg-accent" :
                tour.badge === "Pilgrimage" ? "bg-[#0F4C81]" :
                "bg-emerald-600"
              }`}>
                {tour.badge}
              </span>
            ) : <span />}
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#0F4C81] font-bold text-sm shadow-sm">
              {tour.price}
            </span>
          </div>
          {tour.departure && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
              <div className="flex items-center gap-1.5 text-white text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                Departs: {tour.departure}
              </div>
            </div>
          )}
        </CardHeader>

        <CardContent className="p-6 flex-grow">
          <div className="flex items-center flex-wrap text-sm text-muted-foreground mb-3 gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-accent" />
              {tour.duration}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-accent" />
              {tour.country[0] ?? "International"}
            </div>
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2 font-serif group-hover:text-[#0F4C81] transition-colors">
            {tour.title}
          </h4>
          <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-4">
            {tour.description}
          </p>
          <ul className="space-y-1">
            {tour.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-center gap-2 text-xs text-slate-500">
                <ChevronRight className="w-3 h-3 text-accent flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Button
            data-testid={`btn-enquire-${tour.id}`}
            onClick={() => openQuote({ tour: tour.title, departure: tour.departure, price: tour.price })}
            className="w-full rounded-full bg-[#0F4C81] hover:bg-[#0F4C81]/90 text-white font-semibold"
          >
            Enquire Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function ToursPage() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const initialDest = params.get("destination") ?? "All";

  const [activeFilter, setActiveFilter] = useState(initialDest);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const d = params.get("destination") ?? "All";
    setActiveFilter(d);
  }, [search]);

  const filtered = tours.filter((t) => {
    const matchesDest =
      activeFilter === "All" || t.country.includes(activeFilter);
    const matchesSearch =
      !searchQuery ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.country.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDest && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      <Navigation />

      {/* Page Header */}
      <div className="bg-[#0F4C81] pt-32 pb-16 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 60%, #00A8E8 0%, transparent 50%), radial-gradient(circle at 90% 20%, #FF7A00 0%, transparent 40%)",
          }}
        />
        <div className="container mx-auto relative z-10">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm font-medium mb-6 transition-colors" data-testid="link-back-home">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-accent" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
              All Tour Packages
            </h1>
          </div>
          <p className="text-blue-200 text-lg max-w-2xl">
            Browse our full collection of handcrafted tours and pilgrimages. Filter by destination to find the perfect journey.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          {/* Search */}
          <div className="relative mb-4 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              data-testid="input-tour-search"
              type="text"
              placeholder="Search tours by name or destination..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/30 focus:border-[#0F4C81] transition-all"
            />
          </div>

          {/* Destination filter chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {ALL_DESTINATIONS.map((dest) => (
              <button
                key={dest}
                data-testid={`filter-${dest.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveFilter(dest)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                  activeFilter === dest
                    ? "bg-[#0F4C81] text-white border-[#0F4C81] shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#0F4C81] hover:text-[#0F4C81]"
                }`}
              >
                {dest}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-slate-500 text-sm">
            Showing <span className="font-semibold text-slate-800">{filtered.length}</span> tour{filtered.length !== 1 ? "s" : ""}
            {activeFilter !== "All" && (
              <> in <span className="font-semibold text-[#0F4C81]">{activeFilter}</span></>
            )}
          </p>
          {activeFilter !== "All" && (
            <button
              data-testid="btn-clear-filter"
              onClick={() => setActiveFilter("All")}
              className="text-sm text-accent underline hover:text-accent/80 font-medium"
            >
              Clear filter
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={activeFilter + searchQuery}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((tour, i) => (
                <TourCard key={tour.id} tour={tour} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <Globe className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-700 mb-2">No tours found</h3>
              <p className="text-slate-400 text-sm mb-6">Try a different destination or clear your search.</p>
              <Button
                onClick={() => { setActiveFilter("All"); setSearchQuery(""); }}
                className="rounded-full"
              >
                View all tours
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
