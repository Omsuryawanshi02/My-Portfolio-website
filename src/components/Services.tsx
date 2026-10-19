import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { SectionHeading } from './SectionHeading';
import { Brain, Bot, Layout, BarChart3 } from 'lucide-react';

export const Services: React.FC = () => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ai-ml':
        return <Brain className="w-8 h-8 text-indigo-600" />;
      case 'ai-agents':
        return <Bot className="w-8 h-8 text-emerald-600" />;
      case 'full-stack':
        return <Layout className="w-8 h-8 text-blue-600" />;
      case 'data-analytics':
        return <BarChart3 className="w-8 h-8 text-amber-600" />;
      default:
        return <Brain className="w-8 h-8 text-gray-700" />;
    }
  };

  return (
    <section id="services" className="w-full px-6 sm:px-10 lg:px-[12%] py-20 scroll-mt-20">
      <SectionHeading
        eyebrow="WHAT I DO"
        title="Things I Build &amp; Explore"
        subtitle="Here's what I love spending time on — from real-world projects to design-first thinking."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="border border-gray-300 rounded-2xl px-7 py-10 hover:shadow-soft-lg bg-white/75 backdrop-blur-sm group flex flex-col justify-between cursor-pointer transition-all duration-300"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-200/80 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-300">
                {getServiceIcon(service.id)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-sans">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 group-hover:text-black transition-colors">
              <span>Explore Capability</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
