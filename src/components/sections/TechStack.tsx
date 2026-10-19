import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categorizedTechnologies } from '../../data/technologies';
import { SectionHeading } from '../ui/SectionHeading';
import { Code, Brain, Bot, Globe, Wrench, CheckCircle2 } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...categorizedTechnologies.map((c) => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code className="w-4 h-4" />;
      case 'AI & Machine Learning':
        return <Brain className="w-4 h-4" />;
      case 'AI Engineering':
        return <Bot className="w-4 h-4" />;
      case 'Web Development':
        return <Globe className="w-4 h-4" />;
      case 'Tools & Platforms':
        return <Wrench className="w-4 h-4" />;
      default:
        return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? categorizedTechnologies
      : categorizedTechnologies.filter((c) => c.category === selectedCategory);

  return (
    <section id="tech-stack" className="w-full px-6 sm:px-10 lg:px-[12%] py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="TECHNICAL ARSENAL"
        title="Skills &amp; Technologies"
        subtitle="A curated overview of programming languages, machine learning frameworks, AI agent tooling, and developer utilities I work with."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 ${
              selectedCategory === cat
                ? 'bg-black text-white shadow-sm'
                : 'bg-white/80 border border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-white'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Categories Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredCategories.map((catGroup) => (
            <motion.div
              layout
              key={catGroup.category}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="border border-gray-300/80 rounded-2xl p-6 bg-white/70 backdrop-blur-sm hover:shadow-soft flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3 text-gray-900 font-semibold text-lg">
                  <div className="p-2 rounded-lg bg-gray-100 text-black">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <span>{catGroup.category}</span>
                </div>
                <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                  {catGroup.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {catGroup.items.map((item) => (
                  <motion.span
                    key={item.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 border border-gray-200/90 text-gray-800 hover:border-black hover:bg-white transition-colors duration-200 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                    {item.name}
                    {item.tag && (
                      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider ml-0.5">
                        • {item.tag}
                      </span>
                    )}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
