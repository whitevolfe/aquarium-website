import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const points = [
    { icon: '📅', text: '10+ Years Experience' },
    { icon: '🐠', text: 'Marine Experts' },
    { icon: '🎨', text: 'Custom Luxury Designs' },
    { icon: '🛠️', text: 'End-to-End Service' },
    { icon: '💎', text: 'Premium Materials' },
    { icon: '🔧', text: 'After-Sales Support' },
  ];

  return (
    <section className='section-white'>
      <div className='container-max'>
        <div className='text-center mb-12'>
          <h2 className='section-title text-3xl md:text-4xl'>Why Choose Us</h2>
          <p className='text-muted-foreground mt-3 max-w-2xl mx-auto font-body text-sm'>
            We bring world-class aquarium standards to Sri Lanka with unmatched
            expertise and dedication.
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8  '>
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center  p-6 bg-card  rounded-lg border border-border'
            >
              <div className='bg-amber text-3xl mb-4'>{point.icon}</div>
              <h3 className='font-display text-lg font-bold text-foreground mb-2'>
                {point.text}
              </h3>
              <p className='text-muted-foreground text-sm leading-relaxed font-body'>
                Our commitment to excellence ensures you receive the best
                aquarium solutions.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
