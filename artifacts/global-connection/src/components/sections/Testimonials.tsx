import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  {
    name: "Sarah & David M.",
    location: "Holy Land Tour",
    quote: "Our pilgrimage to the Holy Land was profoundly moving. Global Connection handled every detail perfectly, allowing us to focus entirely on the spiritual experience. The guide was incredibly knowledgeable.",
    rating: 5
  },
  {
    name: "Raj P.",
    location: "Dubai Vacation",
    quote: "From the visa processing to the desert safari, everything was seamless. They really took the stress out of planning a family vacation. Highly recommend their premium services!",
    rating: 5
  },
  {
    name: "Elena G.",
    location: "Greece Explorer",
    quote: "I've traveled with many agencies, but the personalized care from Global Connection stands out. The boutique hotels they selected in Santorini were breathtaking.",
    rating: 5
  },
  {
    name: "Father Joseph",
    location: "Group Pilgrimage",
    quote: "Organizing a group of 40 pilgrims is no small task. The team at Global Connection demonstrated incredible patience and professionalism. A truly blessed journey.",
    rating: 5
  }
];

export function Testimonials() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-3xl transform translate-x-1/3 rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Client Stories</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">Words from our Travelers</h3>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{ align: "center", loop: true }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl text-center mx-2">
                    <Quote className="w-12 h-12 text-accent/50 mx-auto mb-6" />
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl font-light italic leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-[-50px] bg-white/10 hover:bg-white/20 border-none text-white" />
              <CarouselNext className="right-[-50px] bg-white/10 hover:bg-white/20 border-none text-white" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
