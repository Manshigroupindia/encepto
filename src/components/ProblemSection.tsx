import React from 'react';
import { MaterialIcon } from './MaterialIcon';

const constraints = [
  {
    id: '01',
    label: 'DUST',
    tag: 'ENV // PARTICULATE',
    icon: 'grain',
    desc: 'Airborne abrasive grit and optical occlusion.',
    spec: 'IP67 CONDUCTION COOLED',
  },
  {
    id: '02',
    label: 'HEAT',
    tag: 'THERMAL // 55°C',
    icon: 'thermostat',
    desc: 'Sustained high-ambient outdoor temperatures.',
    spec: '-40°C TO +85°C SILICON',
  },
  {
    id: '03',
    label: 'POWER',
    tag: 'GRID // VOLATILITY',
    icon: 'bolt',
    desc: 'Intermittent supply, line sags and brownouts.',
    spec: '9-36V DC STEP-DOWN REGULATION',
  },
  {
    id: '04',
    label: 'CONNECTIVITY',
    tag: 'NETWORK // AIR-GAPPED',
    icon: 'wifi_off',
    desc: 'Zero reliance on continuous cloud backhauls.',
    spec: '100% LOCAL INFERENCE LOOP',
  },
  {
    id: '05',
    label: 'COST',
    tag: 'BOM // ECONOMIC',
    icon: 'payments',
    desc: 'Scalable commercial edge silicon architectures.',
    spec: 'INT4/INT8 COMPACT KERNELS',
  },
  {
    id: '06',
    label: 'REMOTE',
    tag: 'OPS // UNATTENDED',
    icon: 'settings_remote',
    desc: 'Autonomous operation without on-site technicians.',
    spec: 'DUAL HARDWARE WATCHDOGS',
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
              AI meets reality.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Real-world deployment demands more than laboratory performance.
          </p>
        </div>

        {/* 6 Visual Constraint Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm">
          {constraints.map((c) => (
            <div
              key={c.id}
              className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group relative"
            >
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between font-mono-label text-[10px] text-on-surface-variant">
                  <span className="font-bold text-secondary">{c.id}</span>
                  <MaterialIcon name={c.icon} className="text-[20px] text-secondary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-headline-md text-body-lg lg:text-headline-md text-on-surface font-bold mt-1 tracking-tight">
                  {c.label}
                </h3>
                <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                  {c.desc}
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[9px] sm:text-[10px] text-on-surface font-bold tracking-wider">
                {c.spec}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Engineering Banner */}
        <div className="w-full bg-primary text-on-primary p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm font-mono-label">
          <div className="flex items-center gap-space-sm flex-wrap">
            <span className="w-3 h-3 bg-secondary inline-block"></span>
            <span className="text-body-lg font-bold">ENCEPTO PRINCIPLE:</span>
            <span className="text-body-md text-outline-variant">We engineer for physical constraints from day one.</span>
          </div>
          <span className="text-secondary text-body-sm font-bold uppercase tracking-wider">
            HARDENED_SYSTEMS // OPERATIONAL
          </span>
        </div>
      </div>
    </section>
  );
};
