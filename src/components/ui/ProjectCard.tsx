import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.a
      href={project.githubUrl || 'https://github.com/Omsuryawanshi02'}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="w-full aspect-square bg-no-repeat bg-cover bg-center rounded-2xl sm:rounded-3xl relative cursor-pointer group shadow-sm hover:shadow-soft-lg transition-all duration-300 overflow-hidden border border-gray-200/80 block"
      style={{ backgroundImage: `url(${project.image})` }}
    >
      {/* Subtle overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 opacity-60 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

      {/* Floating Bottom Card - Matching reference screenshot */}
      <div className="bg-white/95 backdrop-blur-sm w-11/12 rounded-xl sm:rounded-2xl absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-4 sm:px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg border border-gray-100 z-20 min-h-[76px]">
        <div className="pr-2 overflow-hidden flex-1">
          <h3 className="font-outfit font-bold text-gray-900 text-sm sm:text-base leading-snug truncate">
            {project.title}
          </h3>
          <p className="text-xs text-gray-600 line-clamp-2 mt-0.5 leading-snug font-light">
            {project.description}
          </p>
        </div>

        {/* Round send/arrow button with lime hover transition */}
        <div className="border rounded-full border-black w-8 h-8 sm:w-9 sm:h-9 aspect-square flex-shrink-0 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-colors duration-300 ml-2">
          <ArrowUpRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.a>
  );
};
