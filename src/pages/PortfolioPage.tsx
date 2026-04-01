import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PortfolioGrid from "@/components/PortfolioGrid";
import heroImg from "@/assets/hero-aquarium.jpg";

const anim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const };

const PortfolioPage = () => (
  <>
    <Helmet>
      <title>Portfolio | Aqua Reef Aquarium — Our Luxury Projects</title>
      <meta name="description" content="Browse our portfolio of luxury aquarium installations — from residential reef tanks to commercial hotel lobbies and restaurant features across Sri Lanka." />
    </Helmet>

    {/* Page Banner */}
    <section className="relative h-[45vh] min-h-[300px] flex items-center overflow-hidden">
      <img src={heroImg} alt="Our portfolio" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-navy-deep/80" />
      <div className="relative z-10 container-max px-4 md:px-8 text-center">
        <motion.h1 {...anim} className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground">
          Our Portfolio
        </motion.h1>
        <motion.p {...anim} transition={{ delay: 0.2 }} className="text-secondary-foreground/70 mt-3 font-body text-base">
          Explore Our Finest Aquarium Installations
        </motion.p>
      </div>
    </section>

    <PortfolioGrid />

    {/* CTA */}
    <section className="bg-amber py-12 px-4">
      <div className="container-max text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">Want Something Like This?</h2>
        <p className="text-primary-foreground/80 mt-3 font-body text-sm">Let's create your dream aquarium. Get a free consultation today.</p>
        <Link to="/contact" className="btn-navy text-xs mt-6 inline-flex">Start Your Project</Link>
      </div>
    </section>
  </>
);

export default PortfolioPage;
