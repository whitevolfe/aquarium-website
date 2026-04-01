import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import heroImg from "@/assets/hero-aquarium.jpg";

const images = [
  { src: heroImg, title: "Living Room Display", w: 1920, h: 1080 },
  { src: portfolio1, title: "Office Reef Tank", w: 800, h: 1024 },
  { src: portfolio2, title: "Restaurant Feature", w: 800, h: 1024 },
  { src: portfolio3, title: "Penthouse Aquarium", w: 1024, h: 800 },
  { src: portfolio5, title: "Hotel Lobby", w: 800, h: 1024 },
  { src: portfolio6, title: "Bedroom Wall Tank", w: 1024, h: 800 },
];

const PortfolioGrid = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="portfolio" className="section-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="label-tag">Portfolio</span>
          <h2 className="section-title mt-2">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(i)}
              className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={img.w}
                height={img.h}
              />
              <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/50 transition-all duration-500 flex items-end p-4">
                <span className="text-secondary-foreground font-display font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-deep/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-secondary-foreground hover:text-amber">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].title}
              className="max-w-full max-h-[85vh] rounded-sm object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGrid;
