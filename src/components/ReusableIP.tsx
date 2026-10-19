import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

export const ReusableIP: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Software-First Explanation & Direct CTA */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Product &amp; Offerings
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Software-First AI for Real-World Hardware
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Encepto designs production software for commercial edge silicon. We develop quantized neural models, fast camera drivers and deterministic runtimes, while collaborating with partners on customized engineering and research.
            </p>

            <div className="pt-2">
              <Link
                to="/product"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm hover:shadow transition-all group"
              >
                <span>Explore Product Approach</span>
                <MaterialIcon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Clean Minimal Cards */}
          <div className="lg:col-span-5 space-y-4 w-full">
            
            {/* Card 1: Today */}
            <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Today</span>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">Software-First</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Edge AI Software &amp; Drivers</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Production-ready quantized neural models, zero-copy camera ingestion and real-time inference on commercial chips.
              </p>
            </div>

            {/* Card 2: Engagements */}
            <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Customer Projects</span>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Collaborative</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Tailored Engineering &amp; R&amp;D</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Custom sensor integration, model compression and rigorous validation solving specific industrial bottlenecks.
              </p>
            </div>

            {/* Card 3: Future Roadmap */}
            <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Future Horizon</span>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">R&amp;D Roadmap</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Integrated Turnkey Systems</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Active research into ruggedized silicon carrier boards co-designed with custom optics and proprietary neural IP.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
