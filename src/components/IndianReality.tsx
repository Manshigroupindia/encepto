import React from 'react';
import { MaterialIcon } from './MaterialIcon';

const realityItems = [
  {
    label: 'DUST',
    sub: 'AIRBORNE SILICATE',
    value: 'IP67 SEALED',
    spec: 'CONDUCTION COOLED',
    icon: 'grain',
  },
  {
    label: 'HEAT',
    sub: 'OUTDOOR AMBIENT',
    value: '55°C PASSIVE',
    spec: '-40°C TO +85°C SILICON',
    icon: 'thermostat',
  },
  {
    label: 'POWER',
    sub: 'GRID VARIABILITY',
    value: '9-36V ISOLATED',
    spec: 'BROWNOUT-SAFE COMMITS',
    icon: 'bolt',
  },
  {
    label: 'CONNECTIVITY',
    sub: 'AIR-GAPPED NETWORKS',
    value: '100% LOCAL',
    spec: 'ZERO CLOUD STREAMING',
    icon: 'wifi_off',
  },
  {
    label: 'COST',
    sub: 'SILICON ECONOMICS',
    value: 'SUB-$100 BOM',
    spec: 'INT4/INT8 QUANTIZED',
    icon: 'payments',
  },
  {
    label: 'REMOTE',
    sub: 'UNATTENDED OPS',
    value: 'AUTONOMOUS',
    spec: 'DUAL-BOOT WATCHDOG',
    icon: 'settings_remote',
  },
];

export const IndianReality: React.FC = () => {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              04 / FIELD ENGINEERING
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Built for India. Ready for the world.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Real-world constraints are treated as engineering requirements.
          </p>
        </div>

        {/* 6 Large Visual Labels / Hardened Constraint Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm">
          {realityItems.map((item) => (
            <div
              key={item.label}
              className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group relative"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span className="font-mono-label text-[10px] text-secondary font-bold">{item.sub}</span>
                  <MaterialIcon name={item.icon} className="text-[18px] group-hover:text-secondary transition-colors" />
                </div>
                <span className="font-display-hero text-headline-md lg:text-headline-lg text-on-surface font-bold tracking-tight mt-1">
                  {item.label}
                </span>
                <span className="font-mono-metric text-body-md text-secondary font-bold">
                  {item.value}
                </span>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[9px] text-on-surface-variant font-bold uppercase">
                {item.spec}
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Highlight */}
        <div className="bg-surface-container-high border-l-4 border-secondary p-space-md flex items-center justify-between flex-wrap gap-space-sm font-mono-label text-body-sm">
          <span className="text-on-surface font-medium">
            "What survives demanding field conditions here is ready for deployment anywhere."
          </span>
          <span className="text-secondary font-bold text-[10px] uppercase">
            FIELD-VALIDATED // DEEPTECH PARADIGM
          </span>
        </div>
      </div>
    </section>
  );
};
