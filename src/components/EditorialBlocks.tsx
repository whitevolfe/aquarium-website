import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import serviceInstall from '@/assets/aquareef-img10.jpeg';
import waterFeature from '@/assets/aquareef-img9.jpeg';
import commercialAquarium from '@/assets/commercial-aquarium.jpg';

const anim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

const EditorialBlocks = () => (
  <>
    {/* Block 1 */}
    <section className='section-white'>
      <div className='container-max'>
        <div className='grid lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
          <motion.div {...anim} className='relative'>
            <img
              src={waterFeature}
              alt='Luxury koi pond water feature'
              className='w-full h-[350px] md:h-[420px] object-cover rounded-sm'
              loading='lazy'
              width={1024}
              height={800}
            />
            <div className='absolute top-4 left-4'>
              <span className='label-tag'>Design & Supply</span>
            </div>
          </motion.div>
          <motion.div {...anim} transition={{ delay: 0.2 }}>
            <div className='divider-amber mb-5' />
            <h2 className='section-title text-2xl md:text-4xl'>
              We Design, Supply & Install Aquariums
            </h2>
            <p className='text-muted-foreground mt-5 leading-relaxed font-body'>
              From small private residential fish tanks to large commercial
              aquariums, Aqua Reef provides complete turnkey solutions. We
              handle every aspect — from initial consultation through design,
              manufacturing, installation, and ongoing care.
            </p>
            <p className='text-muted-foreground mt-4 leading-relaxed font-body'>
              Our custom-built aquariums are engineered using premium
              marine-grade materials, advanced filtration systems, and are
              designed to seamlessly integrate with your interior architecture.
            </p>
            <div className='flex gap-4 mt-8'>
              <Link to='/contact' className='btn-amber text-xs'>
                Get a Quote
              </Link>
              <Link to='/portfolio' className='btn-navy text-xs'>
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Block 2 */}
    <section className='section-light'>
      <div className='container-max'>
        <div className='grid lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
          <motion.div {...anim} className='order-2 lg:order-1'>
            <span className='label-tag'>Internal & External</span>
            <h2 className='section-title text-2xl md:text-4xl mt-2'>
              Internal and External Features
            </h2>
            <p className='text-muted-foreground mt-5 leading-relaxed font-body'>
              From built-in wall aquariums and freestanding displays to outdoor
              koi ponds and water features — we create stunning aquatic
              installations for every environment.
            </p>
            <p className='text-muted-foreground mt-4 leading-relaxed font-body'>
              Our expertise spans residential living rooms, bedrooms, and
              gardens to commercial lobbies, restaurants, and hotel atriums.
              Each installation is custom-engineered for its specific location.
            </p>
            <Link to='/services' className='btn-amber text-xs mt-8 inline-flex'>
              Explore Services
            </Link>
          </motion.div>
          <motion.div
            {...anim}
            transition={{ delay: 0.2 }}
            className='order-1 lg:order-2'
          >
            <img
              src={serviceInstall}
              alt='Professional aquarium installation'
              className='w-full h-[350px] md:h-[420px] object-cover rounded-sm'
              loading='lazy'
              width={1024}
              height={800}
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Block 3 */}
    <section className='relative'>
      <div className='relative h-[300px] md:h-[400px]'>
        <img
          src={commercialAquarium}
          alt='Commercial aquarium'
          className='w-full h-full object-cover'
          loading='lazy'
          width={1200}
          height={900}
        />
        <div className='absolute inset-0 bg-navy-deep/70' />
        <div className='absolute inset-0 flex items-center'>
          <div className='container-max px-4 md:px-8'>
            <motion.div {...anim} className='max-w-xl'>
              <span className='label-tag'>Commercial</span>
              <h2 className='font-display text-2xl md:text-4xl font-bold text-secondary-foreground mt-2'>
                Commercial Aquariums
              </h2>
              <p className='text-secondary-foreground/80 mt-4 leading-relaxed font-body'>
                From corporate offices to luxury hotels and restaurants — we
                create showstopping aquarium installations that leave a lasting
                impression on your visitors and clients.
              </p>
              <Link
                to='/contact'
                className='btn-amber text-xs mt-6 inline-flex'
              >
                Discuss Your Project
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default EditorialBlocks;
