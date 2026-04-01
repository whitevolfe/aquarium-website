import { motion } from "framer-motion";
import { Compass, Wrench, HeartPulse } from "lucide-react";

const items = [
  {
    icon: Compass,
    title: "Consultation & Design",
    desc: "We'll discuss your vision, assess your space, and create a detailed design plan tailored to your requirements and budget.",
  },
  {
    icon: Wrench,
    title: "Aquarium Installation",
    desc: "Our expert team handles every aspect of installation — plumbing, electrical, filtration, substrate, and marine life introduction.",
  },
  {
    icon: HeartPulse,
    title: "Ongoing Care",
    desc: "Keep your aquarium in pristine condition with our professional maintenance packages — weekly, bi-weekly, or monthly visits.",
  },
];

const ThreeColumnInfo = () => (
  <section className="section-dark">
    <div className="container-max">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-secondary-foreground/70 text-sm font-body mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        Using advanced monitoring systems, we offer remote monitoring to track key factors like temperature, pH, salinity, and lighting — addressing potential issues before they become problems.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full border-2 border-amber/30 flex items-center justify-center mx-auto mb-5">
              <item.icon className="w-7 h-7 text-amber" />
            </div>
            <h3 className="font-display text-xl font-bold text-secondary-foreground mb-3">{item.title}</h3>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed font-body">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ThreeColumnInfo;
