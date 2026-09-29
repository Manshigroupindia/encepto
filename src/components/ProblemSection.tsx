import React from 'react';

const constraints = [
  {
    id: 'LIMIT_01',
    code: 'MIL-STD // DUST',
    title: '01. Atmospheric Dust',
    desc: 'Particulate contamination, optical occlusion, lens fouling, and abrasive physical wear degrade conventional camera pipelines within hours of unmanaged field exposure.',
    spec: 'SPEC: IP67 ENCLOSURE + COMPENSATING DENOISING',
  },
  {
    id: 'LIMIT_02',
    code: 'THERMAL // 55°C',
    title: '02. Extreme Ambient Heat',
    desc: 'Sustained 55°C outdoor thermal peaks trigger active processor throttling on consumer silicon. Encepto designs for passive conduction without moving fans that fail in grit.',
    spec: 'SPEC: INDUSTRIAL SILICON RATED (-40°C TO +85°C)',
  },
  {
    id: 'LIMIT_03',
    code: 'ELECTRICAL // BROWNOUT',
    title: '03. Unstable Power Grid',
    desc: 'Volatile line voltages, frequent grid brownouts, and intermittent solar charging cycles require deterministic power architectures with safe brownout journal commits.',
    spec: 'SPEC: ULTRA-WIDE 9-36V DC STEP-DOWN REGULATION',
  },
  {
    id: 'LIMIT_04',
    code: 'TELCO // AIR-GAPPED',
    title: '04. Unreliable Connectivity',
    desc: 'Edge AI that relies on continuous API backhauls collapses in deep rural or metal-shielded industrial sites. All perception and reasoning must execute autonomously on-silicon.',
    spec: 'SPEC: 100% AIR-GAPPED LOCAL DECISION LOOPS',
  },
  {
    id: 'LIMIT_05',
    code: 'COMMERCIAL // BOM',
    title: '05. Commercial Silicon BOM',
    desc: 'Deploying $5,000 server GPUs per camera is economically non-viable at institutional scale. Encepto develops for sub-$100 edge SoCs through INT4/INT8 quantization kernels.',
    spec: 'SPEC: SUB-WATT ARCHITECTURE COMPATIBLE',
  },
  {
    id: 'LIMIT_06',
    code: 'OPS // UNATTENDED',
    title: '06. Remote Environments',
    desc: 'No field technicians exist to reboot a frozen Linux daemon 200 kilometers from headquarters. Dual-redundant watchdogs and fail-safe recovery logic are mandatory invariants.',
    spec: 'SPEC: DUAL HARDWARE WATCHDOG TIMERS',
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              01 / THE PROBLEM
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              AI can work in a lab. The field is different.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Controlled environments make AI look simple. Real deployment introduces dust, heat, unstable power, zero connectivity, silicon BOM cost realities, and unattended operation.
          </p>
        </div>

        {/* 6 Physical Constraints Asymmetric Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {constraints.map((c) => (
            <div
              key={c.id}
              className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-on-surface transition-colors"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-mono-label text-body-sm text-on-surface-variant">
                  <span className="font-bold text-on-surface">{c.id}</span>
                  <span>{c.code}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">{c.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {c.desc}
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[11px] text-on-surface-variant">
                {c.spec}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Engineering Banner */}
        <div className="w-full bg-primary text-on-primary p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm font-mono-label">
          <div className="flex items-center gap-space-sm flex-wrap">
            <span className="w-3 h-3 bg-secondary inline-block"></span>
            <span className="text-body-lg font-bold">ENCEPTO CORE PRINCIPLE:</span>
            <span className="text-body-md text-outline-variant">We engineer for the field from day one.</span>
          </div>
          <span className="text-secondary text-body-sm font-bold uppercase tracking-wider">
            HARDENED_SYSTEMS // READY
          </span>
        </div>
      </div>
    </section>
  );
};
