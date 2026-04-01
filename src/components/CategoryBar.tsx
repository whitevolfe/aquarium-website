import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  { label: "Custom Aquariums", to: "/services" },
  { label: "Marine & Reef", to: "/services" },
  { label: "Maintenance", to: "/services" },
  { label: "Wall Dividers", to: "/services" },
  { label: "Water Features", to: "/services" },
  { label: "Commercial", to: "/services" },
];

const CategoryBar = () => (
  <div className="bg-navy py-0 overflow-x-auto">
    <div className="container-max flex items-stretch">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
          className="flex-1 min-w-[140px]"
        >
          <Link
            to={cat.to}
            className="block w-full py-4 text-center text-[11px] md:text-xs font-bold uppercase tracking-wider text-secondary-foreground/90 hover:bg-amber hover:text-primary-foreground transition-all duration-300 border-r border-navy-mid font-body"
          >
            {cat.label}
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

export default CategoryBar;
