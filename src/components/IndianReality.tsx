import React from 'react';
import { MaterialIcon } from './MaterialIcon';

const conditions = [
  {
    icon: 'grain',
    title: 'Dust',
    spec: 'Scatter-invariant optics & IP67 sealed design',
  },
  {
    icon: 'thermostat',
    title: 'Heat',
    spec: 'Passive conduction up to 55°C ambient peaks',
  },
  {
    icon: 'bolt',
    title: 'Power Constraints',
    spec: '9–36V isolated regulation & brownout safety',
  },
  {
    icon: 'wifi_off',
    title: 'Limited Connectivity',
    spec: '100% autonomous, air-gapped on-device loops',
  },
];

export const IndianReality: React.FC = () => {
  return (
    <section className="w-full bg-surface border-b border-outline-variant/70 transition-colors">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-outline-variant/60">
          <div>
            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
              Field Resilience
            </span>
            <h2 className="text-xl lg:text-2xl font-semibold text-on-surface tracking-tight mt-1">
              Designed with real-world constraints in mind.
            </h2>
          </div>
          <p className="text-sm text-on-surface-variant max-w-md">
            Physical deployment requires hardware-aware software engineered to survive harsh, unpredictable operational conditions.
          </p>
        </div>

        {/* Compact 4-Column Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
          {conditions.map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/70 flex items-start gap-3.5 hover:border-secondary/60 transition-colors"
            >
              <div className="w-9 h-9 rounded bg-surface border border-outline-variant/60 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                <MaterialIcon name={item.icon} className="text-[20px]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-on-surface">
                  {item.title}
                </h3>
                <p className="text-xs text-on-surface-variant mt-1 leading-normal">
                  {item.spec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
