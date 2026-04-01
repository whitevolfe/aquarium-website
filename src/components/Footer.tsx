import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-deep text-secondary-foreground">
    <div className="container-max px-4 md:px-8 py-14">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded bg-amber flex items-center justify-center">
              <span className="font-display text-primary-foreground text-lg font-bold">A</span>
            </div>
            <div className="leading-tight">
              <span className="font-display text-base font-bold tracking-wide">AQUA REEF</span>
              <span className="block text-[8px] uppercase tracking-[0.25em] text-secondary-foreground/50 font-body">Aquarium Specialists</span>
            </div>
          </Link>
          <p className="text-secondary-foreground/60 text-sm leading-relaxed font-body">
            Sri Lanka's premier luxury marine aquarium design & installation company. Over 15 years of expertise crafting living masterpieces.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-base mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/60 font-body">
            <li>Aquarium Design & Install</li>
            <li>Marine & Reef Tanks</li>
            <li>Maintenance & Cleaning</li>
            <li>Wall Dividers</li>
            <li>Water Features & Ponds</li>
            <li>Commercial Aquariums</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-base mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm font-body">
            <li><Link to="/" className="text-secondary-foreground/60 hover:text-amber transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-secondary-foreground/60 hover:text-amber transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-secondary-foreground/60 hover:text-amber transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="text-secondary-foreground/60 hover:text-amber transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="text-secondary-foreground/60 hover:text-amber transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-base mb-4">Contact</h4>
          <div className="space-y-3 text-sm font-body">
            <a href="tel:+94771234567" className="flex items-center gap-2 text-secondary-foreground/60 hover:text-amber transition-colors">
              <Phone className="w-4 h-4 text-amber" /> +94 77 123 4567
            </a>
            <a href="mailto:info@aquareefaquarium.lk" className="flex items-center gap-2 text-secondary-foreground/60 hover:text-amber transition-colors">
              <Mail className="w-4 h-4 text-amber" /> info@aquareefaquarium.lk
            </a>
            <div className="flex items-center gap-2 text-secondary-foreground/60">
              <MapPin className="w-4 h-4 text-amber" /> Colombo, Sri Lanka
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center text-xs text-secondary-foreground/40 font-body">
        © {new Date().getFullYear()} Aqua Reef Aquarium. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
