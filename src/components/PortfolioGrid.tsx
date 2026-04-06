import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import portfolio1 from '@/assets/aquareef-img1.jpeg';
import portfolio2 from '@/assets/aquareef-img2.jpeg';
import portfolio3 from '@/assets/aquareef-img3.jpeg';
import portfolio5 from '@/assets/aquareef-img5.jpeg';
import portfolio6 from '@/assets/aquareef-img6.jpeg';
import portfolio7 from '@/assets/aquareef-img7.jpeg';
import portfolio8 from '@/assets/aquareef-img8.jpeg';
import portfolio9 from '@/assets/aquareef-img9.jpeg';
import portfolio10 from '@/assets/aquareef-img10.jpeg';
import portfolio11 from '@/assets/aquareef-img11.jpeg';
import portfolio12 from '@/assets/aquareef-img12.jpeg';
import portfolio13 from '@/assets/aquareef-img13.jpeg';
import portfolio14 from '@/assets/aquareef-img14.jpeg';
import portfolio15 from '@/assets/aquareef-img15.jpeg';
import portfolio16 from '@/assets/aquareef-img16.jpeg';
import portfolio17 from '@/assets/aquareef-img17.jpeg';
import portfolio18 from '@/assets/aquareef-img18.jpeg';
import portfolio19 from '@/assets/aquareef-img19.jpeg';

const images = [
  { src: portfolio7, title: 'Living Room Display', w: 1920, h: 1080 },
  { src: portfolio1, title: 'Office Reef Tank', w: 800, h: 1024 },
  { src: portfolio2, title: 'Restaurant Feature', w: 800, h: 1024 },
  { src: portfolio3, title: 'Penthouse Aquarium', w: 1024, h: 800 },
  { src: portfolio5, title: 'Hotel Lobby', w: 800, h: 1024 },
  { src: portfolio6, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
  { src: portfolio7, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
  { src: portfolio8, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
  { src: portfolio9, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
  { src: portfolio10, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
  { src: portfolio11, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
  { src: portfolio12, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
  { src: portfolio13, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
  { src: portfolio14, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
  { src: portfolio15, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
  { src: portfolio16, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
  { src: portfolio17, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
  { src: portfolio18, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
  { src: portfolio19, title: 'Bedroom Wall Tank', w: 1024, h: 800 },
];

const PortfolioGrid = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id='portfolio' className='section-white'>
      <div className='container-max'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <span className='label-tag'>Portfolio</span>
          <h2 className='section-title mt-2'>Featured Projects</h2>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4'>
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(i)}
              className='group relative aspect-square overflow-hidden rounded-sm cursor-pointer'
            >
              <img
                src={img.src}
                alt={img.title}
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                loading='lazy'
                width={img.w}
                height={img.h}
              />
              <div className='absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/50 transition-all duration-500 flex items-end p-4'>
                <span className='text-secondary-foreground font-display font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500'>
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
            className='fixed inset-0 z-50 bg-navy-deep/90 flex items-center justify-center p-4'
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className='absolute top-6 right-6 text-secondary-foreground hover:text-amber'
            >
              <X className='w-8 h-8' />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].title}
              className='max-w-full max-h-[85vh] rounded-sm object-contain'
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGrid;
