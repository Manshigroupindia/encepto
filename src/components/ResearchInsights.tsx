import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

export const ResearchInsights: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl pb-12">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Evidence &amp; Validation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
            Research &amp; Case Studies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
            Explore our published engineering preprints and real-world industrial validation trials.
          </p>
        </div>

        {/* 2 Clean Balanced Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Research Previews */}
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-sm transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Applied R&amp;D
                </span>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                  Preprints
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Algorithmic Research &amp; Insights
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Technical evaluations investigating neural quantization, dust-invariant optical filtering and lightweight on-device vision transformers.
              </p>

              <div className="space-y-3 pt-6">
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Embedded AI</span>
                    <span>ENC-RN-2026-08</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Quantization Strategies for Sub-5W Visual Transformers
                  </h4>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Vision</span>
                    <span>ENC-RN-2026-09</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Mitigating Atmospheric Dust Occlusion in Low-Cost Optics
                  </h4>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Academic collaboration welcome
              </span>
              <Link
                to="/research"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors group"
              >
                <span>View All Research</span>
                <MaterialIcon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: Case Studies Previews */}
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-sm transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Field Engagements
                </span>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                  Pilot Trials
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Field Validation &amp; Case Studies
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Documenting real-world deployments, hardware brings-up and stress-testing on physical machinery across industrial and agricultural environments.
              </p>

              <div className="space-y-3 pt-6">
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Industrial Manufacturing</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Pre-Production Pilot</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    High-Speed Stamping Line Anomaly &amp; Vibration Trip
                  </h4>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Agriculture</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Field Validation</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Arid Field Crop Canopy &amp; Foliar Blight Telemetry
                  </h4>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Transparent trial documentation
              </span>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors group"
              >
                <span>View Case Studies</span>
                <MaterialIcon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
