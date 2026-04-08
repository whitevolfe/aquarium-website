import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from '@/assets/herosection-video.mp4';

const HeroSection = () => {
  return (
    <section className='relative h-[85vh] min-h-[500px] flex items-center overflow-hidden'>
      <div className='absolute inset-0'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
        >
          <source src={heroVideo} type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/70 to-navy/40' />
      </div>

      <div className='relative z-10 container-max px-4 md:px-8 w-full'>
        <div className='max-w-2xl'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className='label-tag'>Aqua Reef Aquarium</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className='font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-[1.1] mt-2'
          >
            Bespoke Aquarium
            <br />
            Design & <span className='text-amber'>Installation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className='text-secondary-foreground/80 text-base md:text-lg mt-5 max-w-lg font-body leading-relaxed'
          >
            We offer high-end bespoke aquarium design & installation services
            including custom-built marine, reef and freshwater aquariums for
            private and commercial clients in Sri Lanka.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className='flex flex-wrap gap-4 mt-8'
          >
            <Link to='/contact' className='btn-amber'>
              Get Free Consultation
            </Link>
            <Link to='/portfolio' className='btn-outline-light'>
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
