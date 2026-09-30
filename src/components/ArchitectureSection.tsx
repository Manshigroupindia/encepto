import React, { useState } from 'react';
import { MaterialIcon } from './MaterialIcon';

interface ArchStep {
  id: number;
  node: string;
  name: string;
  shortDesc: string;
  metric: string;
  bus: string;
  lat: string;
  icon: string;
}

const steps: ArchStep[] = [
  {
    id: 1,
    node: 'NODE // 01',
    name: 'SENSING',
    shortDesc: 'Optical CMOS, thermal IR, 6-DoF IMU & acoustic inputs.',
    metric: 'RAW INTAKE: MIPI CSI-2',
    bus: 'MIPI CSI-2 / I2C / SPI',
    lat: '< 1.4ms',
    icon: 'sensors',
  },
  {
    id: 2,
    node: 'NODE // 02',
    name: 'PERCEPTION',
    shortDesc: 'Spatial de-scattering, ROI isolation & optical flow fields.',
    metric: 'HARDWARE ISP FLOW',
    bus: 'AXI STREAM DMA',
    lat: '2.8ms',
    icon: 'visibility',
  },
  {
    id: 3,
    node: 'NODE // 03',
    name: 'EDGE COMPUTE',
    shortDesc: 'Sub-5W deterministic tensor execution units.',
    metric: 'POWER: < 4.2 WATTS',
    bus: 'ZERO-COPY SRAM',
    lat: '3.2ms',
    icon: 'memory',
  },
  {
    id: 4,
    node: 'NODE // 04',
    name: 'AI MODELS',
    shortDesc: 'Quantized INT8 CNNs & domain transformers.',
    metric: 'WEIGHTS: INT8 COMPACT',
    bus: 'ON-CHIP NPU TENSOR',
    lat: '2.1ms',
    icon: 'hub',
  },
  {
    id: 5,
    node: 'NODE // 05',
    name: 'VLM REASONING',
    shortDesc: 'On-device multimodal contextual state synthesis.',
    metric: 'TOKEN-PRUNED LOCAL VLM',
    bus: 'EMBEDDED CONTEXT BUS',
    lat: '1.9ms',
    icon: 'psychology',
  },
  {
    id: 6,
    node: 'NODE // 06',
    name: 'ACTIONABLE INTELLIGENCE',
    shortDesc: 'Deterministic relay triggers & isolated CAN dispatch.',
    metric: 'DISPATCH: ZERO BUFFER',
    bus: 'ISOLATED CAN / GPIO',
    lat: '< 0.4ms',
    icon: 'electric_bolt',
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
            <span className="text-secondary font-bold">&lt; 12ms DETERMINISTIC LATENCY</span>
            <span>// ZERO-CLOUD DEPENDENCY</span>
          </div>
        </div>

        {/* Supporting statement */}
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl -mt-space-sm">
          A continuous physical-to-decision pipeline running entirely on local silicon.
        </p>

        {/* Visual Pipeline Flow with Buslines & Animated Packet Indicators */}
        <div className="w-full overflow-x-auto pb-space-sm">
          <div className="min-w-[980px] flex flex-col gap-space-xs relative">
            {/* Bus Connecting Animated Line */}
            <div className="h-1 bg-outline-variant relative my-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent w-full animate-[pulse_2s_infinite]"></div>
            </div>

            {/* 6 Interactive Pipeline Nodes */}
            <div className="grid grid-cols-6 gap-space-xs">
              {steps.map((step) => {
                const isSelected = step.id === selectedStep;
                return (
                  <div
                    key={step.id}
                    onClick={() => setSelectedStep(step.id)}
                    className={`cursor-pointer bg-surface p-space-sm flex flex-col justify-between min-h-[190px] transition-all relative ${
                      isSelected
                        ? 'border-2 border-secondary bg-surface-container'
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
                      <div className="flex items-center justify-between font-mono-label text-[10px]">
                        <span className={`font-bold ${isSelected ? 'text-secondary' : 'text-on-surface-variant'}`}>
                          {step.node}
                        </span>
                        <MaterialIcon name={step.icon} className={`text-[18px] ${isSelected ? 'text-secondary' : 'text-on-surface-variant'}`} />
                      </div>
                      <h4 className="font-headline-md text-body-md text-on-surface font-bold uppercase tracking-tight">
                        {step.name}
                      </h4>
                      <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
                        {step.shortDesc}
                      </p>
                    </div>
                    <div className="pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex justify-between items-center">
                      <span>{step.lat}</span>
                      <span className="text-secondary font-bold">NODE {step.id}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Node Telemetry Banner */}
        <div className="bg-surface border border-outline-variant p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md transition-colors">
          <div className="flex items-center gap-space-md">
            <div className="w-10 h-10 bg-primary text-on-primary flex items-center justify-center font-mono-metric text-body-lg font-bold flex-shrink-0">
              0{activeDetail.id}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase">
                  ACTIVE NODE // {activeDetail.name}
                </span>
                <span className="text-on-surface-variant text-[10px] font-mono-label">// {activeDetail.metric}</span>
              </div>
              <span className="font-body-md text-body-md text-on-surface">
                {activeDetail.shortDesc}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs font-mono-label text-[11px] flex-shrink-0">
            <span className="bg-surface-container px-space-xs py-1 border border-outline-variant text-on-surface">
              BUS: {activeDetail.bus}
            </span>
            <span className="bg-surface-container px-space-xs py-1 border border-outline-variant text-secondary font-bold">
              LATENCY: {activeDetail.lat}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
