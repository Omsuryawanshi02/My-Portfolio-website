import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Trophy, Sparkles, Github, Linkedin, Award, Code, Compass } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { profileData } from '../data/profile';

export const Community: React.FC = () => {
  return (
    <section id="community" className="w-full px-6 sm:px-10 lg:px-[12%] py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="BUILD IN PUBLIC"
        title="Community &amp; Engagement"
        subtitle="Sharing what I learn, exploring new technologies, and collaborating with the developer community."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
        {/* Large 2x2 Bento Card: Clean Typography & Trophy Badge (No Images) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-2 lg:row-span-2 rounded-3xl border border-gray-200/90 bg-white p-8 sm:p-12 flex flex-col justify-between shadow-sm hover:shadow-soft-lg group relative overflow-hidden transition-all duration-300"
        >
          {/* Subtle background ambient warmth */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-50/80 via-yellow-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10">
            {/* Top Trophy Emblem & Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Trophy className="w-7 h-7 text-amber-500" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-100/70 text-amber-900 border border-amber-200">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  2nd Prize Winner
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                  International Hackathon
                </span>
                <span className="text-xs text-gray-400 font-mono hidden sm:inline-block">
                  Karjat, Mumbai
                </span>
              </div>
            </div>

            {/* Title & Narrative */}
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-outfit tracking-tight">
              International UAi HAWK-ATHON
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-8 font-light max-w-xl">
              Honored with 2nd Prize at the International UAi HAWK-ATHON in Karjat, Mumbai. Recognized for innovation, rapid prototyping, and collaborative technical problem-solving under competitive hackathon conditions.
            </p>

            {/* Capability / Focus Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['AI & Machine Learning', 'Rapid Prototyping', 'System Architecture', 'Team Collaboration'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-gray-50 border border-gray-200 text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="relative z-10 pt-4 border-t border-gray-100">
            <motion.a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 shadow-sm group/btn"
            >
              <span>View Achievement on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Card 2: LinkedIn Post - MCP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3, delay: 0.08 }}
          className="lg:col-span-1 rounded-3xl border border-blue-100/70 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/50 p-7 sm:p-8 flex flex-col justify-between hover:border-blue-200 hover:shadow-soft-lg group relative overflow-hidden transition-all duration-300"
        >
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 backdrop-blur-md border bg-blue-600/10 border-blue-200/50 text-blue-800">
              LinkedIn Insight
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-outfit">
              Model Context Protocol &amp; Tool Ecosystems
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 mb-6 font-light">
              Exploring how standard protocols streamline connecting core AI models with diverse external tools, datasets, and structured execution environments.
            </p>
          </div>

          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 group-hover:gap-3 transition-all"
          >
            <span>Connect &amp; Discuss</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Card 3: Technical Insights - Agentic AI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3, delay: 0.12 }}
          className="lg:col-span-1 rounded-3xl border border-blue-100/70 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/50 p-7 sm:p-8 flex flex-col justify-between hover:border-blue-200 hover:shadow-soft-lg group relative overflow-hidden transition-all duration-300"
        >
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 backdrop-blur-md border bg-blue-600/10 border-blue-200/50 text-blue-800">
              Technical Perspective
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-outfit">
              Orchestrating Agentic AI &amp; RAG Pipelines
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 mb-6 font-light">
              Analyzing approaches for multi-actor LLM workflows, balancing prompt engineering with reliable state stores and semantic search retrieval.
            </p>
          </div>

          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 group-hover:gap-3 transition-all"
          >
            <span>Read Updates</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Card 4 (Span 3): Dark Bento Banner - Open Source AI Engineering */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3, delay: 0.16 }}
          className="lg:col-span-3 rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl relative overflow-hidden group transition-all duration-300"
        >
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold mb-4 backdrop-blur-md border bg-white/10 border-white/20 text-gray-200">
              Open Source &amp; Collaboration
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-outfit text-white">
              Building Open Solutions &amp; Applied Machine Learning
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-light">
              I share project source code, experiment notebooks, and utility libraries openly on GitHub. I believe in learning in public and exchanging feedback with fellow developers.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <motion.a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-lime-300 transition-colors duration-300 shadow-md group"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repos</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
