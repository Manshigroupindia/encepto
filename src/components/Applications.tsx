import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

const industries = [
  {
    icon: 'agriculture',
    title: 'Agriculture',
    subtitle: 'Field Perception',
    description: 'Crop canopy tracking, leaf disease telemetry and soil moisture monitoring engineered to endure extreme heat, dust and direct sunlight.',
    feature: 'Dust-Resistant Optics',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Industrial',
    subtitle: 'Manufacturing QA',
    description: 'High-speed line inspection, automated defect classification and instant mechanical safety shutoffs running under severe vibration.',
    feature: 'Sub-12ms Safety Trips',
  },
  {
    icon: 'reorder',
    title: 'Infrastructure',
    subtitle: 'Civil Health',
    description: 'Autonomous acoustic and structural fracture monitoring across bridges, rail networks and transport corridors without grid power.',
    feature: 'Acoustic Fatigue Sensing',
  },
  {
    icon: 'solar_power',
    title: 'Energy',
    subtitle: 'Power & Solar',
    description: 'Thermal hotspot and runaway detection for electrical substations, utility solar farms and transformers with 6kV surge shielding.',
    feature: 'Radiometric IR Imaging',
  },
];

export const Applications: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Real-World Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
              Built for Real-World Industry
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
              We deploy edge intelligence where traditional cloud systems and standard computers fail to operate.
            </p>
          </div>

          <Link
            to="/applications"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors shrink-0 group"
          >
            <span>Explore All Industries</span>
            <MaterialIcon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Clean Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-sm transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-2xs">
                    <MaterialIcon name={ind.icon} className="text-[24px]" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                    {ind.subtitle}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {ind.feature}
                </span>
                <Link
                  to="/applications"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                >
                  <span>View</span>
                  <MaterialIcon name="arrow_forward" className="text-[13px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
