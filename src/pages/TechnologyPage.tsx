import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// System Architecture Step definitions
interface SystemArchLayer {
  id: number;
  num: string;
  label: string;
  subLabel: string;
  explanation: string;
  details: string;
  latencyBudget: string;
  hardwareTarget: string;
}

const systemArchitectureLayers: SystemArchLayer[] = [
  {
    id: 1,
    num: '01',
    label: 'Sensing',
    subLabel: 'Signal Ingestion & Sync',
    explanation: 'Multi-modal optical CMOS cameras, radiometric thermal sensors, and high-frequency acoustic probes.',
    details: 'Physical signals are conditioned at the hardware level with microsecond synchronization, preventing time lag across different sensors.',
    latencyBudget: '< 0.5 ms',
    hardwareTarget: 'Direct MIPI CSI-2 & Sensor Bus',
  },
  {
    id: 2,
    num: '02',
    label: 'Perception',
    subLabel: 'Spatial Feature Extraction',
    explanation: 'Hardware spatial filtering, optical feature tracking, and automated lens flare cancellation.',
    details: 'Extracts geometric features and cancels dust scatter in memory buffers before running neural models.',
    latencyBudget: '< 1.8 ms',
    hardwareTarget: 'Hardware ISP & Zero-Copy DMA',
  },
  {
    id: 3,
    num: '03',
    label: 'Edge Compute',
    subLabel: 'Hardware-Aware Execution',
    explanation: 'Low-power deterministic processing units operating without cloud dependencies.',
    details: 'Custom execution runtimes avoid operating system jitter and prevent processor overheating in hot outdoor environments.',
    latencyBudget: '< 3.2 ms',
    hardwareTarget: 'Embedded NPU & Low-Power Silicon',
  },
  {
    id: 4,
    num: '04',
    label: 'AI Models',
    subLabel: 'Quantized Neural Inference',
    explanation: 'Compact neural networks compressed for high accuracy on low-power chips.',
    details: 'Model weights are quantized to INT8/INT4 precision, fitting directly into fast on-chip memory without power-hungry external RAM.',
    latencyBudget: '< 5.5 ms',
    hardwareTarget: 'Neural Processing Units (NPU / DSP)',
  },
  {
    id: 5,
    num: '05',
    label: 'Intelligence',
    subLabel: 'Contextual Scene Reasoning',
    explanation: 'On-device vision-language models synthesizing multi-sensor signals into plain-English diagnostics.',
    details: 'Prunes redundant visual data to reason about scene hazards and mechanical wear directly on physical hardware.',
    latencyBudget: '< 9.0 ms',
    hardwareTarget: 'Quantized Edge Transformer Engine',
  },
  {
    id: 6,
    num: '06',
    label: 'Action',
    subLabel: 'Deterministic Control',
    explanation: 'Closed-loop hardware relay actuation and fail-safe automated equipment shutdowns.',
    details: 'Deterministic local actuation operates within milliseconds, keeping industrial equipment and personnel safe.',
    latencyBudget: '< 0.8 ms',
    hardwareTarget: 'Isolated Industrial Relays & CAN Bus',
  },
];

interface TechPillar {
  id: string;
  num: string;
  title: string;
  tagline: string;
  icon: string;
  summary: string;
  capabilities: { name: string; desc: string }[];
  deepDetails: {
    heading: string;
    text: string;
    specs: { label: string; value: string }[];
  };
}

