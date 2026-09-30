import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// 6 Field Reality Constraints
interface ConstraintModule {
  id: string;
  name: string;
  tag: string;
  summary: string;
  spec: string;
  icon: string;
}

const constraintModules: ConstraintModule[] = [
  {
    id: 'dust',
    name: 'DUST',
    tag: 'ENV // PARTICULATE',
    summary: 'Abrasive airborne silicate grit fouls camera lenses within hours.',
    spec: 'IP67 SEALED // CONDUCTION COOLED',
    icon: 'grain',
  },
  {
    id: 'heat',
    name: 'HEAT',
    tag: 'THERMAL // 55°C',
    summary: 'Sustained outdoor peaks trigger processor throttling on consumer silicon.',
    spec: '-40°C TO +85°C SILICON RATED',
    icon: 'thermostat',
  },
  {
    id: 'power',
    name: 'POWER',
    tag: 'GRID // BROWNOUT',
    summary: 'Erratic grid lines, sudden brownouts and variable solar charge curves.',
    spec: '9-36V ISOLATED REGULATION',
    icon: 'bolt',
  },
  {
    id: 'connectivity',
    name: 'CONNECTIVITY',
    tag: 'NET // AIR-GAPPED',
    summary: 'Remote acreage and metal-clad plants experience total cellular blackouts.',
    spec: '100% LOCAL ON-DEVICE LOOPS',
    icon: 'wifi_off',
  },
  {
    id: 'cost',
    name: 'COST',
    tag: 'BOM // SCALABLE',
    summary: 'Deploying $5,000 server GPUs per sensor is commercially non-viable.',
    spec: 'SUB-$100 EDGE SILICON BOM',
    icon: 'payments',
  },
  {
    id: 'remote',
    name: 'REMOTE',
    tag: 'OPS // UNATTENDED',
    summary: 'Sites located far from technical support centers cannot be serviced manually.',
    spec: 'DUAL-BOOT WATCHDOG RECOVERY',
    icon: 'settings_remote',
  },
];

interface ApplicationDomain {
  id: string;
  num: string;
  title: string;
  positioning: string;
  icon: string;
  badge: string;
  hudVisual: {
    status: string;
    metrics: { label: string; val: string }[];
  };
  capabilities: { name: string; desc: string }[];
  techSpec: string;
}

