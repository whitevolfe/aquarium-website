import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ExperienceSection from '@/components/ExperienceSection';
import ThreeColumnInfo from '@/components/ThreeColumnInfo';
import ReviewsSection from '@/components/ReviewsSection';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio8 from '@/assets/aquareef-img8.jpeg';
import heroImg from '@/assets/hero-aquarium.jpg';

const anim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

const AboutPage = () => (
  <>
    <Helmet>
      <title>About Us | Aqua Reef Aquarium Sri Lanka</title>
      <meta
        name='description'
        content='Learn about Aqua Reef Aquarium — over 15 years of expertise crafting luxury marine aquariums across Sri Lanka for homes, offices, and commercial spaces.'
      />
    </Helmet>

    {/* Page Banner */}
    <section className='relative h-[45vh] min-h-[300px] flex items-center overflow-hidden'>
      <img
        src={heroImg}
        alt='Aqua Reef Aquarium'
        className='absolute inset-0 w-full h-full object-cover'
        width={1920}
        height={1080}
      />
      <div className='absolute inset-0 bg-navy-deep/80' />
      <div className='relative z-10 container-max px-4 md:px-8 text-center'>
        <motion.h1
          {...anim}
          className='font-display text-4xl md:text-5xl font-bold text-secondary-foreground'
        >
          About Us
        </motion.h1>
        <motion.p
          {...anim}
          transition={{ delay: 0.2 }}
          className='text-secondary-foreground/70 mt-3 font-body text-base'
        >
          Sri Lanka's Premier Aquarium Specialists
        </motion.p>
      </div>
    </section>

    {/* Story section */}
    <section className='section-white'>
      <div className='container-max'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div {...anim}>
            <img
              src={portfolio8}
              alt='Vibrant coral reef'
              className='w-full h-[400px] object-cover rounded-sm'
              loading='lazy'
              width={1024}
              height={800}
            />
          </motion.div>
          <motion.div {...anim} transition={{ delay: 0.2 }}>
            <span className='label-tag'>Our Story</span>
            <h2 className='section-title text-2xl md:text-4xl mt-2'>
              I am Mohamed Zareef Careem, an experienced aquarist and aquarium
              specialist with over 12 years
            </h2>
            <p className='text-muted-foreground mt-5 leading-relaxed font-body'>
              in the international zoological and aquarium industry.I have
              worked with renowned institutions including the Burj Al Arab
              Aquarium, LEGOLAND Dubai Aquarium, The National Aquarium Abu
              Dhabi, SeaWorld Abu Dhabi, and the Beluga Whale & Puffin
              Sanctuary. Through these roles, I have gained extensive hands-on
              experience managing large-scale marine systems, coral habitats,
              and complex aquatic exhibits.
            </p>
            <p className='text-muted-foreground mt-4 leading-relaxed font-body'>
              My expertise includes aquarium system design and installation,
              water quality management, filtration systems, coral and marine
              life care, and ongoing maintenance of both private and public
              aquariums. I specialize in creating sustainable, visually stunning
              aquatic environments while ensuring the highest standards of
              animal welfare and system efficiency.
            </p>
            <p className='text-muted-foreground mt-4 leading-relaxed font-body'>
              and delivering customized aquarium solutions tailored to
              individual needs. Today, I focus on providing professional
              aquarium design, installation, and maintenance services—bringing
              world-class aquarium standards into homes, businesses, and marine
              projects.
            </p>
            <Link to='/contact' className='btn-amber text-xs mt-8 inline-flex'>
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    <ExperienceSection />
    <ThreeColumnInfo />
    <ReviewsSection />

    {/* CTA */}
    <section className='bg-amber py-12 px-4'>
      <div className='container-max text-center'>
        <h2 className='font-display text-2xl md:text-3xl font-bold text-primary-foreground'>
          Ready to Start Your Project?
        </h2>
        <p className='text-primary-foreground/80 mt-3 font-body text-sm'>
          Get a free consultation with our team of experts.
        </p>
        <Link to='/contact' className='btn-navy text-xs mt-6 inline-flex'>
          Get Free Consultation
        </Link>
      </div>
    </section>
  </>
);

export default AboutPage;
