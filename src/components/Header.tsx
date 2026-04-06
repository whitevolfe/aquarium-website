import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Menu, X } from 'lucide-react';
import logo from '@/assets/aquareef-logo.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) => location.pathname === to;

  return (
    <>
      {/* Top info bar */}
      <div className='top-bar hidden md:block'>
        <div className='container-max flex items-center justify-between px-8 py-2 text-xs'>
          <div className='flex items-center gap-6'>
            <a
              href='tel:+94771234567'
              className='flex items-center gap-1.5 hover:text-amber transition-colors'
            >
              <Phone className='w-3 h-3' /> +94 70 111 1711
            </a>
            <a
              href='mailto:info@aquareefaquarium.lk'
              className='flex items-center gap-1.5 hover:text-amber transition-colors'
            >
              <Mail className='w-3 h-3' /> info@aquareefaquarium.lk
            </a>
          </div>
          <a
            href='https://wa.me/94771234567'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1.5 hover:text-amber transition-colors'
          >
            <svg viewBox='0 0 24 24' className='w-3 h-3 fill-current'>
              <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-400 ${
          scrolled ? 'bg-card shadow-lg py-3' : 'bg-card/95 py-4'
        }`}
      >
        <div className='container-max flex items-center justify-between px-4 md:px-8'>
          <Link to='/' className='flex items-center gap-2.5'>
            <img
              src={logo}
              alt='Aqua Reef Aquarium'
              className='h-20 w-auto object-contain'
            />
          </Link>

          <nav className='hidden lg:flex items-center gap-7'>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[13px] font-semibold uppercase tracking-wider transition-colors font-body ${
                  isActive(link.to)
                    ? 'text-amber'
                    : 'text-foreground hover:text-amber'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className='hidden lg:block'>
            <Link to='/contact' className='btn-amber text-xs'>
              Free Consultation
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className='lg:hidden text-foreground p-2'
          >
            {mobileOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='lg:hidden bg-card border-t border-border overflow-hidden'
            >
              <div className='px-6 py-6 flex flex-col gap-3'>
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-sm font-semibold uppercase tracking-wider py-2 font-body ${
                      isActive(link.to) ? 'text-amber' : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className='pt-3 flex flex-col gap-3'>
                  <a
                    href='tel:+94771234567'
                    className='flex items-center gap-2 text-sm text-amber font-medium font-body'
                  >
                    <Phone className='w-4 h-4' /> 070 111 1711
                  </a>
                  <Link to='/contact' className='btn-amber text-center text-xs'>
                    Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
