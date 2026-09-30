import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

const applications = [
  {
    domain: 'DOMAIN // 01',
    title: 'Agriculture',
    desc: 'Field perception, crop canopy sensing and foliar telemetry under dust and solar wash.',
    icon: 'agriculture',
    spec: 'CANOPY TELEMETRY · SUB-WATT',
    anchor: '/applications#agriculture',
  },
  {
    domain: 'DOMAIN // 02',
    title: 'Industrial',
    desc: 'High-speed anomaly detection, sub-pixel inspection and closed-loop machinery trips.',
    icon: 'precision_manufacturing',
    spec: 'LINE SPEED · SUB-12ms INTERLOCK',
    anchor: '/applications#industrial',
  },
  {
    domain: 'DOMAIN // 03',
    title: 'Infrastructure',
    desc: 'Continuous acoustic monitoring and structural fracture tracking on remote spans.',
    icon: 'reorder',
    spec: 'ACOUSTIC TRANSFORM · AIR-GAPPED',
    anchor: '/applications#infrastructure',
  },
  {
    domain: 'DOMAIN // 04',
    title: 'Energy',
    desc: 'Radiometric thermal runaway isolation on transformers and photovoltaic installations.',
    icon: 'solar_power',
    spec: 'RADIOMETRIC IR · 6kV ISOLATION',
    anchor: '/applications#energy',
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
          </div>
          <Link
            to="/applications"
            className="px-space-md py-space-xs bg-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider text-on-surface hover:border-secondary hover:text-secondary transition-colors font-bold flex-shrink-0"
          >
            Explore Applications Page →
          </Link>
        </div>

        {/* 4 Large Visual Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {applications.map((app) => (
            <Link
              key={app.title}
              to={app.anchor}
              className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-all group relative cursor-pointer"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-mono-label text-[10px] text-on-surface-variant">
                  <span className="text-secondary font-bold">{app.domain}</span>
                  <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <MaterialIcon name={app.icon} className="text-[20px]" />
                  </div>
                </div>
                
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                  {app.title}
                </h3>
                
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {app.desc}
                </p>
              </div>

              <div className="mt-space-lg pt-space-xs border-t border-outline-variant/60 flex items-center justify-between font-mono-label text-[10px]">
                <span className="text-on-surface-variant">{app.spec}</span>
                <span className="text-secondary font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
