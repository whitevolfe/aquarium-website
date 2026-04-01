import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ConsultationSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    toast.success("Thank you! We'll contact you shortly.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-light">
      <div className="container-max">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-navy rounded-sm p-8 md:p-10 text-secondary-foreground"
          >
            <span className="label-tag">Free Consultation</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mt-3 text-secondary-foreground">
              Get in touch — we'll come to you.
            </h2>
            <p className="text-secondary-foreground/70 mt-4 text-sm leading-relaxed font-body">
              Book a free consultation and we'll visit your site to discuss your requirements and provide a no-obligation quote.
            </p>
            <div className="space-y-4 mt-8">
              <a href="tel:+94771234567" className="flex items-center gap-3 text-sm hover:text-amber transition-colors font-body">
                <Phone className="w-4 h-4 text-amber" /> +94 77 123 4567
              </a>
              <a href="mailto:info@aquareefaquarium.lk" className="flex items-center gap-3 text-sm hover:text-amber transition-colors font-body">
                <Mail className="w-4 h-4 text-amber" /> info@aquareefaquarium.lk
              </a>
              <div className="flex items-center gap-3 text-sm font-body">
                <MapPin className="w-4 h-4 text-amber" /> Colombo, Sri Lanka
              </div>
            </div>

            <a
              href="https://wa.me/94771234567?text=Hi%2C%20I'm%20interested%20in%20a%20custom%20aquarium."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-3 bg-[#25D366] text-primary-foreground rounded-sm px-5 py-3 text-sm font-semibold font-body hover:bg-[#1fb855] transition-colors w-fit"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card border border-border rounded-sm p-8 md:p-10 space-y-5"
          >
            <h3 className="font-display text-2xl font-bold text-foreground">Request a Callback</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block font-body">Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border bg-background rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-amber transition-colors font-body"
                  placeholder="Your name"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block font-body">Phone *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-border bg-background rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-amber transition-colors font-body"
                  placeholder="+94 77 XXX XXXX"
                  maxLength={20}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block font-body">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border bg-background rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-amber transition-colors font-body"
                placeholder="your@email.com"
                maxLength={255}
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block font-body">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full border border-border bg-background rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-amber transition-colors resize-none font-body"
                placeholder="Tell us about your project..."
                maxLength={1000}
              />
            </div>
            <button type="submit" className="btn-amber w-full gap-2">
              <Send className="w-4 h-4" /> Send Enquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