const domains: ApplicationDomain[] = [
  {
    id: 'agriculture',
    num: '01',
    title: 'Agriculture',
    positioning: 'Precision field perception, crop canopy monitoring and foliar disease telemetry.',
    icon: 'agriculture',
    badge: 'CANOPY TELEMETRY · FIELD SENSING',
    hudVisual: {
      status: 'CANOPY SCAN ACTIVE // ENC-AG-YOLO',
      metrics: [
        { label: 'INFERENCE', val: '14.2ms' },
        { label: 'POWER DRAW', val: '2.8 Watts' },
        { label: 'OPTICAL FILTER', val: 'Dust Scatter Canceller' },
        { label: 'NETWORK', val: '100% Local Flash' },
      ],
    },
    capabilities: [
      { name: 'Crop Canopy Telemetry', desc: 'Real-time foliar coverage, leaf area index and canopy vigor mapping.' },
      { name: 'Blight & Nutrient Stress', desc: 'Sub-millimeter fungal spore and micro-nutrient deficiency detection.' },
      { name: 'Dust-Invariant Optics', desc: 'Algorithmic scatter cancellation compensating for heavy field dust.' },
      { name: 'Machinery Integration', desc: 'Direct mounting on tractors and pivots with isolated 12V vehicle power.' },
    ],
    techSpec: 'HARDWARE: Sub-5W Edge NPU · Wide-Voltage 9-36V DC · Conduction Cooled IP67',
  },
  {
    id: 'industrial',
    num: '02',
    title: 'Industrial',
    positioning: 'High-speed surface inspection, anomaly detection and deterministic safety trips.',
    icon: 'precision_manufacturing',
    badge: 'LINE-SPEED QA · SUB-12ms TRIP',
    hudVisual: {
      status: 'LINE SCAN 120 FPS // HARMONIC STABLE',
      metrics: [
        { label: 'THROUGHPUT', val: '2,400 PPM' },
        { label: 'INTERLOCK', val: '< 0.8ms Relay' },
        { label: 'VIBRATION TOL', val: '10G Continuous' },
        { label: 'BUS INTERFACE', val: 'Isolated CAN / OPC-UA' },
      ],
    },
    capabilities: [
      { name: 'Line-Speed Inspection', desc: 'Detects micro-cracks, stamping defects and weld porosity at 120 FPS.' },
      { name: 'Harmonic Shock Invariance', desc: 'Filters 10G mechanical vibration through fused accelerometer EKFs.' },
      { name: 'Sub-12ms Interlocks', desc: 'Deterministic hardware relay actuation protecting downstream tooling.' },
      { name: 'Zero-Copy Direct DMA', desc: 'Bypasses operating system overhead for jitter-free optical intake.' },
    ],
    techSpec: 'HARDWARE: Hardware ISP · Optocoupled Relays · Industrial Isolated CAN Bus',
  },
  {
    id: 'infrastructure',
    num: '03',
    title: 'Infrastructure',
    positioning: 'Autonomous acoustic and strain monitoring across bridges, highways and railway corridors.',
    icon: 'reorder',
    badge: 'CIVIL HEALTH · AIR-GAPPED SPANS',
    hudVisual: {
      status: 'ACOUSTIC TRANSFORM // 20 kHz ACTIVE',
      metrics: [
        { label: 'SAMPLING', val: '20 kHz FFT' },
        { label: 'BATTERY BUFFER', val: 'Solar 30-Day Reserve' },
        { label: 'CHASSIS', val: 'IP67 Sealed Aluminium' },
        { label: 'UPTIME', val: '99.98% Autonomous' },
      ],
    },
    capabilities: [
      { name: 'Acoustic Fracture Detection', desc: 'Continuous FFT transform kernels capturing subsurface fatigue cracks.' },
      { name: 'Structural Strain Tracking', desc: 'High-precision micro-strain logging on girder bridges and spans.' },
      { name: 'Solar-Buffered Operation', desc: 'Ultra-low-power idle modes designed for seasonal monsoon conditions.' },
      { name: 'Remote Air-Gapped Telemetry', desc: 'On-device state classification without reliance on cellular towers.' },
    ],
    techSpec: 'HARDWARE: 20 kHz Acoustic ADC · Wide-Temperature Silicon (-40°C to +85°C)',
  },
  {
    id: 'energy',
    num: '04',
    title: 'Energy',
    positioning: 'Radiometric thermal runaway isolation on transformers and photovoltaic installations.',
    icon: 'solar_power',
    badge: 'RADIOMETRIC IR · 6kV SURGE SHIELD',
    hudVisual: {
      status: 'LWIR THERMOGRAPHY // 0.05°C NETD',
      metrics: [
        { label: 'THERMAL RES', val: '0.05°C NETD' },
        { label: 'SURGE SHIELD', val: '6kV Optocoupled' },
        { label: 'RANGE', val: '50m Optical Standoff' },
        { label: 'FAIL-SAFE', val: 'Dry-Contact Trip' },
      ],
    },
    capabilities: [
      { name: 'Radiometric Thermography', desc: 'Calibrated uncooled thermopiles tracking transformer hot spots.' },
      { name: 'Thermal Runaway Prediction', desc: 'Predicts localized insulation breakdown before catastrophic ignition.' },
      { name: '6kV Electrical Isolation', desc: 'Surge-shielded power stages resisting high-voltage substation noise.' },
      { name: 'Solar Diurnal Balancing', desc: 'Compensates for outdoor solar irradiance swings across desert arrays.' },
    ],
    techSpec: 'HARDWARE: LWIR Radiometric Array · 6kV Galvanic Isolation · Dry-Contact Relay',
  },
];

