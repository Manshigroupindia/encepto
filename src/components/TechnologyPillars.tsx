import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

const technologies = [
  {
    icon: 'memory',
    title: 'Embedded AI',
    description: 'Smart AI models running locally on low-power silicon chips without relying on cloud internet connections.',
  },
  {
    icon: 'visibility',
    title: 'Computer Vision',
    description: 'High-speed image and optical perception that tracks features and inspects objects through dust, glare and vibration.',
  },
  {
    icon: 'sensors',
    title: 'Intelligent Sensing',
    description: 'Combining optical cameras, thermal radiometric probes and vibration sensors for complete environmental awareness.',
  },
  {
    icon: 'psychology',
    title: 'Vision-Language Models',
    description: 'Compact multimodal models that understand complex physical scenes and make context-aware decisions right at the edge.',
  },
];

export const TechnologyPillars: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
              Intelligence at the Edge
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
              We engineer specialized software runtimes and neural models designed to operate directly on compact physical silicon.
            </p>
          </div>

          <Link
            to="/technology"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors shrink-0 group"
          >
            <span>Explore Technology Details</span>
            <MaterialIcon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Clean Rectangular Cards with Minimal Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {technologies.map((tech) => (
            <div
              key={tech.title}
              className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-sm transition-all group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MaterialIcon name={tech.icon} className="text-[24px]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tech.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  to="/technology"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                >
                  <span>Learn more</span>
                  <MaterialIcon name="chevron_right" className="text-[14px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
