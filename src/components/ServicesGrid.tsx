import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import portfolio1 from '@/assets/aquareef-img8.jpeg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/aquareef-img2.jpeg';
import portfolio5 from '@/assets/aquareef-img7.jpeg';
import portfolio6 from '@/assets/aquareef-img3.jpeg';
import commercialAquarium from '@/assets/aquareef-img9.jpeg';
import serviceInstall from '@/assets/aquareef-img10.jpeg';

const services = [
  {
    src: portfolio1,
    title: 'Aquarium Design\n& Installation',
    w: 800,
    h: 1024,
  },
  {
    src: commercialAquarium,
    title: 'Water Features\n& Ponds',
    w: 1200,
    h: 900,
  },
  {
    src: serviceInstall,
    title: 'Aquarium Service\n& Maintenance',
    w: 1024,
    h: 800,
  },
  { src: portfolio3, title: 'Freshwater\nAquariums', w: 1024, h: 800 },
  { src: portfolio2, title: 'Marine & Reef\nAquariums', w: 800, h: 1024 },
  { src: portfolio5, title: 'Bespoke\nHolding Tanks', w: 800, h: 1024 },
  { src: portfolio6, title: 'Aquarium Wall\nDividers', w: 1024, h: 800 },
];

const ServicesGrid = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id='services' className='section-light'>
      <div className='container-max'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <span className='text-xs uppercase tracking-[0.15em] text-muted-foreground font-body'>
            What we can do for you
          </span>
          <h2 className='section-title mt-2'>Our Services</h2>
          <p className='text-muted-foreground mt-4 max-w-2xl mx-auto text-sm leading-relaxed font-body'>
            We offer a comprehensive range of aquarium design and maintenance
            services to suit every requirement.
          </p>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4'>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className='service-overlay-card aspect-[4/3] group'
              onClick={() => setLightbox(i)}
            >
              <img
                src={s.src}
                alt={s.title.replace('\n', ' ')}
                loading='lazy'
                width={s.w}
                height={s.h}
              />
              <div className='overlay'>
                <h3 className='font-display text-sm md:text-base font-bold text-secondary-foreground whitespace-pre-line leading-tight'>
                  {s.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 bg-navy-deep/90 flex items-center justify-center p-4'
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className='absolute top-6 right-6 text-secondary-foreground hover:text-amber'
            >
              <X className='w-8 h-8' />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              src={services[lightbox].src}
              alt={services[lightbox].title.replace('\n', ' ')}
              className='max-w-full max-h-[85vh] rounded-sm object-contain'
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesGrid;
