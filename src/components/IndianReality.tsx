import React from 'react';

const sectors = [
  {
    code: 'SECTOR // AGRI',
    title: 'Agriculture',
    desc: 'Arid crop field inspection enduring dense dust storms, variable monsoon downpours, and erratic 3-phase agricultural power grids.',
    constraint: 'CONSTRAINTS: HIGH SILICATE DUST + VOLTAGE SAG',
  },
  {
    code: 'SECTOR // IND',
    title: 'Heavy Industry',
    desc: 'Forge and casting floors plagued with intense electromagnetic noise, violent ambient vibration harmonics, and ambient radiant heat.',
    constraint: 'CONSTRAINTS: 55°C HEAT + 10G MECHANICAL VIBRATION',
  },
  {
    code: 'SECTOR // INFRA',
    title: 'Infrastructure',
    desc: 'Highways, bridge spans, and regional railway track beds subjected to relentless monsoon humidity, lightning transients, and zero cellular signal.',
    constraint: 'CONSTRAINTS: 99% RH HUMIDITY + REMOTE MILES',
  },
  {
    code: 'SECTOR // ENERGY',
    title: 'Energy & Solar',
    desc: 'Off-grid solar installations and high-voltage transmission corridors requiring autonomous thermal hotspot detection without grid uplink.',
    constraint: 'CONSTRAINTS: 24/7 SOLAR CYCLING + ZERO BANDWIDTH',
  },
];

const matrixItems = [
  { label: 'DUST', value: 'IP67 SEALED' },
  { label: 'HEAT', value: '+55°C PASSIVE' },
  { label: 'POWER', value: '9-36V ISOLATED' },
  { label: 'CONNECTIVITY', value: 'AIR-GAPPED 100%' },
  { label: 'COST', value: 'SUB-$100 BOM' },
  { label: 'REMOTE', value: 'FAIL-SAFE DUAL BOOT' },
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
            <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface">
              Built for India. Ready for the world.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            India is not simply a deployment market for Encepto. Its environmental and infrastructure realities are core engineering constraints that shape the system from the beginning.
          </p>
        </div>

        {/* 4 Real-World Environmental Grid Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {sectors.map((sector) => (
            <div
              key={sector.code}
              className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between"
            >
              <div className="flex flex-col gap-space-sm">
                <span className="font-mono-label text-mono-label text-secondary font-bold">
                  {sector.code}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">{sector.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {sector.desc}
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant font-mono-label text-[10px] text-on-surface-variant">
                {sector.constraint}
              </div>
            </div>
          ))}
        </div>

        {/* Monospace Telemetry Matrix */}
        <div className="bg-surface-container-high border border-outline-variant p-space-md">
          <div className="flex flex-wrap items-center justify-between gap-space-sm font-mono-label text-mono-label border-b border-outline-variant pb-space-xs">
            <span className="text-on-surface font-bold uppercase">
              PHYSICAL CONSTRAINT ENGINEERING MATRIX
            </span>
            <span className="text-secondary font-bold">SYSTEM LEVEL: HARDENED</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm pt-space-sm font-mono-label">
            {matrixItems.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase">{item.label}</span>
                <span className="text-body-md text-on-surface font-bold font-mono-metric">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Closing */}
        <div className="font-body-lg text-body-lg text-on-surface font-medium border-l-2 border-secondary pl-space-md">
          "What survives demanding conditions here should be ready for deployment anywhere."
        </div>
      </div>
    </section>
  );
};