const techPillars: TechPillar[] = [
  {
    id: 'embedded-ai',
    num: '01',
    title: 'Embedded AI',
    tagline: 'Intelligence at the edge.',
    icon: 'memory',
    summary: 'Hardware-aware neural inference executing directly on sub-watt silicon with zero reliance on cloud servers.',
    capabilities: [
      { name: 'Edge Inference', desc: 'Runs directly at the source of data, eliminating internet latency and cloud costs.' },
      { name: 'Air-Gapped Reliability', desc: 'Continuous autonomous operation in remote fields, mines and shielded industrial facilities.' },
      { name: 'Predictable Speed', desc: 'Fast, guaranteed response times required for automated machinery safety interlocks.' },
      { name: 'Sub-Watt Silicon Design', desc: 'Engineered to avoid thermal overheating even in 55°C ambient outdoor conditions.' },
    ],
    deepDetails: {
      heading: 'Hardware-Aware Inference Architecture',
      text: 'Our bare-metal execution runtimes bypass traditional OS scheduling jitter. Neural weights are quantized to INT8 precision and fit directly into on-chip cache to minimize power consumption in remote deployments.',
      specs: [
        { label: 'Runtime Environment', value: 'Bare-metal C++ / Real-Time Kernel' },
        { label: 'Model Quantization', value: 'Symmetric INT8 / Asymmetric INT4' },
        { label: 'Memory Bus', value: 'Direct DMA to On-Chip SRAM' },
        { label: 'Operating Thermal Range', value: 'Passive Conduction (-40°C to +85°C)' },
      ],
    },
  },
  {
    id: 'computer-vision',
    num: '02',
    title: 'Computer Vision',
    tagline: 'Machines that see.',
    icon: 'visibility',
    summary: 'High-speed spatial perception and optical inspection designed to see clearly through dust, glare and changing light.',
    capabilities: [
      { name: 'Sub-Pixel Inspection', desc: 'Detects microscopic surface defects, cracks and boundary anomalies at manufacturing speeds.' },
      { name: 'Dust-Invariant Vision', desc: 'Spatio-temporal algorithms that filter out airborne dust particles and optical glare.' },
      { name: 'High-Speed Tracking', desc: 'Real-time motion tracking and defect categorization at line speeds up to 120 frames per second.' },
      { name: 'Vibration Invariance', desc: 'Maintains sharp optical perception despite heavy mechanical shock and machine vibration.' },
    ],
    deepDetails: {
      heading: 'Integrated Optical Pipeline',
      text: 'Raw pixel data streams directly from camera sensors into an optimized image signal processor. Custom mathematical transforms compensate for lens fouling and dust scatter without requiring mechanical wiper blades.',
      specs: [
        { label: 'Camera Interfaces', value: 'Direct MIPI CSI-2 (4-Lane)' },
        { label: 'Frame Rates', value: '40 to 120 FPS Real-Time Intake' },
        { label: 'Optical Correction', value: 'Dynamic De-Scattering Kernels' },
        { label: 'Feature Extraction', value: 'Hardware-Accelerated SIMD Vector Code' },
      ],
    },
  },
  {
    id: 'intelligent-sensing',
    num: '03',
    title: 'Intelligent Sensing',
    tagline: 'Understand the environment.',
    icon: 'sensors',
    summary: 'Multimodal sensor fusion binding optical cameras, thermal radiometric sensors, IMUs and acoustic probes.',
    capabilities: [
      { name: 'Multi-Sensor Fusion', desc: 'Combines camera images with temperature gradients and vibration telemetry into a unified model.' },
      { name: 'Fail-Safe Perception', desc: 'When lenses are obscured by heavy smoke or dust, thermal and acoustic probes maintain monitoring.' },
      { name: 'Microsecond Clock Sync', desc: 'Hardware time-stamping ensures measurements from different sensors align with zero phase error.' },
      { name: 'Industrial Coupling', desc: 'Direct interfaces with equipment bearings, high-voltage transformers and structural joints.' },
    ],
    deepDetails: {
      heading: 'Unified Physical State-Space Modeling',
      text: 'Single-modality sensing can fail under harsh field conditions. By fusing thermal thermopiles and acoustic vibration probes with optical cameras, the system provides uninterrupted situational awareness.',
      specs: [
        { label: 'Acoustic Sampling', value: 'Up to 20 kHz High-Frequency Intake' },
        { label: 'Sensor Fusion Math', value: 'Extended Kalman Filtering (EKF)' },
        { label: 'Hardware Synchronization', value: 'Microsecond Hardware Timers' },
        { label: 'Field Interfaces', value: 'Isolated CAN Bus / RS-485 / Modbus' },
      ],
    },
  },
  {
    id: 'vision-language-models',
    num: '04',
    title: 'Vision-Language Models',
    tagline: 'See. Understand. Reason.',
    icon: 'psychology',
    summary: 'Compressed multimodal AI models that understand physical scenes and make explainable on-device safety decisions.',
    capabilities: [
      { name: 'Contextual Scene Understanding', desc: 'Understands complex situations rather than just returning simple object bounding boxes.' },
      { name: 'Explainable Decisions', desc: 'Identifies why a mechanical part is wearing out or why an operational hazard is developing.' },
      { name: 'Token Pruning Efficiency', desc: 'Removes unnecessary visual pixels to reduce memory footprint by 74% for edge chips.' },
      { name: 'Instant Local Action', desc: 'Triggers equipment safety shutoffs without the delay of sending video to distant cloud servers.' },
    ],
    deepDetails: {
      heading: 'Compressed On-Device Foundation Architecture',
      text: 'Rather than streaming high-bandwidth video back to remote cloud LLMs, our quantized vision-language models run locally on edge NPUs. The system synthesizes complex diagnostics into structured actionable signals.',
      specs: [
        { label: 'Architecture', value: 'Token-Pruned Lightweight Vision-Language Model' },
        { label: 'Memory Savings', value: '74% Reduction in KV-Cache RAM Footprint' },
        { label: 'Execution Target', value: 'Local Vector Registers & NPU' },
        { label: 'Output Control', value: 'Structured Status & Discrete Hardware Relays' },
      ],
    },
  },
];

