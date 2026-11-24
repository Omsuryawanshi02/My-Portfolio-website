import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { experienceData } from '../../data/experience';
import { Calendar, MapPin, Building2, Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full px-6 sm:px-10 lg:px-[12%] py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="CAREER JOURNEY"
        title="Work Experience"
        subtitle="Hands-on engineering roles developing production Generative AI systems, automated DevOps pipelines, and backend solutions."
      />

      <div className="max-w-4xl mx-auto my-12 relative">
        {/* Continuous Timeline Connecting Spine on Desktop */}
        <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-400 to-gray-200 -z-0" />

        <div className="space-y-8 relative z-10">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative flex flex-col sm:flex-row gap-5 sm:gap-7 items-start group"
            >
              {/* Timeline Avatar Node (Desktop) */}
              <div className="hidden sm:flex flex-col items-center flex-shrink-0 pt-1">
                <div
                  className={`w-16 h-16 rounded-2xl bg-white p-2 shadow-xs flex items-center justify-center relative transition-all duration-300 group-hover:scale-105 ${
                    exp.isCurrent
                      ? 'border-2 border-emerald-500 ring-4 ring-emerald-50 shadow-sm'
                      : 'border border-gray-200'
                  }`}
                >
                  <img
                    src={exp.companyLogo}
                    alt={exp.company}
                    className="w-full h-full object-contain rounded-xl"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  {exp.isCurrent && (
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                  )}
                </div>
              </div>

              {/* Main Role Card */}
              <div
                className={`flex-1 w-full bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border p-6 sm:p-7 shadow-xs hover:shadow-soft-lg transition-all duration-300 ${
                  exp.isCurrent
                    ? 'border-emerald-200/90 hover:border-emerald-400'
                    : 'border-gray-200/90 hover:border-gray-300'
                }`}
              >
                {/* Mobile Company Logo Bar */}
                <div className="sm:hidden flex items-center gap-3 pb-3 mb-3 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 p-1.5 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <img
                      src={exp.companyLogo}
                      alt={exp.company}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{exp.company}</p>
                    <p className="text-xs text-gray-500">{exp.period}</p>
                  </div>
                </div>

                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="font-outfit font-bold text-xl sm:text-2xl text-gray-900 tracking-tight leading-snug">
                      {exp.role}
                    </h3>

                    {/* Company, Date & Location info */}
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-[13px] text-gray-600 mt-2 flex-wrap">
                      <span className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-gray-800">
                        <Building2 className="w-3.5 h-3.5 text-gray-400" />
                        <span>{exp.company}</span>
                      </span>

                      <span className="hidden sm:inline text-gray-300">•</span>

                      <span className="inline-flex items-center gap-1.5 font-medium text-gray-700">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span>{exp.period}</span>
                      </span>

                      <span className="text-gray-300">•</span>

                      <span className="inline-flex items-center gap-1 text-gray-500 font-light">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Badges on Desktop/Right */}
                  <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Present Role
                      </span>
                    )}

                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200/70">
                      {exp.employmentType}
                    </span>
                  </div>
                </div>

                {/* Bulleted Achievements */}
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-gray-400 mt-1 text-xs select-none flex-shrink-0">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap mt-5 pt-3.5 border-t border-gray-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mr-1 select-none">
                    Tech Stack:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200/80 text-gray-700 hover:border-black hover:bg-white transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
