import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';

export const Projects: React.FC = () => {
  return (
    <section id="work" className="w-full px-6 sm:px-10 lg:px-[8%] xl:px-[10%] py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="MY PORTFOLIO"
        title="Latest Work"
        subtitle="Explore selected engineering projects applying AI, machine learning, and cybersecurity to solve practical problems."
      />

      {/* Balanced 3-Column Projects Grid on one row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 my-10 max-w-6xl mx-auto items-stretch">
        {projectsData.map((project, index) => (
          <div key={project.id} className="w-full max-w-[380px] mx-auto flex justify-center">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {/* Show more button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/Omsuryawanshi02"
          target="_blank"
          rel="noopener noreferrer"
          className="w-max inline-flex items-center justify-center gap-2 text-gray-700 border border-gray-400 rounded-full py-3 px-10 mx-auto hover:bg-gray-50 hover:border-black hover:-translate-y-0.5 duration-300 text-sm font-medium transition-all shadow-sm group"
        >
          <span>Show more</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
};
