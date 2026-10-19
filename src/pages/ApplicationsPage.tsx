import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

interface EnvironmentalConstraint {
  id: string;
  name: string;
  summary: string;
  solution: string;
  icon: string;
}

const constraints: EnvironmentalConstraint[] = [
  {
    id: 'dust',
    name: 'Dust & Particulates',
    summary: 'Abrasive airborne dust and soil fouling camera lenses and optical sensors.',
    solution: 'IP67 sealed enclosure with algorithmic dust scatter cancellation.',
    icon: 'grain',
  },
  {
    id: 'heat',
    name: 'Extreme Heat',
    summary: 'Outdoor temperatures exceeding 50°C causing computer processor overheating.',
    solution: 'Passive conduction chassis rated for -40°C to +85°C industrial silicon.',
    icon: 'thermostat',
  },
  {
    id: 'power',
    name: 'Unstable Power',
    summary: 'Frequent power brownouts, voltage spikes and variable solar inputs.',
    solution: '9–36V isolated power supplies with brownout-safe state preservation.',
    icon: 'bolt',
  },
  {
    id: 'connectivity',
    name: 'No Internet / Air-Gapped',
    summary: 'Remote acreage and heavy steel plant buildings with zero cellular signal.',
    solution: '100% on-device AI execution with no cloud connection required.',
    icon: 'wifi_off',
  },
  {
    id: 'cost',
    name: 'Hardware Economics',
    summary: 'Expensive server GPUs are commercially non-viable for widespread deployment.',
    solution: 'Quantized neural models compiled for affordable sub-$100 edge silicon chips.',
    icon: 'payments',
  },
  {
    id: 'remote',
    name: 'Unattended Operation',
    summary: 'Remote locations that cannot be serviced manually by technicians.',
    solution: 'Dual-boot firmware with automatic hardware watchdog recovery.',
    icon: 'settings_remote',
  },
];

interface ApplicationDomain {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  badge: string;
  capabilities: { name: string; desc: string }[];
  hardwareSummary: string;
}

const domains: ApplicationDomain[] = [
  {
    id: 'agriculture',
    title: 'Agriculture',
    tagline: 'Precision field sensing, crop canopy tracking and automated disease detection.',
    icon: 'agriculture',
    badge: 'Field Sensing & Canopy Health',
    capabilities: [
      { name: 'Crop Canopy Tracking', desc: 'Real-time foliage monitoring and canopy growth mapping directly from machinery.' },
      { name: 'Early Blight Detection', desc: 'Identifies fungal blights, nutrient stress and leaf anomalies before pests spread.' },
      { name: 'Dust-Invariant Vision', desc: 'Custom optical algorithms that cancel airborne dust and bright solar glare.' },
      { name: 'Tractor & Pivot Mounting', desc: 'Direct installation on agricultural pivots and tractors with 12V vehicle power.' },
    ],
    hardwareSummary: 'Low-power edge chip &bull; 9-36V vehicle power regulation &bull; Conduction-cooled IP67 enclosure',
  },
  {
    id: 'industrial',
    title: 'Industrial Manufacturing',
    tagline: 'Line-speed quality inspection, defect detection and instant safety shutoffs.',
    icon: 'precision_manufacturing',
    badge: '120 FPS Line QA & Safety',
    capabilities: [
      { name: 'Sub-Pixel Inspection', desc: 'Detects microscopic cracks, stamping defects and weld porosity at conveyor line speed.' },
      { name: 'Vibration Invariance', desc: 'Filters out heavy machine vibration up to 10G using fused motion sensors.' },
      { name: 'Sub-12ms Safety Trips', desc: 'Instant electrical relay trips to stop equipment before tool damage or injury occurs.' },
      { name: 'Zero-Copy Image Processing', desc: 'Bypasses operating system overhead to process camera feeds with zero lag.' },
    ],
    hardwareSummary: 'High-speed camera sensor &bull; Optically isolated relays &bull; Industrial CAN bus interface',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    tagline: 'Continuous acoustic monitoring and structural fracture tracking on remote spans.',
    icon: 'reorder',
    badge: 'Civil Asset Telemetry',
    capabilities: [
      { name: 'Acoustic Crack Detection', desc: 'High-frequency acoustic sensors capturing subsurface metal and concrete fatigue.' },
      { name: 'Micro-Strain Logging', desc: 'Continuous expansion and structural joint strain tracking on girder bridges.' },
      { name: 'Solar-Buffered Autonomy', desc: 'Ultra-low-power sleep cycles designed to operate through cloudy monsoon seasons.' },
      { name: 'Air-Gapped Telemetry', desc: 'Analyzes structural safety on-site without needing cell phone tower reception.' },
    ],
    hardwareSummary: '20 kHz acoustic sensing &bull; Wide-temperature silicon (-40°C to +85°C) &bull; Solar battery buffer',
  },
  {
    id: 'energy',
    title: 'Energy & Power Utilities',
    tagline: 'Thermal runaway isolation and hot spot monitoring for transformers and solar plants.',
    icon: 'solar_power',
    badge: 'Radiometric IR & Grid Safety',
    capabilities: [
      { name: 'Thermal Hotspot Tracking', desc: 'Calibrated radiometric infrared cameras monitoring electrical transformer windings.' },
      { name: 'Runaway Breakdown Prediction', desc: 'Detects localized insulation failure hours before catastrophic fire or explosion.' },
      { name: '6kV Electrical Isolation', desc: 'Surge-shielded power stages resisting high-voltage substation electromagnetic noise.' },
      { name: 'Solar Array Health', desc: 'Scans utility-scale photovoltaic panels for damaged cells and dirt accumulation.' },
    ],
    hardwareSummary: 'Radiometric infrared array &bull; 6kV galvanic electrical isolation &bull; Fail-safe dry contact trip',
  },
];

