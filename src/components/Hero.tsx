import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Supporting Text, and Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Subtle Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold text-blue-700 dark:text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              <span>Intelligent Edge Systems</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              AI That Works <br className="hidden sm:inline" />
              <span className="text-blue-600 dark:text-blue-400">Beyond the Lab.</span>
            </h1>

            {/* Concise Supporting Copy in Simple English */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Embedded AI, computer vision and intelligent sensing built for real-world physical conditions.
            </p>

            {/* Clear CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                to="/technology"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Technology</span>
                <MaterialIcon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center"
              >
                Discuss Your Project
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Silicon Efficiency</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">Sub-Watt Compute</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Response Speed</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">&lt; 12ms Latency</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Cloud Reliance</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">100% Air-Gapped</p>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Technical Visual Illustration */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-slate-50 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                <span className="text-xs font-bold text-slate-900 dark:text-white tracking-wide uppercase">
                  Connected Edge Architecture
                </span>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  ON-DEVICE FLOW
                </span>
              </div>

              {/* 4 Connected Stages */}
              <div className="space-y-3">
                {/* Stage 1: Sensing */}
                <div className="p-3.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between group hover:border-blue-500/50 transition-colors shadow-xs">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <MaterialIcon name="sensors" className="text-[20px]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Cameras &amp; Sensors</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Optical, thermal radiometric &amp; acoustic feeds</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">INPUT</span>
                </div>

                <div className="flex justify-center -my-1 text-slate-300 dark:text-slate-700">
                  <MaterialIcon name="arrow_downward" className="text-[16px]" />
                </div>

                {/* Stage 2: Edge Compute */}
                <div className="p-3.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between group hover:border-blue-500/50 transition-colors shadow-xs">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <MaterialIcon name="memory" className="text-[20px]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Edge Compute Silicon</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Sub-5W deterministic processing runtime</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">PROCESS</span>
                </div>

                <div className="flex justify-center -my-1 text-slate-300 dark:text-slate-700">
                  <MaterialIcon name="arrow_downward" className="text-[16px]" />
                </div>

                {/* Stage 3: Local AI */}
                <div className="p-3.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between group hover:border-blue-500/50 transition-colors shadow-xs">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <MaterialIcon name="psychology" className="text-[20px]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Compact AI Models</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Quantized INT8 models &amp; scene understanding</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">INFERENCE</span>
                </div>

                <div className="flex justify-center -my-1 text-slate-300 dark:text-slate-700">
                  <MaterialIcon name="arrow_downward" className="text-[16px]" />
                </div>

                {/* Stage 4: Action */}
                <div className="p-3.5 rounded-lg bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <MaterialIcon name="precision_manufacturing" className="text-[20px]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Deterministic Action</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Direct hardware relays &amp; safety interlocks</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">ACTION</span>
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Direct on-device loop</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">Zero External Dependencies</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
