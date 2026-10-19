import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// 8 Research Areas
const researchAreas = [
  { id: 'embedded-ai', title: 'Embedded AI', summary: 'Mixed INT4/INT8 quantization and bare-metal execution on sub-watt silicon.', icon: 'memory' },
  { id: 'computer-vision', title: 'Computer Vision', summary: 'Optical feature extraction preserving clarity through dust and solar glare.', icon: 'visibility' },
  { id: 'intelligent-sensing', title: 'Intelligent Sensing', summary: 'Multimodal sensor fusion binding optical arrays, thermal IR and acoustic probes.', icon: 'sensors' },
  { id: 'vlms', title: 'Vision-Language Models', summary: 'Dynamic token pruning in visual decoders, compressing memory for edge devices.', icon: 'psychology' },
  { id: 'edge-computing', title: 'Edge Computing', summary: 'Decentralized compute topologies capable of complete air-gapped autonomy.', icon: 'hub' },
  { id: 'industrial-ai', title: 'Industrial AI', summary: 'Algorithm design resilient against heavy mechanical shock and ambient forge heat.', icon: 'precision_manufacturing' },
  { id: 'ai-hardware', title: 'AI Hardware Co-Design', summary: 'Co-designing algorithms alongside silicon memory caches and passive cooling chassis.', icon: 'developer_board' },
  { id: 'field-deployment', title: 'Field Deployment', summary: 'Empirical telemetry aggregation, dual-boot partitions and self-healing watchdogs.', icon: 'settings_remote' },
];

// Simple Research Pipeline
const researchPipeline = [
  { num: '01', name: 'Question', desc: 'Identify physical bottlenecks before writing code.' },
  { num: '02', name: 'Formulate', desc: 'Benchmark model architectures and mathematical quantization limits.' },
  { num: '03', name: 'Prototype', desc: 'Compile models onto target edge silicon and bench rigs.' },
  { num: '04', name: 'Stress-Test', desc: 'Test in chambers with 55°C heat, particulate fog and voltage drops.' },
  { num: '05', name: 'Validate', desc: 'Continuous execution proving autonomous watchdog recovery.' },
];

// 4 Approved Featured Research Notes
const featuredNotes = [
  {
    id: 'note-01',
    category: 'Embedded AI',
    title: 'Quantization Strategies for Sub-5W Visual Transformers',
    code: 'ENC-RN-2026-08',
    summary: 'Evaluating mixed INT4/INT8 precision bounds on ARM Cortex and RISC-V edge vector registers to achieve high-accuracy inference within strict thermal limits.',
    fullText: 'Standard neural networks consume excessive memory bandwidth when running floating-point weights. This preprint evaluates symmetric INT8 quantization on convolutional layers combined with asymmetric INT4 quantization on visual attention projection matrices. Benchmarking demonstrates a 74% reduction in memory bus power while maintaining 98.4% of full-precision defect classification accuracy.',
  },
  {
    id: 'note-02',
    category: 'Computer Vision',
    title: 'Mitigating Atmospheric Dust Occlusion in Low-Cost Optics',
    code: 'ENC-RN-2026-09',
    summary: 'Spatio-temporal coherence kernels canceling particulate scatter in unshielded field cameras without requiring mechanical wiper blades.',
    fullText: 'Field cameras operating in agricultural and mining environments suffer rapid lens degradation from fine silicate dust. We present a spatio-temporal de-scattering algorithm that compares pixel variance across adjacent temporal frames to digitally cancel forward scattering, restoring contrast and edge sharpness without moving mechanical parts.',
  },
  {
    id: 'note-03',
    category: 'Edge Computing',
    title: 'Zero-Downtime Deterministic Firmware Flashing in Remote Nodes',
    code: 'ENC-RN-2026-10',
    summary: 'Dual-bank flash memory partitions enabling atomic fallback during sudden electrical line brownouts.',
    fullText: 'Remote industrial IoT nodes frequently fail when firmware updates are interrupted by power sags. This technical note details an atomic dual-bank flash partition scheme managed by an independent hardware watchdog, guaranteeing automated rollback to the golden boot image within 200 milliseconds of any incomplete flash cycle.',
  },
  {
    id: 'note-04',
    category: 'Vision-Language',
    title: 'Context Compression for On-Device Multi-Modal Reasoning',
    code: 'ENC-RN-2026-11',
    summary: 'Dynamic token pruning in visual decoders, compressing KV-cache footprints for local execution on edge NPUs.',
    fullText: 'Vision-language foundation models demand gigabytes of memory for key-value caches. By evaluating spatial entropy across image patches, our token-pruning runtime discards 60% to 75% of background tokens prior to cross-attention calculation, allowing lightweight multimodal reasoning to run inside sub-4GB unified memory budgets.',
  },
];

