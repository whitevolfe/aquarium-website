import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const CTABanner = () => (
  <section className='bg-amber py-5 px-4'>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='container-max flex flex-col md:flex-row items-center justify-between gap-4'
    >
      <div className='flex items-center gap-3 text-primary-foreground font-body'>
        <Phone className='w-5 h-5' />
        <span className='text-sm md:text-base font-bold uppercase tracking-wider'>
          Call for a Free Consultation: +94 70 111 1711
        </span>
      </div>
      <a
        href='tel:+94771234567'
        className='bg-navy text-secondary-foreground px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-navy-mid transition-colors font-body'
      >
        Call Now
      </a>
    </motion.div>
  </section>
);

export default CTABanner;
