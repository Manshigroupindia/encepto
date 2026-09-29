import React from 'react';
import { Link } from 'react-router-dom';

const applications = [
  {
    domain: 'DOMAIN // AGRI-01',
    badge: 'CANOPY TELEMETRY',
    title: 'Precision Agronomy & Crop Sensing',
    desc: 'Edge camera nodes mounted on tractors or field poles classifying fungal blight, micro-nutrient deficiencies, and soil moisture boundaries locally without streaming multi-gigabyte video back to cloud servers.',
    metrics: [
      { label: 'MODEL', val: 'ENC-AG-YOLO' },
      { label: 'LATENCY', val: '14.2ms' },
      { label: 'POWER', val: '2.8W' },
    ],
  },
  {
    domain: 'DOMAIN // IND-02',
    badge: 'HIGH-SPEED QA',
    title: 'Industrial High-Speed Anomaly Detection',
    desc: 'Sub-millimeter weld integrity verification and stamping defect isolation at 2,400 parts-per-minute. Fuses high-speed optical vision with 3-axis accelerometer readings to detect mechanical bearing degradation.',
    metrics: [
      { label: 'THROUGHPUT', val: '40 PPM' },
      { label: 'ACCURACY', val: '99.7% F1' },
      { label: 'INTERFACE', val: 'OPC-UA / CAN' },
    ],
  },
  {
    domain: 'DOMAIN // INFRA-03',
    badge: 'CIVIL HEALTH',
    title: 'Structural & Railway Defect Monitoring',
    desc: 'Solar-powered vibration and strain perception units deployed on girder bridges and rail corridors. Runs continuous acoustic frequency transform kernels to detect sub-surface rail fractures prior to catastrophic failure.',
    metrics: [
      { label: 'SAMPLING', val: '20 kHz ACOUSTIC' },
      { label: 'UPTIME', val: '99.98%' },
      { label: 'ALERT TRIPPING', val: '< 50ms' },
    ],
  },
  {
    domain: 'DOMAIN // ENG-04',
    badge: 'THERMAL RUNAWAY',
    title: 'Substation & Grid Micro-Monitoring',
    desc: 'Infrared thermography coupled with spatial visual tracking on distribution transformers. Predicts insulation breakdown and localized arcing events under high-ambient solar loading.',
    metrics: [
      { label: 'THERMAL RES', val: '0.05°C NETD' },
      { label: 'SURGE SHIELD', val: '6kV ISOLATION' },
      { label: 'RANGE', val: '50 METERS' },
    ],
  },
];

export const Applications: React.FC = () => {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="homepage-applications">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              05 / APPLICATION DOMAINS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Technology built across real-world domains.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Engineering implementations targeting fundamental structural bottlenecks, with measured specs and clean telemetry data.
            </p>
          </div>
          <Link
            to="/applications"
            className="px-space-md py-space-xs bg-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider text-on-surface hover:border-secondary hover:text-secondary transition-colors font-bold flex-shrink-0"
          >
            Explore Applications Page →
          </Link>
        </div>

        {/* 4 Showcase Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
          {applications.map((app) => (
            <div
              key={app.domain}
              className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-mono-label text-body-sm text-on-surface-variant">
                  <span className="text-secondary font-bold">{app.domain}</span>
                  <span>{app.badge}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">{app.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {app.desc}
                </p>
              </div>

              <div className="mt-space-md pt-space-sm border-t border-outline-variant grid grid-cols-3 gap-space-xs font-mono-label text-[11px]">
                {app.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="text-on-surface-variant block">{m.label}</span>
                    <span className="text-on-surface font-bold font-mono-metric text-[13px]">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