export const ResearchPage: React.FC = () => {
  const [activeNoteModal, setActiveNoteModal] = useState<typeof featuredNotes[0] | null>(null);

  return (
    <div className="flex flex-col w-full text-slate-900 dark:text-slate-100 antialiased">
      
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Research &amp; Insights
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Applied Research for <br />
              <span className="text-blue-600 dark:text-blue-400">Constrained Physical Edge Systems.</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We investigate foundational engineering challenges across model quantization, sensor fusion and environmental invariance, publishing our findings to support transparent peer review.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/collaboration"
                className="px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all"
              >
                Academic Collaboration
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-colors"
              >
                Discuss Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Research Areas as Visual Categories */}
      <section className="w-full bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Focus Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
              Core Research Disciplines
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
              Our active investigation domains across mathematical modeling, silicon compilation and physical system resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area) => (
              <div
                key={area.id}
                className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 hover:border-blue-500/50 hover:shadow-xs transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  <MaterialIcon name={area.icon} className="text-[22px]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {area.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {area.summary}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Simple Research Pipeline */}
      <section className="w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
              Our Research Pipeline
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
              How we formulate, benchmark and validate applied AI algorithms on physical edge hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {researchPipeline.map((step, idx) => (
              <div
                key={step.name}
                className="bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      STEP {step.num}
                    </span>
                    {idx < researchPipeline.length - 1 && (
                      <span className="hidden lg:inline text-slate-300 dark:text-slate-700 font-bold">
                        &rarr;
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {step.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Research Notes */}
      <section className="w-full bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Publications
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
                Approved Research Notes &amp; Preprints
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
                Click any note to read a summary of our mathematical hypotheses and benchmark results.
              </p>
            </div>

            <Link
              to="/collaboration"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors shrink-0"
            >
              <span>Explore Academic Collaboration</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredNotes.map((note) => (
              <div
                key={note.id}
                className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <span className="font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      {note.category}
                    </span>
                    <span>{note.code}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {note.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                    {note.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => setActiveNoteModal(note)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                  >
                    <span>Read Note Summary</span>
                    <MaterialIcon name="arrow_forward" className="text-[14px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Note Detail Modal */}
      {activeNoteModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 max-w-2xl w-full p-7 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">
                  {activeNoteModal.category} &bull; {activeNoteModal.code}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {activeNoteModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveNoteModal(null)}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
              >
                <MaterialIcon name="close" className="text-[18px]" />
              </button>
            </div>

            <div className="text-sm text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed py-2">
              <p>{activeNoteModal.fullText}</p>
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400">
                To request raw simulation code, benchmark traces or pre-print datasets, please reach out via our academic collaboration channel.
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <Link
                to="/collaboration"
                onClick={() => setActiveNoteModal(null)}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Propose Research Collaboration &rarr;
              </Link>
              <button
                onClick={() => setActiveNoteModal(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="w-full bg-white dark:bg-slate-950 py-20 transition-colors">
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
              className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all"
            >
              Contact Encepto
            </Link>
            <Link
              to="/collaboration"
              className="px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-colors"
            >
              Academic Collaboration
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ResearchPage;
