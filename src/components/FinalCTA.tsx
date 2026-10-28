import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

export const FinalCTA: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-20 lg:py-28 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center max-w-4xl mx-auto shadow-xs">
          
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            Start a Conversation
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight max-w-2xl leading-tight">
            Have a problem worth solving?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mt-4 mb-8">
            Let's explore how AI, computer vision and intelligent sensing can help your organization succeed in the field.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm hover:shadow transition-all flex items-center gap-2 group"
            >
              <span>Contact Encepto</span>
              <MaterialIcon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/technology"
              className="px-6 py-3.5 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              Explore Technology
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <span>Direct engineering review</span>
            <span>&bull;</span>
            <a href="mailto:contact@encepto.in" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              contact@encepto.in
            </a>
            <span>&bull;</span>
            <span>Response within 24 hours</span>
          </div>

        </div>

      </div>
    </section>
  );
};
