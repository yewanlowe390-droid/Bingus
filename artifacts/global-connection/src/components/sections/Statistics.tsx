import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ end, suffix = "", prefix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end));
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, isInView]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif tracking-tight">
      {prefix}{count}{suffix}
    </div>
  );
}

const stats = [
  { label: "Happy Travelers", value: 5000, suffix: "+" },
  { label: "Tours Conducted", value: 150, suffix: "+" },
  { label: "Destinations", value: 40, suffix: "+" },
  { label: "Years Experience", value: 15, suffix: "+" },
];

export function Statistics() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-primary-foreground/80 font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
