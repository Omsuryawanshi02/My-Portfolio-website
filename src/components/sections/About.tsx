import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GraduationCap, FolderKanban, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';
import { frequentTools } from '../../data/technologies';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  const getCardIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code2 className="w-6 h-6 text-gray-800" />;
      case 'education':
        return <GraduationCap className="w-6 h-6 text-gray-800" />;
      case 'projects':
        return <FolderKanban className="w-6 h-6 text-gray-800" />;
      default:
        return <Sparkles className="w-6 h-6 text-gray-800" />;
    }
  };

  return (
    <section id="about" className="w-full px-6 sm:px-10 lg:px-[12%] py-20 scroll-mt-20">
      <SectionHeading eyebrow="INTRODUCTION" title="About Me" />

      <div className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 my-8">
        {/* Profile Card / Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="w-72 sm:w-88 xl:w-[380px] rounded-3xl overflow-hidden shadow-xl border border-gray-200/90 bg-white p-3 group"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100">
            <img
              src={profileData.avatarUrl}
              alt={profileData.name}
              className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
              }}
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-outfit text-xl font-semibold">{profileData.name}</p>
              <p className="text-xs text-gray-200">AI &amp; Data Science Engineer</p>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Info Cards */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="mb-8 max-w-2xl text-gray-700 leading-relaxed font-light text-base sm:text-lg"
          >
            {profileData.aboutParagraph}
          </motion.p>

          {/* 3 Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
          >
            {profileData.infoCards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="border-[0.5px] border-gray-300 rounded-2xl p-5 cursor-default hover:shadow-soft duration-300 bg-white/70 backdrop-blur-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-3 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                  {getCardIcon(card.id)}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1 font-sans">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-gray-600 leading-snug">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools I Frequently Use - Exact Match to Reference Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <h4 className="my-5 text-gray-700 font-medium text-base">
              Tools I Frequently Use
            </h4>
            <ul className="grid grid-cols-5 sm:grid-cols-10 gap-2.5 sm:gap-3 max-w-fit">
              {frequentTools.map((tool) => (
                <motion.li
                  key={tool.name}
                  whileHover={{ y: -6, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="group relative flex items-center justify-center w-11 sm:w-13 md:w-14 aspect-square border border-gray-400 rounded-xl bg-white cursor-pointer shadow-sm"
                >
                  <img
                    src={tool.iconSrc}
                    alt={tool.name}
                    className="w-5 sm:w-6 md:w-7 aspect-square object-contain"
                  />
                  <span className="absolute -bottom-8 bg-black text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-20 pointer-events-none shadow-md">
                    {tool.name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