export const ApplicationsPage: React.FC = () => {
  const [activeConstraintId, setActiveConstraintId] = useState<string>('dust');
  const activeConstraint = constraints.find((c) => c.id === activeConstraintId) || constraints[0];

  return (
    <div className="flex flex-col w-full text-slate-900 dark:text-slate-100 antialiased">
      
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Real-World Applications
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              AI Engineered for <br />
              <span className="text-blue-600 dark:text-blue-400">Demanding Operational Realities.</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Encepto brings intelligent vision and sensing to industrial, agricultural and energy sites where ordinary commercial electronics and cloud servers cannot survive.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all"
              >
                Discuss Your Deployment
              </Link>
              <Link
                to="/technology"
                className="px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-colors"
              >
                Explore Technology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Dedicated Domain Sections */}
      <section className="w-full bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Industry Domains
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
              Targeted Industrial Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
              Each domain is supported by proven edge sensing architectures, optimized algorithms and hardened physical design.
            </p>
          </div>

          <div className="space-y-12">
            {domains.map((dom) => (
              <div
                key={dom.id}
                id={dom.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xs hover:border-blue-500/40 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <MaterialIcon name={dom.icon} className="text-[28px]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {dom.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
                        {dom.title}
                      </h3>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="self-start px-5 py-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <span>Discuss {dom.title} Use Case</span>
                    <MaterialIcon name="arrow_forward" className="text-[14px]" />
                  </Link>
                </div>

                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-6">
                  {dom.tagline}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
                  {dom.capabilities.map((cap) => (
                    <div key={cap.name} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{cap.name}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{cap.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span dangerouslySetInnerHTML={{ __html: dom.hardwareSummary }}></span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium hidden sm:inline">100% Edge Processing</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Field Reality Constraints Section */}
      <section className="w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Challenging Environments
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mt-1.5">
              Engineered for Hostile Physical Conditions
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
              We design software and sensor architectures with the explicit assumption that field conditions are hostile, noisy and unpredictable.
            </p>
          </div>

          {/* 6 Constraint Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {constraints.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveConstraintId(c.id)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  activeConstraintId === c.id
                    ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <div className="w-8 h-8 rounded bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
                  <MaterialIcon name={c.icon} className="text-[18px]" />
                </div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block">
                  {c.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active Constraint Detail Panel */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <MaterialIcon name={activeConstraint.icon} className="text-[20px]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {activeConstraint.name}
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Environmental Hurdle</p>
                </div>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">The Real-World Challenge</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeConstraint.summary}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Encepto's Engineering Solution</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeConstraint.solution}
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
              to="/technology"
              className="px-6 py-3.5 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-100 transition-colors"
            >
              Explore Technology
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ApplicationsPage;
