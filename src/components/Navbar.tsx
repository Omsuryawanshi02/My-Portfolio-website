import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'About Me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'My Work', href: '#work' },
    { label: 'Community', href: '#community' },
    { label: 'Contact Me', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 right-0 z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : ''
        }`}
      >
        {/* Brand Logo - exactly matching reference style */}
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, '#top')}
          className="cursor-pointer select-none mr-8 sm:mr-14 group"
        >
          <span className="font-outfit font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight transition-transform group-hover:scale-105 duration-200">
            Om Suryawanshi<span className="text-[#fa5858] font-black">.</span>
          </span>
        </a>

        {/* Center Pill Navigation - exact match to reference image */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-outfit text-sm font-medium">
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-800 hover:text-black transition-colors duration-200 block"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full font-outfit hover:bg-black hover:text-white hover:border-black transition-all duration-300 text-sm font-medium group"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="block md:hidden p-2 rounded-full border border-gray-300 bg-white/80 hover:bg-white text-gray-800 transition shadow-sm ml-3"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />
            <motion.ul
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="flex md:hidden flex-col gap-5 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50/95 backdrop-blur-xl shadow-2xl"
            >
              <div
                onClick={() => setMobileMenuOpen(false)}
                className="absolute right-6 top-6 cursor-pointer p-1 text-gray-700 hover:text-black"
              >
                <X className="w-5 h-5" />
              </div>

              <div className="mb-2">
                <span className="font-outfit font-extrabold text-2xl text-gray-900 tracking-tight">
                  Om<span className="text-[#fa5858] font-black">.</span>
                </span>
              </div>

              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block text-gray-700 hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li className="mt-6 pt-4 border-t border-rose-200/60">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 py-2.5 px-6 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
