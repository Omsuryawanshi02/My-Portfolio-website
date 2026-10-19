import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-28 pb-16 relative"
    >
      {/* Profile portrait circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 240, damping: 20 }}
        className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center mx-auto shadow-sm ring-4 ring-white border border-gray-200/80 bg-gray-100"
      >
        <img
          src={profileData.avatarUrl}
          alt={profileData.name}
          className="w-full h-full object-cover object-[center_35%] scale-110 group-hover:scale-115 transition-transform duration-500"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
          }}
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center gap-2 text-xl md:text-2xl text-gray-700"
      >
        <span>Hi! This is {profileData.firstName}</span>
        <motion.span
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 1.5 }}
          className="inline-block origin-bottom-right"
        >
          👋
        </motion.span>
      </motion.h3>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-outfit font-semibold text-3xl sm:text-6xl lg:text-[66px] text-gray-900 tracking-tight leading-[1.18] max-w-4xl"
      >
        I am an AI &amp; Data Science Student based in Nashik, India
      </motion.h1>

      {/* Supporting paragraph */}
      <motion.p
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed font-light"
      >
        Building intelligent AI Agents and crafting modern web experiences that bridge the gap between complex AI logic and intuitive user interfaces.
      </motion.p>

      {/* Call-to-action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="px-10 py-3.5 border border-black rounded-full bg-black text-white hover:bg-gray-800 transition flex items-center justify-center gap-2 text-sm font-semibold shadow-sm group"
        >
          <span>Contact me</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </motion.a>

        {profileData.resumeUrl && (
          <motion.a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="px-10 py-3.5 border border-gray-500 rounded-full text-gray-800 hover:bg-white transition flex items-center justify-center gap-2 text-sm font-semibold shadow-sm group"
          >
            <span>My Resume</span>
            <Download className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors" />
          </motion.a>
        )}
      </motion.div>
    </section>
  );
};
