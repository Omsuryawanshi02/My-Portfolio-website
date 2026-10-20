import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Trophy,
  Award,
  Github,
  Maximize2,
  X,
  Users,
  MapPin,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { profileData } from '../../data/profile';
import { communityData } from '../../data/community';

interface ModalImage {
  url: string;
  title: string;
  subtitle?: string;
  caption?: string;
}

export const Community: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

  // Close lightbox on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  const hawkathonItem = communityData.find((item) => item.id === 'hackathon-spotlight');
  const githubItem = communityData.find((item) => item.id === 'github-community');
  const sprintItem = communityData.find((item) => item.id === 'hackathon-sprints');
  const mcpItem = communityData.find((item) => item.id === 'mcp-discussion');
  const agenticItem = communityData.find((item) => item.id === 'agentic-ai');
  const openSourceItem = communityData.find((item) => item.id === 'open-source');

  return (
    <section id="community" className="w-full px-6 sm:px-10 lg:px-[12%] py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="BUILD IN PUBLIC"
        title="Community & Engagement"
        subtitle="Sharing what I learn, competing in hackathons, and collaborating with developer communities."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
        {/* =========================================================================
            CARD 1: Featured 2nd Prize Winner — International UAi HAWK-ATHON (Span 2)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-2 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/30 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-soft-lg group relative overflow-hidden transition-all duration-300"
        >
          {/* Subtle background ambient warmth */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-100/60 via-yellow-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100/80 border border-amber-200 flex items-center justify-center text-amber-600 shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <Trophy className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200/80">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      2nd Prize Winner
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100/80 text-emerald-800 border border-emerald-200">
                      ₹10,000 Cheque
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>Karjat, Mumbai</span>
              </div>
            </div>

            {/* Split Content: Cheque Photo & Narrative */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
              {/* Photo Showcase */}
              <div className="md:col-span-5 relative">
                <div
                  onClick={() =>
                    setSelectedImage({
                      url: hawkathonItem?.image || '/images/community/hawkathon-2nd-prize.jpg',
                      title: 'International UAi HAWK-ATHON — 2nd Prize Winner',
                      subtitle: "Team Hack Veda's • ₹10,000 Cheque",
                      caption:
                        'Honored on stage at Universal AI University & SAIFT in Karjat, Mumbai for innovation and rapid prototyping.',
                    })
                  }
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-amber-200/60 bg-gray-100 cursor-pointer group/photo"
                >
                  <img
                    src={hawkathonItem?.image || '/images/community/hawkathon-2nd-prize.jpg'}
                    alt="International UAi HAWK-ATHON 2nd Winner Award"
                    className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/photo:opacity-40 transition-opacity" />

                  {/* Cheque tag overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs border border-white/20">
                      Team Hack Veda's
                    </span>
                    <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-xs hover:bg-white/40 transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 text-center mt-1.5">Click photo to view full size</p>
              </div>

              {/* Story Narrative */}
              <div className="md:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 font-outfit tracking-tight">
                  International UAi HAWK-ATHON
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-5 font-light">
                  Won 2nd Prize with our team <strong className="font-semibold text-gray-900">Hack Veda's</strong> at Universal AI University, Karjat. Recognized for technical innovation, high-speed prototyping, and building practical solutions under competitive hackathon pressure.
                </p>

                {/* Capability Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {[
                    'AI & Machine Learning',
                    "Team Hack Veda's",
                    'Rapid Prototyping',
                    '₹10,000 Cash Prize',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/80 border border-amber-200/70 text-gray-700 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="relative z-10 pt-4 border-t border-amber-100 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-gray-500 font-medium">
              Universal AI University &bull; SAIFT
            </span>
            <motion.a
              href={hawkathonItem?.url || profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-xs sm:text-sm font-semibold hover:bg-black shadow-xs group/btn"
            >
              <span>View Achievement on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </motion.a>
          </div>
        </motion.div>

        {/* =========================================================================
            CARD 2: GitHub Tech Event & Student Engagement (Span 1)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3, delay: 0.08 }}
          className="lg:col-span-1 rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-soft-lg group relative overflow-hidden transition-all duration-300"
        >
          <div className="relative z-10">
            {/* Image Header with Lightbox */}
            <div
              onClick={() =>
                setSelectedImage({
                  url: githubItem?.image || '/images/community/github-event.jpg',
                  title: 'GitHub Tech Event & Student Engagement',
                  subtitle: 'Computer Engineering Department &bull; Hands-on Session',
                  caption:
                    'Community event introducing developers to Git, GitHub, version control, and open-source practices.',
                })
              }
              className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xs border border-gray-200/80 bg-gray-100 cursor-pointer group/photo mb-5"
            >
              <img
                src={githubItem?.image || '/images/community/github-event.jpg'}
                alt="GitHub Tech Event in computer lab"
                className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/photo:opacity-40 transition-opacity" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs border border-white/20 flex items-center gap-1">
                  <Github className="w-3 h-3" /> GitHub Event
                </span>
                <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-xs hover:bg-white/40 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 border border-gray-200">
                Community &amp; Workshops
              </span>
              <span className="text-[11px] text-gray-400 font-mono">Hands-on Session</span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2 font-outfit">
              GitHub Tech Event &amp; Community
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 mb-4 font-light">
              Active participant in developer meetups and college tech sessions, sharing Git workflows, collaborative open-source practices, and empowering peers to build in public.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {['GitHub', 'Open Source', 'Dev Workshops'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-50 border border-gray-200 text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-black group-hover:gap-3 transition-all pt-3 border-t border-gray-100"
          >
            <Github className="w-4 h-4" />
            <span>Explore GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4 ml-auto" />
          </a>
        </motion.div>

        {/* =========================================================================
            CARD 3: Hackathon Sprints & Team Synergy (Span 1)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3, delay: 0.12 }}
          className="lg:col-span-1 rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-soft-lg group relative overflow-hidden transition-all duration-300"
        >
          <div className="relative z-10">
            {/* Image Header with Lightbox */}
            <div
              onClick={() =>
                setSelectedImage({
                  url: sprintItem?.image || '/images/community/hackathon-team.jpg',
                  title: 'Hackathon Sprints & Team Synergy',
                  subtitle: 'Innovation War Room &bull; Collaborative Prototyping',
                  caption:
                    'Collaborating with passionate builders, brainstormers, and designers during high-intensity hackathon builds.',
                })
              }
              className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xs border border-gray-200/80 bg-gray-100 cursor-pointer group/photo mb-5"
            >
              <img
                src={sprintItem?.image || '/images/community/hackathon-team.jpg'}
                alt="Hackathon Team Collaboration"
                className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/photo:opacity-40 transition-opacity" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs border border-white/20 flex items-center gap-1">
                  <Users className="w-3 h-3" /> Team Sprint
                </span>
                <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-xs hover:bg-white/40 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                Team Collaboration
              </span>
              <span className="text-[11px] text-gray-400 font-mono">Build In Public</span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2 font-outfit">
              Hackathon Sprints &amp; Synergy
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 mb-4 font-light">
              Teaming up with builders and engineers across intense hackathon sprints. Rapidly architecting solutions, debugging under crunch time, and turning concepts into working software.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {['Hackathons', 'Team Building', 'Rapid Builds'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-50 border border-gray-200 text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900 group-hover:gap-3 transition-all pt-3 border-t border-gray-100"
          >
            <Users className="w-4 h-4" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 ml-auto" />
          </a>
        </motion.div>

        {/* =========================================================================
            CARD 4: Technical Perspective - Model Context Protocol (Span 1)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3, delay: 0.16 }}
          className="lg:col-span-1 rounded-3xl border border-blue-100/70 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/40 p-6 sm:p-7 flex flex-col justify-between hover:border-blue-200 hover:shadow-soft-lg group relative overflow-hidden transition-all duration-300"
        >
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 backdrop-blur-md border bg-blue-600/10 border-blue-200/50 text-blue-800">
              LinkedIn Insight
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-outfit">
              Model Context Protocol &amp; FastMCP
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 mb-5 font-light">
              Exploring how standard protocols streamline connecting core AI models with external tools, structured databases, and execution sandboxes for intelligent agents.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {['MCP', 'FastMCP', 'AI Agents', 'Tool Calling'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-white/80 border border-blue-100 text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 group-hover:gap-3 transition-all pt-3 border-t border-blue-100/60"
          >
            <span>Connect &amp; Discuss</span>
            <ArrowUpRight className="w-4 h-4 ml-auto" />
          </a>
        </motion.div>

        {/* =========================================================================
            CARD 5: Technical Perspective - Orchestrating Agentic AI & RAG (Span 1)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="lg:col-span-1 rounded-3xl border border-indigo-100/70 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/30 p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-200 hover:shadow-soft-lg group relative overflow-hidden transition-all duration-300"
        >
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 backdrop-blur-md border bg-indigo-600/10 border-indigo-200/50 text-indigo-800">
              Technical Perspective
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-outfit">
              Agentic AI &amp; RAG Architecture
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 mb-5 font-light">
              Analyzing approaches for multi-step AI agents, balancing prompt context boundaries with reliable state management, structured JSON outputs, and vector retrieval.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {['Agentic AI', 'RAG Pipelines', 'Vector Search'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-white/80 border border-indigo-100 text-indigo-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 group-hover:gap-3 transition-all pt-3 border-t border-indigo-100/60"
          >
            <span>Read Updates on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 ml-auto" />
          </a>
        </motion.div>

        {/* =========================================================================
            CARD 6 (Span 3): Dark Bento Banner - Open Source AI Engineering
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3, delay: 0.24 }}
          className="lg:col-span-3 rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl relative overflow-hidden group transition-all duration-300"
        >
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold mb-3 backdrop-blur-md border bg-white/10 border-white/20 text-gray-200">
              Open Source &amp; Collaboration
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-outfit text-white">
              Building Open Solutions &amp; Applied Machine Learning
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-light">
              I share project source code, experiment notebooks, and utility libraries openly on GitHub. I believe in learning in public, contributing to open-source software, and exchanging knowledge with fellow developers.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <motion.a
              href={openSourceItem?.url || profileData.contact.github}
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

      {/* =========================================================================
          IMAGE LIGHTBOX MODAL
          ========================================================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Display */}
              <div className="relative bg-black flex-1 min-h-[300px] max-h-[68vh] flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain max-h-[68vh]"
                />
              </div>

              {/* Caption & Metadata */}
              <div className="p-5 sm:p-6 bg-white border-t border-gray-100">
                {selectedImage.subtitle && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
                    {selectedImage.subtitle}
                  </p>
                )}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-outfit">
                  {selectedImage.title}
                </h3>
                {selectedImage.caption && (
                  <p className="text-sm text-gray-600 mt-2 font-light leading-relaxed">
                    {selectedImage.caption}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
