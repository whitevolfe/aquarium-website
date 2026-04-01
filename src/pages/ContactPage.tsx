import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ConsultationSection from "@/components/ConsultationSection";
import heroImg from "@/assets/hero-aquarium.jpg";

const anim = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const };

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact Us | Aqua Reef Aquarium — Free Consultation</title>
      <meta name="description" content="Get in touch with Aqua Reef Aquarium for a free consultation. Call, WhatsApp, or fill out our contact form. We serve all of Sri Lanka." />
    </Helmet>

    {/* Page Banner */}
    <section className="relative h-[45vh] min-h-[300px] flex items-center overflow-hidden">
      <img src={heroImg} alt="Contact us" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-navy-deep/80" />
      <div className="relative z-10 container-max px-4 md:px-8 text-center">
        <motion.h1 {...anim} className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground">
          Contact Us
        </motion.h1>
        <motion.p {...anim} transition={{ delay: 0.2 }} className="text-secondary-foreground/70 mt-3 font-body text-base">
          Let's Bring Your Vision to Life
        </motion.p>
      </div>
    </section>

    <ConsultationSection />

    {/* Map placeholder / additional info */}
    <section className="section-white">
      <div className="container-max text-center">
        <motion.div {...anim}>
          <span className="label-tag">Visit Us</span>
          <h2 className="section-title text-2xl md:text-3xl mt-2">Our Location</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body text-sm leading-relaxed">
            Based in Colombo, we serve clients across all of Sri Lanka. We offer free on-site consultations — our team will come to you to assess your space and discuss your dream aquarium.
          </p>
          <div className="mt-8 rounded-sm overflow-hidden h-[300px] bg-muted flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63618815496!2d79.78616849067814!3d6.921836039486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1680000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aqua Reef Aquarium Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default ContactPage;
