import React, { useState } from 'react';

interface ArchStep {
  id: number;
  node: string;
  name: string;
  summary: string;
  metric: string;
  title: string;
  desc: string;
  bus: string;
  lat: string;
}

const steps: ArchStep[] = [
  {
    id: 1,
    node: 'NODE // 01',
    name: 'CAMERAS & SENSORS',
    summary: 'Optical raw CMOS, high-temp thermopiles, 6-DoF IMU, acoustic microphones.',
    metric: 'INPUT: RAW ANALOG/MIPI',
    title: 'CAMERAS & SENSORY ARRAYS',
    desc: 'Multi-spectral optical modules coupled with dual thermal radiometric sensors and vibration microphones. Direct DMA bus transfer with zero OS buffering.',
    bus: 'MIPI CSI-2',
    lat: '< 1.4ms',
  },
  {
    id: 2,
    node: 'NODE // 02',
    name: 'COMPUTER VISION',
    summary: 'Spatial feature extraction, de-noising filters, ROI extraction & optical flow.',
    metric: 'RATE: 60 FPS INTAKE',
    title: 'COMPUTER VISION PIPELINE',
    desc: 'Local hardware-accelerated spatial filtering, feature extraction, low-light gain adjustment, and optical flow estimation running at nominal 60 FPS intake.',
    bus: 'AXI STREAM',
    lat: '2.8ms',
  },
  {
    id: 3,
    node: 'NODE // 03',
    name: 'EMBEDDED COMPUTE',
    summary: 'Sub-5W tensor hardware, zero-copy memory registers, direct bus arbitration.',
    metric: 'POWER: < 4.2 WATTS',
    title: 'EDGE EMBEDDED ACCELERATORS',
    desc: 'Dedicated sub-5W tensor core silicon executing quantized neural weight registers with direct SRAM allocation, avoiding high-power PCIe interfaces.',
    bus: 'ON-DIE TENSOR DMA',
    lat: '3.2ms',
  },
  {
    id: 4,
    node: 'NODE // 04',
    name: 'AI MODELS',
    summary: 'Quantized INT8 CNNs/Transformers tailored for defect & motion classification.',
    metric: 'WEIGHTS: COMPACT INT8',
    title: 'INT8 SPECIALIZED AI MODELS',
    desc: 'Quantized classification and object identification models engineered for domain invariance across high-dust and extreme thermal variance profiles.',
    bus: 'TENSOR ACCEL',
    lat: '2.1ms',
  },
  {
    id: 5,
    node: 'NODE // 05',
    name: 'VLM REASONING',
    summary: 'Context synthesis across multi-modal tensors into human-inspectable state vectors.',
    metric: 'LOGIC: EMBEDDED CONTEXT',
    title: 'VISION-LANGUAGE REASONING',
    desc: 'Contextual on-device vision-language models synthesising disparate perceptual vectors into structured natural language states and autonomous safety triggers.',
    bus: 'EMBEDDED CONTEXT BUS',
    lat: '1.9ms',
  },
  {
    id: 6,
    node: 'NODE // 06',
    name: 'ACTION & DISPATCH',
    summary: 'Deterministic CAN bus telemetry, relay triggering, automated shutoff trip signals.',
    metric: 'DISPATCH: ZERO BUFFER',
    title: 'ACTIONABLE SYSTEM DISPATCH',
    desc: 'Deterministic hardware relay triggering, CAN bus telemetry broadcast, and automated machinery shut-down trips without external network round-trips.',
    bus: 'ISOLATED CAN / GPIO',
    lat: '< 0.4ms',
  },
];

export const ArchitectureSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const activeDetail = steps.find((s) => s.id === selectedStep) || steps[0];

  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
          <div className="flex flex-col gap-space-xs">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              03 / SYSTEM ARCHITECTURE
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              From sensing to actionable intelligence.
            </h2>
          </div>
          <div className="flex items-center gap-space-md font-mono-label text-body-sm text-on-surface-variant flex-wrap">
            <span className="text-secondary font-bold">&lt; 12ms TOTAL SYSTEM LATENCY</span>
            <span>// ZERO-CLOUD DEPENDENT</span>
          </div>
        </div>

        {/* Horizontal Architecture Pipeline Flow */}
        <div className="w-full overflow-x-auto pb-space-sm">
          <div className="min-w-[980px] grid grid-cols-6 gap-space-xs relative">
            {/* Bus Connecting Line Indicator */}
            <div className="col-span-6 h-0.5 bg-outline-variant my-space-xs relative">
              <div className="absolute left-0 top-0 h-0.5 bg-secondary w-full animate-pulse"></div>
            </div>

            {/* 6 Interactive Pipeline Nodes */}
            {steps.map((step) => {
              const isSelected = step.id === selectedStep;
              return (
                <div
                  key={step.id}
                  onClick={() => setSelectedStep(step.id)}
                  className={`cursor-pointer bg-surface p-space-sm flex flex-col justify-between min-h-[220px] transition-all ${
                    isSelected
                      ? 'border-2 border-secondary'
                      : 'border border-outline-variant hover:border-on-surface'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedStep(step.id);
                    }
                  }}
                  aria-pressed={isSelected}
                  aria-label={`${step.node}: ${step.name}`}
                >
                  <div className="flex flex-col gap-space-xs">
                    <span
                      className={`font-mono-label text-mono-label font-bold ${
                        isSelected ? 'text-secondary' : 'text-on-surface-variant'
                      }`}
                    >
                      {step.node}
                    </span>
                    <h4 className="font-headline-md text-body-lg text-on-surface font-bold uppercase">
                      {step.name}
                    </h4>
                    <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
                      {step.summary}
                    </p>
                  </div>
                  <div className="pt-space-xs border-t border-outline-variant font-mono-label text-[10px] text-on-surface-variant">
                    {step.metric}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Architecture Inspection Card */}
        <div className="bg-surface border border-outline-variant p-space-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md transition-colors">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center font-mono-metric text-headline-md flex-shrink-0 font-bold">
              0{activeDetail.id}
            </div>
            <div className="flex flex-col">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold">
                CURRENT NODE INSPECTION
              </span>
              <span className="font-headline-md text-headline-md text-on-surface font-bold">
                {activeDetail.title}
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                {activeDetail.desc}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm font-mono-label text-body-sm flex-shrink-0">
            <span className="bg-surface-container px-space-sm py-1 border border-outline-variant">
              BUS PROTOCOL: {activeDetail.bus}
            </span>
            <span className="bg-surface-container px-space-sm py-1 border border-outline-variant">
              LATENCY: {activeDetail.lat}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
