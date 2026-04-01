import { motion } from "framer-motion";
import portfolio4 from "@/assets/portfolio-4.jpg";

const ExperienceSection = () => (
  <section className="section-white overflow-hidden">
    <div className="container-max">
      <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-sm overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={portfolio4}
            alt="Vibrant coral reef ecosystem"
            className="w-full h-full min-h-[350px] object-cover"
            loading="lazy"
            width={1024}
            height={800}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-navy p-8 md:p-12 flex flex-col justify-center"
        >
          <span className="label-tag w-fit">About Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mt-2">
            15+ Years Experience
          </h2>
          <p className="text-secondary-foreground/70 mt-5 leading-relaxed font-body text-sm">
            Aqua Reef Aquarium has been crafting extraordinary marine environments across Sri Lanka for over 15 years. Our expertise spans residential, commercial, and hospitality sectors — delivering aquariums that are both visually stunning and biologically thriving.
          </p>
          <p className="text-secondary-foreground/70 mt-4 leading-relaxed font-body text-sm">
            Our team includes marine biologists, aquascaping artists, and precision engineers — ensuring every installation is a perfect balance of science, art, and craftsmanship.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { num: "200+", label: "Projects" },
              { num: "15+", label: "Years" },
              { num: "50+", label: "Clients" },
            ].map((s) => (
              <div key={s.label} className="text-center border border-secondary-foreground/10 rounded-sm py-3">
                <div className="font-display text-2xl font-bold text-amber">{s.num}</div>
                <div className="text-[10px] uppercase tracking-wider text-secondary-foreground/50 font-body mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