// 6 Engineering Approach Steps
const approachSteps = [
  { step: '01', name: 'AUDIT', desc: 'Audit physical dust, heat, vibration and power realities.' },
  { step: '02', name: 'CONSTRAIN', desc: 'Lock strict wattage, silicon BOM and latency bounds.' },
  { step: '03', name: 'SENSE', desc: 'Specify optical, thermal, acoustic and IMU sensor inputs.' },
  { step: '04', name: 'BUILD', desc: 'Train and quantize INT8 models for target edge silicon.' },
  { step: '05', name: 'STRESS-TEST', desc: 'Subject prototypes to thermal chambers and power sags.' },
  { step: '06', name: 'COMMENCE', desc: 'Field flashing with zero-downtime dual-boot reliability.' },
];

export const ApplicationsPage: React.FC = () => {
  const [activeConstraintId, setActiveConstraintId] = useState<string>('dust');
  const activeConstraint = constraintModules.find((c) => c.id === activeConstraintId) || constraintModules[0];

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* ========================================================================= */}
      {/* SECTION 01 — APPLICATIONS HERO                                            */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant pb-space-sm font-mono-label text-mono-label text-on-surface-variant">
            <div className="flex items-center gap-space-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="tracking-widest uppercase font-bold text-secondary">01 / APPLICATIONS</span>
              <span>// DEPLOYMENT SCOPE</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span className="hidden sm:inline-block">TARGETS: AGRICULTURE · INDUSTRY · INFRA · ENERGY</span>
              <span className="bg-surface-container-high px-space-xs py-0.5 text-on-surface font-bold">
                FIELD-DEPLOYABLE
              </span>
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-xs">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Where intelligence meets <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">the real world.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Encepto applies embedded AI, computer vision, intelligent sensing and vision-language models across demanding physical environments.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center gap-space-sm">
                <Link
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                  to="/contact"
                >
                  <span>Start a Conversation</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
                <Link
                  className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
                  to="/technology"
                >
                  Explore Technology
                </Link>
              </div>
            </div>
          </div>

          {/* Domain Quick Jump Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs pt-space-sm font-mono-label">
            {domains.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="bg-surface-container p-space-sm border border-outline-variant flex items-center justify-between hover:border-secondary transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MaterialIcon name={d.icon} className="text-[18px] text-secondary" />
                  <span className="text-body-sm font-bold uppercase">{d.title}</span>
                </div>
                <span className="text-[10px] text-secondary font-bold">↓</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — FOUR VISUALLY DOMINANT DOMAINS                               */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              02 / DOMAIN PORTFOLIO
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Engineered for physical systems.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every domain leverages our modular stack tailored to specific environmental constraints.
            </p>
          </div>

          {/* 4 Large Domain Sections */}
          <div className="flex flex-col gap-space-xl">
            {domains.map((domain) => (
              <div
                key={domain.id}
                id={domain.id}
                className="bg-surface border border-outline-variant p-space-md lg:p-space-lg flex flex-col gap-space-md transition-colors"
              >
                {/* Domain Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-sm border-b border-outline-variant pb-space-sm">
                  <div className="flex items-start gap-space-md">
                    <div className="w-12 h-12 bg-surface-container border border-outline-variant flex items-center justify-center font-bold text-secondary flex-shrink-0">
                      <MaterialIcon name={domain.icon} className="text-[24px]" />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-label text-[10px] text-secondary font-bold">
                          DOMAIN // {domain.num}
                        </span>
                        <span className="text-on-surface-variant text-[10px] font-mono-label uppercase">
                          // {domain.badge}
                        </span>
                      </div>
                      <h3 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold">
                        {domain.title}
                      </h3>
                      <p className="font-body-md text-body-md text-secondary font-bold mt-0.5">
                        {domain.positioning}
                      </p>
                    </div>
                  </div>
                </div>

                {/* HUD Telemetry Visual Card */}
                <div className="bg-surface-container p-space-sm border border-outline-variant font-mono-label text-[11px]">
                  <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                    <span className="text-secondary font-bold uppercase">{domain.hudVisual.status}</span>
                    <span className="text-on-surface-variant">OPERATIONAL METRICS</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs pt-space-xs text-center font-bold">
                    {domain.hudVisual.metrics.map((m) => (
                      <div key={m.label} className="bg-surface p-2 border border-outline-variant">
                        <span className="text-[9px] text-on-surface-variant block uppercase font-normal">{m.label}</span>
                        <span className="text-[12px] text-on-surface font-mono-metric">{m.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4 Capabilities Grid */}
                <div className="flex flex-col gap-space-xs">
                  <span className="font-mono-label text-[10px] text-on-surface uppercase font-bold tracking-wider">
                    TARGET CAPABILITIES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-xs">
                    {domain.capabilities.map((cap) => (
                      <div
                        key={cap.name}
                        className="bg-surface-container-low border border-outline-variant p-space-sm flex flex-col justify-between"
                      >
                        <div className="flex flex-col gap-1">
                          <h4 className="font-headline-md text-body-md text-on-surface font-bold">
                            {cap.name}
                          </h4>
                          <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
                            {cap.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hardware Spec Strip */}
                <div className="pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1">
                  <span>{domain.techSpec}</span>
                  <Link to="/contact" className="text-secondary font-bold hover:underline flex items-center gap-1">
                    <span>Discuss Domain Specifications</span>
                    <MaterialIcon name="arrow_forward" className="text-[12px]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — BUILT FOR DIFFICULT ENVIRONMENTS (VISUAL CONSTRAINT GRID)    */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="constraints">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                03 / FIELD REALITY
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Built for Difficult Environments
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Real-world physical constraints are foundational design inputs rather than afterthought patches.
            </p>
          </div>

          {/* Visual Constraint Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-xs font-mono-label">
            {constraintModules.map((c) => {
              const isSelected = activeConstraintId === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveConstraintId(c.id)}
                  className={`p-space-sm border flex flex-col justify-between text-left transition-all min-h-[140px] ${
                    isSelected
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-surface-container text-on-surface border-outline-variant hover:border-on-surface'
                  }`}
                  type="button"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[10px] font-bold ${isSelected ? 'text-secondary-container' : 'text-secondary'}`}>
                      {c.tag}
                    </span>
                    <MaterialIcon name={c.icon} className="text-[18px]" />
                  </div>
                  <span className="font-display-hero text-headline-md font-bold uppercase my-1">
                    {c.name}
                  </span>
                  <span className={`text-[9px] font-bold ${isSelected ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>
                    {c.spec}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Constraint Detail Box */}
          <div className="bg-surface-container p-space-md border border-outline-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm font-mono-label text-body-sm">
            <div className="flex items-center gap-space-sm">
              <span className="w-2.5 h-2.5 bg-secondary inline-block"></span>
              <span className="font-bold text-on-surface">{activeConstraint.name}:</span>
              <span className="text-on-surface-variant">{activeConstraint.summary}</span>
            </div>
            <span className="text-secondary font-bold text-[11px] flex-shrink-0">
              INVARIANT: {activeConstraint.spec}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — APPLICATION APPROACH TIMELINE                                */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              04 / HOW WE WORK
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Deployment Progression
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-xs font-mono-label">
            {approachSteps.map((step) => (
              <div
                key={step.step}
                className="bg-surface border border-outline-variant p-space-sm flex flex-col justify-between min-h-[120px]"
              >
                <div>
                  <span className="text-[10px] text-secondary font-bold block">{step.step}</span>
                  <h4 className="font-headline-md text-body-md text-on-surface font-bold mt-1 uppercase">
                    {step.name}
                  </h4>
                  <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — FINAL CTA                                                    */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container transition-colors">
        <div className="max-w-[1440px] mx-auto border border-outline-variant bg-surface p-space-md lg:p-space-xl flex flex-col items-center text-center gap-space-md transition-colors">
          <div className="flex items-center gap-space-xs font-mono-label text-mono-label text-secondary uppercase font-bold">
            <span className="w-2 h-2 bg-secondary inline-block"></span>
            <span>NEXT STEPS</span>
          </div>

          <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface max-w-3xl">
            Have a problem worth solving?
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Let's explore what we can build together.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-space-sm pt-space-xs">
            <Link
              className="px-space-xl py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-widest hover:bg-surface-container-highest hover:text-on-surface transition-all border border-primary flex items-center gap-space-xs font-bold"
              to="/contact"
            >
              <span>Start a Conversation</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
            <Link
              className="px-space-lg py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-widest hover:bg-surface-container-highest transition-colors font-bold"
              to="/product"
            >
              Explore Products &amp; Offerings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
