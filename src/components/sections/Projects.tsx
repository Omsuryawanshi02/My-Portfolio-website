import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Derive unique categories dynamically
  const rawCategories = Array.from(
    new Set(projectsData.map((p) => p.category).filter((c): c is string => Boolean(c)))
  );
  const categories = ['All', ...rawCategories];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="w-full px-6 sm:px-10 lg:px-[10%] xl:px-[12%] py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="MY PORTFOLIO"
        title="Latest Work"
        subtitle="Explore selected engineering projects applying AI, machine learning, cybersecurity, and intelligent data systems to practical problems."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-black text-white shadow-sm'
                : 'bg-white border border-gray-300/80 text-gray-700 hover:border-black hover:bg-gray-50'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Modern Studio Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="flex"
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="text-center mt-14"
      >
        <a
          href="https://github.com/Omsuryawanshi02"
          target="_blank"
          rel="noopener noreferrer"
          className="w-max inline-flex items-center justify-center gap-2.5 text-gray-900 border border-gray-800 rounded-full py-3 px-8 sm:px-10 mx-auto hover:bg-black hover:text-white hover:-translate-y-0.5 duration-300 text-sm font-semibold transition-all shadow-sm group"
        >
          <Github className="w-4 h-4" />
          <span>Show more on GitHub</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
};
