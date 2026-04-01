import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajitha Perera",
    role: "Homeowner, Colombo",
    text: "Aqua Reef transformed our living room with a stunning reef aquarium. The design is absolutely breathtaking and their maintenance team is always prompt and professional.",
    rating: 5,
  },
  {
    name: "Dilshan Fernando",
    role: "Restaurant Owner, Kandy",
    text: "Our restaurant aquarium has become the main attraction for our guests. The quality of work and attention to detail from Aqua Reef is genuinely second to none.",
    rating: 5,
  },
  {
    name: "Samantha De Silva",
    role: "Interior Designer",
    text: "I've partnered with Aqua Reef on multiple luxury residential projects. Their professionalism and creative vision make them the best aquarium specialists in Sri Lanka.",
    rating: 5,
  },
  {
    name: "Ashan Wickrama",
    role: "Hotel Manager, Galle",
    text: "The lobby aquarium they installed has become an Instagram hotspot. Guests constantly photograph it. Truly a masterpiece of engineering and art combined.",
    rating: 5,
  },
];

const ReviewsSection = () => (
  <section className="section-white">
    <div className="container-max">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="label-tag">Reviews</span>
        <h2 className="section-title mt-2">Our Reviews</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border border-border rounded-sm p-6 hover:border-amber/40 hover:shadow-md transition-all duration-300"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-amber text-amber" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed italic font-body mb-5">"{r.text}"</p>
            <div className="border-t border-border pt-4">
              <div className="font-display font-bold text-foreground text-base">{r.name}</div>
              <div className="text-xs text-muted-foreground font-body">{r.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
