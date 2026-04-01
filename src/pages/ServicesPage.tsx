import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import EditorialBlocks from "@/components/EditorialBlocks";
import ServicesGrid from "@/components/ServicesGrid";
import ThreeColumnInfo from "@/components/ThreeColumnInfo";
import CTABanner from "@/components/CTABanner";
import heroImg from "@/assets/hero-aquarium.jpg";

const anim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const };

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Services | Aqua Reef Aquarium — Design, Installation & Maintenance</title>
      <meta name="description" content="Comprehensive aquarium services: custom design, marine & reef tanks, maintenance, wall dividers, water features, and commercial installations across Sri Lanka." />
    </Helmet>

    {/* Page Banner */}
    <section className="relative h-[45vh] min-h-[300px] flex items-center overflow-hidden">
      <img src={heroImg} alt="Aquarium services" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-navy-deep/80" />
      <div className="relative z-10 container-max px-4 md:px-8 text-center">
        <motion.h1 {...anim} className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground">
          Our Services
        </motion.h1>
        <motion.p {...anim} transition={{ delay: 0.2 }} className="text-secondary-foreground/70 mt-3 font-body text-base">
          Comprehensive Aquarium Solutions for Every Space
        </motion.p>
      </div>
    </section>

    <EditorialBlocks />
    <ThreeColumnInfo />
    <ServicesGrid />
    <CTABanner />

    {/* Bottom CTA */}
    <section className="section-white text-center">
      <div className="container-max">
        <h2 className="section-title text-2xl md:text-3xl">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body text-sm">
          Every project is unique. Contact us to discuss your requirements and we'll create a tailored solution just for you.
        </p>
        <Link to="/contact" className="btn-amber text-xs mt-8 inline-flex">Get Free Consultation</Link>
      </div>
    </section>
  </>
);

export default ServicesPage;
