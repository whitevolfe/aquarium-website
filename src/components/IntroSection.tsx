import { motion } from "framer-motion";

const IntroSection = () => (
  <section className="section-light">
    <div className="container-max text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="label-tag">Our Expertise</span>
        <h2 className="section-title mt-2">
          Bespoke Aquarium Design &<br />Installation Services
        </h2>
        <p className="text-muted-foreground mt-5 max-w-3xl mx-auto text-base leading-relaxed font-body">
          We create one-of-a-kind aquarium installations that transform any environment into a living work of art. Our team brings decades of expertise in marine biology, interior design, and precision engineering.
        </p>
      </motion.div>

      {/* Category pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mt-10"
      >
        {["Design", "Installation", "Maintenance", "Consultation", "Marine Specialists", "Custom Builds"].map((tag) => (
          <span key={tag} className="px-4 py-2 text-xs font-medium uppercase tracking-wider border border-border rounded-sm text-muted-foreground font-body">
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default IntroSection;
