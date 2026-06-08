import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery_1.jpg";
import gallery2 from "@/assets/gallery_2.jpg";
import gallery3 from "@/assets/gallery_3.jpg";
import gallery4 from "@/assets/gallery_4.jpg";
import gallery5 from "@/assets/gallery_5.jpg";
import gallery6 from "@/assets/gallery_6.jpg";

const images = [
  { src: gallery1, className: "col-span-1 md:col-span-2 row-span-2 aspect-[4/3] md:aspect-auto" },
  { src: gallery2, className: "col-span-1 row-span-1 aspect-square" },
  { src: gallery3, className: "col-span-1 row-span-1 aspect-square" },
  { src: gallery4, className: "col-span-1 md:col-span-2 row-span-1 aspect-[2/1]" },
  { src: gallery5, className: "col-span-1 row-span-1 aspect-square" },
  { src: gallery6, className: "col-span-1 row-span-1 aspect-square" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Inspiring Moments</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Travel Gallery</h3>
            <p className="text-lg text-slate-600">
              A glimpse into the unforgettable memories we've helped create around the world.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden group ${img.className}`}
            >
              <img 
                src={img.src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.src = `https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80`;
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