export const TechnologyPage: React.FC = () => {
  const [activeArchIndex, setActiveArchIndex] = useState<number>(0);
  const [expandedPillars, setExpandedPillars] = useState<Record<string, boolean>>({});

  const togglePillarDetail = (id: string) => {
    setExpandedPillars((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const activeArchLayer = systemArchitectureLayers[activeArchIndex];

  return (
    <div className="flex flex-col w-full text-slate-900 dark:text-slate-100 antialiased">
      
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Technology Overview
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Engineering Intelligence <br />
                <span className="text-blue-600 dark:text-blue-400">for the Physical World.</span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                We design modular edge software that combines computer vision, multi-sensor telemetry and vision-language reasoning for demanding environments.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/applications"
                  className="px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all flex items-center gap-2 group"
                >
                  <span>Explore Applications</span>
                  <MaterialIcon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>

            {/* Right: Architecture Summary Graphic */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-5">
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Six-Stage Processing Loop
                </span>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  &lt; 12ms TOTAL
                </span>
              </div>

              <div className="space-y-2">
                {systemArchitectureLayers.map((layer, idx) => (
                  <div
                    key={layer.num}
                    onClick={() => setActiveArchIndex(idx)}
                    className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                      activeArchIndex === idx
                        ? 'bg-white dark:bg-slate-800 border-blue-500 shadow-xs'
                        : 'bg-white/60 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold ${activeArchIndex === idx ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}>
                        {layer.num}
                      </span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        {layer.label}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {layer.latencyBudget}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Deterministic edge runtime</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">100% On-Device</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Core Technologies Section */}
      <section className="w-full bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Core Technologies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
              Four Modular Technology Pillars
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
              Each technology operates as an independent, optimized software module or unifies into a single intelligent system.
            </p>
          </div>

          <div className="space-y-8">
            {techPillars.map((pillar) => {
              const isExpanded = !!expandedPillars[pillar.id];
              return (
                <div
                  key={pillar.id}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-7 sm:p-8 hover:border-blue-500/40 transition-all shadow-xs"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <MaterialIcon name={pillar.icon} className="text-[24px]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-blue-600 dark:text-blue-400">LAYER {pillar.num}</span>
                          <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">&bull;</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 italic font-medium">"{pillar.tagline}"</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={() => togglePillarDetail(pillar.id)}
                      className="self-start px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center gap-1.5"
                    >
                      <span>{isExpanded ? 'Hide Technical Specs' : 'View Technical Specs'}</span>
                      <MaterialIcon name={isExpanded ? 'expand_less' : 'expand_more'} className="text-[16px]" />
                    </button>
                  </div>

                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-6">
                    {pillar.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
                    {pillar.capabilities.map((cap) => (
                      <div key={cap.name} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{cap.name}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{cap.desc}</p>
                      </div>
                    ))}
                  </div>

                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                        {pillar.deepDetails.heading}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {pillar.deepDetails.text}
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {pillar.deepDetails.specs.map((sp) => (
                          <div key={sp.label} className="p-3 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800">
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">{sp.label}</span>
                            <span className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5 block">{sp.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Interactive System Architecture Section */}
      <section className="w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              System Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
              From Physical Sensor to Machine Action
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
              Explore the six sequential processing stages that convert raw physical sensor signals into real-time industrial action.
            </p>
          </div>

          {/* 6 Stage Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {systemArchitectureLayers.map((layer, idx) => (
              <button
                key={layer.num}
                onClick={() => setActiveArchIndex(idx)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  activeArchIndex === idx
                    ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block mb-1">
                  STAGE {layer.num}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">
                  {layer.label}
                </span>
              </button>
            ))}
          </div>

          {/* Active Stage Detail Panel */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {activeArchLayer.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {activeArchLayer.label}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mt-0.5">
                    {activeArchLayer.subLabel}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                  Target: {activeArchLayer.hardwareTarget}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-semibold">
                  Latency Budget: {activeArchLayer.latencyBudget}
                </span>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeArchLayer.explanation}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Engineering Detail</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeArchLayer.details}
                </p>
              </div>
            </div>
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
              className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all"
            >
              Contact Encepto
            </Link>
            <Link
              to="/applications"
              className="px-6 py-3.5 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-100 transition-colors"
            >
              Explore Applications
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TechnologyPage;
