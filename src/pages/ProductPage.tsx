import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// 6-Stage Visual Process as requested
const productProcess = [
  { step: '01', name: 'Customer Need', desc: 'Audit physical operating conditions, silicon cost limits and latency bounds.' },
  { step: '02', name: 'Research', desc: 'Benchmark model architectures and verify mathematical quantization feasibility.' },
  { step: '03', name: 'Software Development', desc: 'Engineer lightweight neural models, camera ingestion drivers and bare-metal code.' },
  { step: '04', name: 'Prototype', desc: 'Hardware-in-the-loop bring-up on commercial silicon boards and test benches.' },
  { step: '05', name: 'Validation', desc: 'Stress-test systems in simulated thermal, dust, vibration and brownout conditions.' },
  { step: '06', name: 'Deployment', desc: 'Install and commission live systems on physical machines with dual-boot safety.' },
];

export const ProductPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-slate-900 dark:text-slate-100 antialiased">
      
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Product &amp; Offerings
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Software-First AI Engineered for <br />
              <span className="text-blue-600 dark:text-blue-400">Physical Edge Hardware.</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Encepto operates as an applied engineering lab. We develop high-speed computer vision and AI software for commercial silicon chips, while collaborating with organizations on tailored research and deployment challenges.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all flex items-center gap-2"
              >
                <span>Discuss Your Project</span>
                <MaterialIcon name="arrow_forward" className="text-[16px]" />
              </Link>
              <Link
                to="/technology"
                className="px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-colors"
              >
                Explore Technology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Paradigms: Today, Customer Projects, Future Direction */}
      <section className="w-full bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Our Model
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
              Where We Are Today &amp; Where We Are Headed
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
              We provide transparent clarity on what we deliver today, how we partner on customer challenges, and our long-term hardware systems direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Today */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border-2 border-blue-600 p-8 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Current State</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">ACTIVE</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Today: Software-First
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We build production-ready edge AI software: quantized neural networks, camera drivers, image processing pipelines and bare-metal inference runtimes executing on commercial silicon.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  Focus: Production software on commercial chips
                </span>
              </div>
            </div>

            {/* Card 2: Customer Projects */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-700 transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Client Engagements</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">COLLABORATIVE</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Customer Projects &amp; R&amp;D
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We collaborate with organizations to solve high-friction physical deployment bottlenecks: custom sensor selection, model distillation, and validation under harsh field conditions.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Focus: Tailored AI engineering &amp; problem-solving
                </span>
              </div>
            </div>

            {/* Card 3: Future Direction */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-700 transition-colors shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Future Horizon</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">RESEARCH</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Future: Integrated Systems
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We are researching integrated physical computing hardware: sealed, ruggedized silicon carrier boards co-designed with custom optics and proprietary neural algorithms.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Focus: Turnkey ruggedized intelligent devices
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6-Step Visual Process: Customer Need → Research → Software Development → Prototype → Validation → Deployment */}
      <section className="w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Engineering Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
              From Customer Need to Deployment
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
              Our proven six-step methodology guarantees that software is rigorously evaluated and hardened before it reaches the field.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {productProcess.map((proc, idx) => (
              <div
                key={proc.name}
                className="bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      STEP {proc.step}
                    </span>
                    {idx < productProcess.length - 1 && (
                      <span className="hidden lg:inline text-slate-300 dark:text-slate-700 font-bold">
                        &rarr;
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    {proc.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full bg-slate-50 dark:bg-slate-900/50 py-20 transition-colors">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Have a problem worth solving?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto">
            Let's explore how AI and intelligent sensing can help your organization succeed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all flex items-center gap-2"
            >
              <span>Contact Encepto</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
            <Link
              to="/technology"
              className="px-6 py-3.5 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-100 transition-colors"
            >
              Explore Technology
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductPage;
