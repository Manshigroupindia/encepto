import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

const workSteps = [
  {
    step: '01',
    name: 'Research',
    summary: 'Analyze physical requirements, thermal thresholds and target hardware budgets.',
  },
  {
    step: '02',
    name: 'Build',
    summary: 'Develop optimized neural models, camera ingestion pipelines and bare-metal runtimes.',
  },
  {
    step: '03',
    name: 'Test',
    summary: 'Rigorously validate systems under extreme heat, heavy dust, vibration and power brownouts.',
  },
  {
    step: '04',
    name: 'Deploy',
    summary: 'Install and commission software on operational machines with autonomous fail-safe recovery.',
  },
];

export const RDProcess: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
              How We Work
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
              A structured engineering approach designed to move smoothly from initial problem investigation to reliable production deployment.
            </p>
          </div>

          <Link
            to="/product"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors shrink-0 group"
          >
            <span>Learn About Our Engineering Approach</span>
            <MaterialIcon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4-Step Horizontal Pipeline: Research → Build → Test → Deploy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {workSteps.map((item, idx) => (
            <div
              key={item.name}
              className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-sm transition-all group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider">
                    STEP {item.step}
                  </span>
                  {idx < workSteps.length - 1 && (
                    <span className="hidden lg:inline text-slate-300 dark:text-slate-700 font-bold">
                      &rarr;
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                  Verified Phase Gate
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
