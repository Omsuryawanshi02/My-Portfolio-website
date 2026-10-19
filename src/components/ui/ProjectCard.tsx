import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Lock } from 'lucide-react';
import { Project } from '../../types';

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-soft-xl hover:border-gray-400/80 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full"
    >
      <div>
        {/* Top Browser / Studio Mockup Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50/90 border-b border-gray-200/80 backdrop-blur-sm select-none">
          {/* Window control traffic lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 group-hover:bg-[#ff5f56] transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 group-hover:bg-[#ffbd2e] transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 group-hover:bg-[#27c93f] transition-colors" />
          </div>

          {/* Simulated URL Bar */}
          <div className="px-2.5 py-0.5 rounded-md bg-white border border-gray-200/70 text-[11px] font-mono text-gray-500 truncate max-w-[170px] flex items-center gap-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]">
            <Lock className="w-2.5 h-2.5 text-gray-400 flex-shrink-0" />
            <span className="truncate">{project.id}.app</span>
          </div>

          {/* Category Tag */}
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 font-mono">
            {project.category?.split('&')[0].trim() || 'AI / ML'}
          </span>
        </div>

        {/* 16:10 Studio Image Viewport */}
        <a
          href={project.githubUrl || 'https://github.com/Omsuryawanshi02'}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-[16/10] overflow-hidden bg-gray-100 block cursor-pointer"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Subtle hover gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </a>
      </div>

      {/* Card Content & Action Area */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-outfit font-bold text-lg sm:text-xl text-gray-900 group-hover:text-black transition-colors leading-snug">
              {project.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-4 line-clamp-3 min-h-[3.6rem]">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          <a
            href={project.githubUrl || 'https://github.com/Omsuryawanshi02'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-black transition-colors group/btn"
          >
            <Github className="w-3.5 h-3.5 text-gray-500 group-hover/btn:text-black" />
            <span>Source Code</span>
          </a>

          <a
            href={project.githubUrl || 'https://github.com/Omsuryawanshi02'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 group-hover:border-black group-hover:bg-lime-300 group-hover:text-black transition-all duration-300 shadow-sm"
            aria-label={`Open repository for ${project.title}`}
          >
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
