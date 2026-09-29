import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// 6 Field Reality Constraints
interface ConstraintModule {
  id: string;
  name: string;
  tag: string;
  statement: string;
  mitigation: string;
  spec: string;
}

const constraintModules: ConstraintModule[] = [
  {
    id: 'dust',
    name: 'DUST',
    tag: 'CONSTRAINT // 01',
    statement: 'Abrasive airborne particulate and fine silicate dust coat optical surfaces and clog conventional cooling vents within hours of exposure in field environments.',
    mitigation: 'Encepto designs sealed conduction-cooled enclosures paired with algorithmic optical de-scattering filters that digitally preserve spatial geometry without mechanical wipers.',
    spec: 'INVARIANT: CONDUCTION COOLED // ZERO OPEN AIRWAYS',
  },
  {
    id: 'heat',
    name: 'HEAT',
    tag: 'CONSTRAINT // 02',
    statement: 'Sustained outdoor thermal peaks trigger severe processor throttling on standard silicon, introducing unpredictable latency spikes and pipeline failures.',
    mitigation: 'Workloads are mapped strictly to wide-temperature industrial processors mounted to passive aluminum thermal dissipation chassis.',
    spec: 'INVARIANT: PASSIVE CONDUCTION // THERMAL THROTTLE IMMUNITY',
  },
  {
    id: 'power',
    name: 'POWER VARIABILITY',
    tag: 'CONSTRAINT // 03',
    statement: 'Erratic grid lines, sudden brownouts, and intermittent solar battery discharge cycles cause sudden voltage drops and system resets.',
    mitigation: 'Ultra-wide DC-DC isolated regulation combined with hardware atomic state journals prevents firmware corruption during abrupt power loss.',
    spec: 'INVARIANT: BROWNOUT-SAFE ATOMIC COMMITS',
  },
  {
    id: 'connectivity',
    name: 'UNRELIABLE CONNECTIVITY',
    tag: 'CONSTRAINT // 04',
    statement: 'Remote fields, deep valleys and metal-clad industrial structures frequently experience total cellular and broadband blackouts.',
    mitigation: '100% of spatial perception, multi-sensor calibration and automated decision logic executes autonomously on-silicon without cloud umbilical cords.',
    spec: 'INVARIANT: 100% AIR-GAPPED DECISION LOOPS',
  },
  {
    id: 'cost',
    name: 'COST CONSTRAINTS',
    tag: 'CONSTRAINT // 05',
    statement: 'Deploying expensive enterprise server racks is economically unviable across multi-acre fields or distributed physical assets.',
    mitigation: 'Aggressive quantization down to INT8 and INT4 precision allows complex visual and reasoning models to operate on power-efficient commercial edge SoCs.',
    spec: 'INVARIANT: PRAGMATIC EDGE SILICON BOM',
  },
  {
    id: 'remote',
    name: 'REMOTE LOCATIONS',
    tag: 'CONSTRAINT // 06',
    statement: 'Sites located far from technical support centers cannot be serviced manually when unexpected software halts or boot faults occur.',
    mitigation: 'Dual-redundant flash partitions and independent hardware watchdog coprocessors autonomously self-heal halted threads or revert failed updates.',
    spec: 'INVARIANT: AUTONOMOUS DUAL-BOOT RECOVERY',
  },
];

// Application approach steps
const approachSteps = [
  {
    step: '01',
    name: 'Understand Environment',
    desc: 'Audit the real-world operating reality: ambient dust, thermal envelope, mounting vibration, solar exposure and available electrical power.',
  },
  {
    step: '02',
    name: 'Identify Constraints',
    desc: 'Establish non-negotiable physical bounds: maximum wattage, BOM cost targets, zero-connectivity requirements and remote physical access.',
  },
  {
    step: '03',
    name: 'Select Sensing',
    desc: 'Specify optical wavelengths, thermal radiometric sensors, inertial probes and acoustic microphones that capture ground-truth state data.',
  },
  {
    step: '04',
    name: 'Build Intelligence',
    desc: 'Train, quantize and tune compact neural blocks and contextual vision-language reasoning models tailored directly for target edge silicon.',
  },
  {
    step: '05',
    name: 'Validate in Context',
    desc: 'Subject physical prototypes to simulated thermal stress, dust chamber exposure and power voltage fluctuations in rigorous test rigs.',
  },
  {
    step: '06',
    name: 'Deploy & Evolve',
    desc: 'Deploy resilient autonomous nodes to the field, capturing non-sensitive telemetry checkpoints that compound into reusable engineering IP.',
  },
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
              <span className="tracking-widest uppercase font-bold text-secondary">01 / APPLICATION DOMAINS</span>
              <span>// PHYSICAL DEPLOYMENT SCOPE</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span className="hidden sm:inline-block">SCOPE: UNCONTROLLED PHYSICAL DOMAINS</span>
              <span className="bg-surface-container-high px-space-xs py-0.5 text-on-surface font-bold">
                CORE STACK DEPLOYABLE
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
                Encepto applies embedded AI, computer vision, intelligent sensing and vision-language technologies to real-world environments.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center gap-space-sm">
                <Link
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                  to="/contact"
                >
                  <span>Talk to Encepto</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
                <Link
                  className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
                  to="/technology"
                >
                  Explore Technology
                </Link>
              </div>
              <span className="font-mono-label text-[10px] text-on-surface-variant">
                TARGETED DOMAINS · DOMAIN-INVARIANT SENSING STACK
              </span>
            </div>
          </div>

          {/* Large Hero Technical Visual: Physical Environment & Sensor Ingestion Blueprint */}
          <div className="mt-space-md w-full bg-surface-container-lowest border border-outline-variant p-space-sm lg:p-space-md relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

            <div className="relative z-10 flex flex-col gap-space-md font-mono-label">
              <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                <span className="text-secondary font-bold flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                  FIELD DEPLOYMENT MATRIX &amp; PHYSICAL SENSOR INGESTION
                </span>
                <span className="text-on-surface-variant">SILICON TELEMETRY: DETERMINISTIC RTOS</span>
              </div>

              {/* 4 Application Domain Preview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-xs">
                {/* Domain 01: Agriculture */}
                <a
                  href="#agriculture"
                  className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group cursor-pointer"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-secondary font-bold">SECTOR 01</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                      AGRICULTURE
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Variable solar angles, dust storms, expansive acreage and remote field power sags.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 text-[10px] text-on-surface-variant flex justify-between items-center">
                    <span>CANOPY &amp; SENSING</span>
                    <span className="text-secondary font-bold">VIEW ↓</span>
                  </div>
                </a>

                {/* Domain 02: Industrial */}
                <a
                  href="#industrial"
                  className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group cursor-pointer"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-secondary font-bold">SECTOR 02</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                      INDUSTRIAL
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Physical stamping processes, 10G harmonic shock, thermal radiant heat and factory noise.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 text-[10px] text-on-surface-variant flex justify-between items-center">
                    <span>INSPECTION &amp; AUTOMATION</span>
                    <span className="text-secondary font-bold">VIEW ↓</span>
                  </div>
                </a>

                {/* Domain 03: Infrastructure */}
                <a
                  href="#infrastructure"
                  className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group cursor-pointer"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-secondary font-bold">SECTOR 03</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                      INFRASTRUCTURE
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Bridge spans, rail lines, highway corridors and deep unmonitored physical assets.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 text-[10px] text-on-surface-variant flex justify-between items-center">
                    <span>MONITORING &amp; SENSING</span>
                    <span className="text-secondary font-bold">VIEW ↓</span>
                  </div>
                </a>

                {/* Domain 04: Energy */}
                <a
                  href="#energy"
                  className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group cursor-pointer"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-secondary font-bold">SECTOR 04</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                      ENERGY
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Substation transformers, solar fields, high-voltage surges and off-grid reliability.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 text-[10px] text-on-surface-variant flex justify-between items-center">
                    <span>RADIOMETRIC &amp; GRID</span>
                    <span className="text-secondary font-bold">VIEW ↓</span>
                  </div>
                </a>
              </div>

              {/* Bottom Invariant Strip */}
              <div className="pt-space-xs border-t border-outline-variant text-[10px] text-on-surface-variant flex flex-wrap justify-between gap-2">
                <span>EXECUTION: LOCAL SILICON (NPU/DSP)</span>
                <span>BUS INTERFACES: MIPI CSI-2 · CAN BUS · MODBUS RTU · SPI</span>
                <span className="text-secondary font-bold">ZERO CLOUD STREAMING DEPENDENCY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — APPLICATIONS OVERVIEW                                        */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              02 / DOMAIN PORTFOLIO
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Technology applied across real environments.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Encepto's modular intelligence stack is co-designed across silicon and software to address physical bottlenecks in four major application domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-2">
                <span className="font-mono-label text-[10px] text-secondary font-bold">DOMAIN // 01</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Agriculture</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Field perception, crop canopy monitoring, and environmental telemetry deployed directly on agricultural machinery and remote poles.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-secondary font-bold">
                KEY REQUIREMENT: SOLAR &amp; DUST INVARIANCE
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-2">
                <span className="font-mono-label text-[10px] text-secondary font-bold">DOMAIN // 02</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Industrial</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  High-speed visual inspection, machinery anomaly detection, and deterministic safety interlocks in demanding factory environments.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-secondary font-bold">
                KEY REQUIREMENT: SUB-12ms CLOSED LOOP
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-2">
                <span className="font-mono-label text-[10px] text-secondary font-bold">DOMAIN // 03</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Infrastructure</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Long-term structural monitoring, acoustic fracture detection, and asset intelligence across bridge spans, highways, and railway corridors.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-secondary font-bold">
                KEY REQUIREMENT: ZERO-MAINTENANCE SOLAR UPTIME
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-2">
                <span className="font-mono-label text-[10px] text-secondary font-bold">DOMAIN // 04</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Energy</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Radiometric thermal inspection, insulation breakdown prediction, and localized arcing detection on substations and power distribution lines.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-secondary font-bold">
                KEY REQUIREMENT: 6kV SURGE ISOLATION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — AGRICULTURE (EDITORIAL ALTERNATING LAYOUT: VISUAL LEFT)       */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="agriculture">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
            {/* Visual Column (Left) */}
            <div className="lg:col-span-6 bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between relative overflow-hidden group">
              <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px]">
                <span className="text-secondary font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                  FIELD PERCEPTION &amp; CANOPY HUD
                </span>
                <span className="text-on-surface-variant">MODALITY: MULTISPECTRAL OPTICAL + SOIL PROBES</span>
              </div>

              {/* Technical Agriculture Blueprint Schematic */}
              <div className="relative bg-surface-container-highest min-h-[260px] my-space-md p-space-md border border-outline-variant flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

                <div className="relative z-10 flex justify-between font-mono-label text-[11px]">
                  <span className="bg-surface/90 px-2 py-1 border border-outline-variant text-secondary font-bold">
                    FIELD_QUADRANT // AG-SECTOR-7B
                  </span>
                  <span className="bg-surface/90 px-2 py-1 border border-outline-variant text-on-surface-variant">
                    SOLAR IRRADIANCE: HIGH (COMPENSATING)
                  </span>
                </div>

                {/* Overlay Spatial Detection Bounding Vectors */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-space-sm py-space-xs">
                  <div className="border border-secondary bg-secondary/10 p-2">
                    <span className="bg-secondary text-on-secondary px-1 text-[9px] font-mono-label uppercase font-bold block w-fit">
                      PERCEPTION: CROP ROW CANOPY
                    </span>
                    <div className="font-mono-label text-[11px] text-on-surface mt-1 flex justify-between">
                      <span>SPECTRAL BAND: NIR/VIS</span>
                      <span className="text-secondary font-bold">VARIANCE: BALANCED</span>
                    </div>
                  </div>

                  <div className="border border-outline bg-surface/80 p-2 sm:ml-auto">
                    <span className="bg-primary text-on-primary px-1 text-[9px] font-mono-label uppercase font-bold block w-fit">
                      DE-SCATTER: SILICATE DUST
                    </span>
                    <div className="font-mono-label text-[11px] text-on-surface mt-1 flex justify-between">
                      <span>FILTER: ACTIVE</span>
                      <span className="text-on-surface-variant">COHERENCE: 99.4%</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex justify-between font-mono-label text-[10px] text-on-surface-variant border-t border-outline-variant/60 pt-2">
                  <span>VEGETATION MATRIX: REAL-TIME EDGE TENSOR</span>
                  <span>POWER: &lt; 3W DUAL-CORE NPU</span>
                </div>
              </div>

              {/* Bottom Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-space-xs font-mono-label text-[11px] border-t border-outline-variant/60 pt-space-xs">
                <div>
                  <span className="text-on-surface-variant block">EXPOSURE:</span>
                  <span className="text-on-surface font-bold">DYNAMIC WDR</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block">DUST FILTER:</span>
                  <span className="text-secondary font-bold">ALGORITHMIC</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block">UPTIME:</span>
                  <span className="text-on-surface font-bold">AIR-GAPPED</span>
                </div>
              </div>
            </div>

            {/* Editorial Description (Right) */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                  APPLICATION DOMAIN // 01
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                  Agriculture
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-2">
                  Agricultural fields introduce changing sun angles, abrasive dust, distance, and complete cellular blackouts. Encepto applies embedded vision and intelligent sensing to observe crops and field conditions locally where the machinery operates.
                </p>

                {/* 4 Pillars of Agriculture Application */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-sm">
                  <div className="bg-surface-container-low p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Field Perception</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Optical and multispectral cameras capture crop canopy geometry and row structure, adapting dynamically to midday sunlight and shadows.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Intelligent Sensing</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Combines optical frames with ambient soil moisture, temperature, and micro-climate telemetry into an integrated state space.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Environmental Monitoring</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Continuous localized observation tracks early foliar blight patterns, hydration stresses, and field variations over seasonal cycles.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Remote Deployment</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Low-power, passively-cooled units mount directly to tractor booms or remote poles, functioning indefinitely on solar buffers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-col gap-1 pt-space-sm border-t border-outline-variant">
                <span className="font-mono-label text-[10px] text-on-surface font-bold uppercase">
                  ACTIVE TECHNOLOGY RELEVANCE:
                </span>
                <div className="flex flex-wrap gap-1 font-mono-label text-[11px]">
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Field Perception</span>
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Intelligent Sensing</span>
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Environmental Monitoring</span>
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Remote Deployment</span>
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Hardware-Aware AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — INDUSTRIAL (EDITORIAL ALTERNATING LAYOUT: VISUAL RIGHT)       */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="industrial">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
            {/* Editorial Description (Left) */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-space-md order-2 lg:order-1">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                  APPLICATION DOMAIN // 02
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                  Industrial
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-2">
                  Industrial environments demand deterministic execution around physical machinery, stamping presses, and high-speed conveyors. Encepto unifies high-speed optical inspection with inertial vibration telemetry to safeguard industrial workflows.
                </p>

                {/* 4 Pillars of Industrial Application */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-sm">
                  <div className="bg-surface p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Visual Inspection</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Micro-defect detection and surface fracture auditing executing on line at manufacturing speeds with sub-millimeter precision.
                    </p>
                  </div>
                  <div className="bg-surface p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Monitoring</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Continuous multi-sensor tracking monitors mechanical vibration harmonics, motor thermal loads, and operating duty cycle strain.
                    </p>
                  </div>
                  <div className="bg-surface p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Detection</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Real-time object categorization, component presence auditing, and boundary breach detection near automated robotic tooling.
                    </p>
                  </div>
                  <div className="bg-surface p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Automation</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Isolated hardware relays and CAN bus signals trigger immediate machine stops and pneumatic diverters with sub-12ms determinism.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-col gap-1 pt-space-sm border-t border-outline-variant">
                <span className="font-mono-label text-[10px] text-on-surface font-bold uppercase">
                  ACTIVE TECHNOLOGY RELEVANCE:
                </span>
                <div className="flex flex-wrap gap-1 font-mono-label text-[11px]">
                  <span className="bg-surface px-2 py-1 border border-outline-variant">Visual Inspection</span>
                  <span className="bg-surface px-2 py-1 border border-outline-variant">Harmonic Monitoring</span>
                  <span className="bg-surface px-2 py-1 border border-outline-variant">Anomaly Detection</span>
                  <span className="bg-surface px-2 py-1 border border-outline-variant">Automation Relays</span>
                  <span className="bg-surface px-2 py-1 border border-outline-variant">Deterministic RTOS</span>
                </div>
              </div>
            </div>

            {/* Visual Column (Right) */}
            <div className="lg:col-span-6 bg-surface border border-outline-variant p-space-md flex flex-col justify-between relative overflow-hidden order-1 lg:order-2 group">
              <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px]">
                <span className="text-secondary font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                  HIGH-SPEED LINE INSPECTION INTERFACE
                </span>
                <span className="text-on-surface-variant">BUS: CAN / OPC-UA / ISOLATED RELAY</span>
              </div>

              {/* Technical Industrial HUD Schematic */}
              <div className="relative bg-surface-container-highest min-h-[260px] my-space-md p-space-md border border-outline-variant flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

                <div className="relative z-10 flex justify-between font-mono-label text-[11px]">
                  <span className="bg-surface/90 px-2 py-1 border border-outline-variant text-secondary font-bold">
                    INSPECTION_BUS // STAMPING_CELL_04
                  </span>
                  <span className="bg-surface/90 px-2 py-1 border border-outline-variant text-on-surface-variant">
                    SHOCK RATING: 10G MECHANICAL HARMONICS
                  </span>
                </div>

                {/* Spatial Inspection Target Simulation */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-space-sm py-space-xs">
                  <div className="border border-secondary bg-secondary/10 p-2">
                    <span className="bg-secondary text-on-secondary px-1 text-[9px] font-mono-label uppercase font-bold block w-fit">
                      DEFECT CLUSTER // MICRO-FRACTURE
                    </span>
                    <div className="font-mono-label text-[11px] text-on-surface mt-1 flex justify-between">
                      <span>GEOMETRY: 0.32mm GAP</span>
                      <span className="text-secondary font-bold">TRIGGER: ISOLATE</span>
                    </div>
                  </div>

                  <div className="border border-outline bg-surface/80 p-2 sm:ml-auto">
                    <span className="bg-primary text-on-primary px-1 text-[9px] font-mono-label uppercase font-bold block w-fit">
                      ACCELEROMETER VIBRATION
                    </span>
                    <div className="font-mono-label text-[11px] text-on-surface mt-1 flex justify-between">
                      <span>FREQUENCY: 2.4 kHz</span>
                      <span className="text-on-surface-variant">BEARING: NORMAL</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex justify-between font-mono-label text-[10px] text-on-surface-variant border-t border-outline-variant/60 pt-2">
                  <span>FRAME TIME: 11.2ms (DETERMINISTIC)</span>
                  <span>SAFETY GUARD: TRIP ACTIVE</span>
                </div>
              </div>

              {/* Bottom Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-space-xs font-mono-label text-[11px] border-t border-outline-variant/60 pt-space-xs">
                <div>
                  <span className="text-on-surface-variant block">OPTICAL RATE:</span>
                  <span className="text-on-surface font-bold">HIGH-SPEED MIPI</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block">ACCURACY:</span>
                  <span className="text-secondary font-bold">SUB-PIXEL F1</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block">TRIP LATENCY:</span>
                  <span className="text-on-surface font-bold">&lt; 12ms CLOSED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — INFRASTRUCTURE (EDITORIAL ALTERNATING LAYOUT: VISUAL LEFT)   */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="infrastructure">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
            {/* Visual Column (Left) */}
            <div className="lg:col-span-6 bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between relative overflow-hidden group">
              <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px]">
                <span className="text-secondary font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                  CIVIL STRUCTURAL TELEMETRY &amp; STRAIN HUD
                </span>
                <span className="text-on-surface-variant">TARGET: GIRDER BRIDGES &amp; RAIL CORRIDORS</span>
              </div>

              {/* Technical Infrastructure Blueprint Schematic */}
              <div className="relative bg-surface-container-highest min-h-[260px] my-space-md p-space-md border border-outline-variant flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

                <div className="relative z-10 flex justify-between font-mono-label text-[11px]">
                  <span className="bg-surface/90 px-2 py-1 border border-outline-variant text-secondary font-bold">
                    STRUCTURAL_SPAN // CORRIDOR_KM_142
                  </span>
                  <span className="bg-surface/90 px-2 py-1 border border-outline-variant text-on-surface-variant">
                    SEAL: HERMETIC IP67 / MONSOON PROOF
                  </span>
                </div>

                {/* Overlay Spatial Acoustic & Strain Indicators */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-space-sm py-space-xs">
                  <div className="border border-secondary bg-secondary/10 p-2">
                    <span className="bg-secondary text-on-secondary px-1 text-[9px] font-mono-label uppercase font-bold block w-fit">
                      ACOUSTIC SAMPLING: 20 kHz
                    </span>
                    <div className="font-mono-label text-[11px] text-on-surface mt-1 flex justify-between">
                      <span>HARMONIC SHIFT: NONE</span>
                      <span className="text-secondary font-bold">HEALTH: 100%</span>
                    </div>
                  </div>

                  <div className="border border-outline bg-surface/80 p-2 sm:ml-auto">
                    <span className="bg-primary text-on-primary px-1 text-[9px] font-mono-label uppercase font-bold block w-fit">
                      SOLAR POWER MANAGEMENT
                    </span>
                    <div className="font-mono-label text-[11px] text-on-surface mt-1 flex justify-between">
                      <span>SUPPLY: ULTRA-WIDE DC</span>
                      <span className="text-on-surface-variant">BUFFER: STABLE</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex justify-between font-mono-label text-[10px] text-on-surface-variant border-t border-outline-variant/60 pt-2">
                  <span>DISPATCH: SUB-50ms STRUCTURAL EVENT PULSE</span>
                  <span>ENCLOSURE: WIDE-TEMP -40°C TO +85°C</span>
                </div>
              </div>

              {/* Bottom Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-space-xs font-mono-label text-[11px] border-t border-outline-variant/60 pt-space-xs">
                <div>
                  <span className="text-on-surface-variant block">SAMPLING:</span>
                  <span className="text-on-surface font-bold">20 kHz ACOUSTIC</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block">POWER SOURCE:</span>
                  <span className="text-secondary font-bold">SOLAR BUFFER</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block">MONSOON SHIELD:</span>
                  <span className="text-on-surface font-bold">HERMETIC SEAL</span>
                </div>
              </div>
            </div>

            {/* Editorial Description (Right) */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                  APPLICATION DOMAIN // 03
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                  Infrastructure
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-2">
                  Civil infrastructure spans vast geographies where routine physical inspection is difficult and costly. Encepto deploys autonomous perception and acoustic telemetry nodes to provide continuous asset intelligence across large physical assets.
                </p>

                {/* 4 Pillars of Infrastructure Application */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-sm">
                  <div className="bg-surface-container-low p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Visual Monitoring</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Autonomous camera arrays observe expansion joints, riverbed scouring, and surface spalling over seasonal thermal swings.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Inspection</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Periodic automated visual comparisons detect shifting crack lines and structural creep before dangerous fractures propagate.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Asset Intelligence</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Multi-modal sensor fusion combines strain gauges with acoustic frequency analysis to model actual mechanical loading trends.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Remote Sensing</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Completely self-contained units operate in unpowered, unpaved locations, dispatching early event alerts over low-bandwidth radios.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-col gap-1 pt-space-sm border-t border-outline-variant">
                <span className="font-mono-label text-[10px] text-on-surface font-bold uppercase">
                  ACTIVE TECHNOLOGY RELEVANCE:
                </span>
                <div className="flex flex-wrap gap-1 font-mono-label text-[11px]">
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Visual Monitoring</span>
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Civil Inspection</span>
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Asset Intelligence</span>
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Acoustic Probes</span>
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Remote Sensing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — ENERGY (EDITORIAL ALTERNATING LAYOUT: VISUAL RIGHT)           */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="energy">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
            {/* Editorial Description (Left) */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-space-md order-2 lg:order-1">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                  APPLICATION DOMAIN // 04
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                  Energy
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-2">
                  Energy installations operate around high-voltage equipment, extreme solar radiation, and severe electromagnetic interference. Encepto deploys radiometric infrared sensing and edge vision models to audit substation and solar field health.
                </p>

                {/* 4 Pillars of Energy Application */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-sm">
                  <div className="bg-surface p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Monitoring</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Continuous thermal tracking evaluates heat dissipation patterns on transformer windings and high-voltage line connections.
                    </p>
                  </div>
                  <div className="bg-surface p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Visual Inspection</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Optical cameras inspect photovoltaic panels for micro-cracks, surface debris fouling, and physical mechanical damage.
                    </p>
                  </div>
                  <div className="bg-surface p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Intelligent Sensing</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      High-sensitivity LWIR radiometry couples with ambient solar tracking to model and subtract expected diurnal heating curves.
                    </p>
                  </div>
                  <div className="bg-surface p-space-sm border border-outline-variant">
                    <h4 className="font-headline-md text-body-md text-on-surface font-bold">Energy Installations</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-relaxed">
                      Galvanically-isolated circuitry shields processors against 6kV lightning surges and heavy electromagnetic noise near busbars.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-col gap-1 pt-space-sm border-t border-outline-variant">
                <span className="font-mono-label text-[10px] text-on-surface font-bold uppercase">
                  ACTIVE TECHNOLOGY RELEVANCE:
                </span>
                <div className="flex flex-wrap gap-1 font-mono-label text-[11px]">
                  <span className="bg-surface px-2 py-1 border border-outline-variant">Radiometric Monitoring</span>
                  <span className="bg-surface px-2 py-1 border border-outline-variant">PV Inspection</span>
                  <span className="bg-surface px-2 py-1 border border-outline-variant">Intelligent Sensing</span>
                  <span className="bg-surface px-2 py-1 border border-outline-variant">6kV Surge Isolation</span>
                  <span className="bg-surface px-2 py-1 border border-outline-variant">Thermal Runaway Models</span>
                </div>
              </div>
            </div>

            {/* Visual Column (Right) */}
            <div className="lg:col-span-6 bg-surface border border-outline-variant p-space-md flex flex-col justify-between relative overflow-hidden order-1 lg:order-2 group">
              <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px]">
                <span className="text-secondary font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                  SUBSTATION RADIOMETRIC MATRIX HUD
                </span>
                <span className="text-on-surface-variant">SURGE ISOLATION: 6kV LIGHTNING SHIELD</span>
              </div>

              {/* Technical Energy Radiometric Schematic */}
              <div className="relative bg-surface-container-highest min-h-[260px] my-space-md p-space-md border border-outline-variant flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

                <div className="relative z-10 flex justify-between font-mono-label text-[11px]">
                  <span className="bg-surface/90 px-2 py-1 border border-outline-variant text-secondary font-bold">
                    SUBSTATION_BAY // TRANSFORMER_T3
                  </span>
                  <span className="bg-surface/90 px-2 py-1 border border-outline-variant text-on-surface-variant">
                    SENSITIVITY: 0.05°C NETD LWIR
                  </span>
                </div>

                {/* Spatial Thermal Runaway Target Simulation */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-space-sm py-space-xs">
                  <div className="border border-secondary bg-secondary/10 p-2">
                    <span className="bg-secondary text-on-secondary px-1 text-[9px] font-mono-label uppercase font-bold block w-fit">
                      BUSHING HOTSPOT PREDICTION
                    </span>
                    <div className="font-mono-label text-[11px] text-on-surface mt-1 flex justify-between">
                      <span>TEMPERATURE: +12.4°C DELTA</span>
                      <span className="text-secondary font-bold">TREND: ELEVATING</span>
                    </div>
                  </div>

                  <div className="border border-outline bg-surface/80 p-2 sm:ml-auto">
                    <span className="bg-primary text-on-primary px-1 text-[9px] font-mono-label uppercase font-bold block w-fit">
                      SOLAR HEATING COMPENSATOR
                    </span>
                    <div className="font-mono-label text-[11px] text-on-surface mt-1 flex justify-between">
                      <span>DIURNAL BASELINE: SUBTRACTED</span>
                      <span className="text-on-surface-variant">NO FALSE TRIPS</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex justify-between font-mono-label text-[10px] text-on-surface-variant border-t border-outline-variant/60 pt-2">
                  <span>DISPATCH: DRY CONTACT INTERRUPT RELAY</span>
                  <span>OPTICAL SENSING: 50m LINE-OF-SIGHT</span>
                </div>
              </div>

              {/* Bottom Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-space-xs font-mono-label text-[11px] border-t border-outline-variant/60 pt-space-xs">
                <div>
                  <span className="text-on-surface-variant block">LWIR NETD:</span>
                  <span className="text-on-surface font-bold">0.05°C RADIOMETRIC</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block">ISOLATION:</span>
                  <span className="text-secondary font-bold">6kV GALVANIC</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block">TRIP CONTACT:</span>
                  <span className="text-on-surface font-bold">DRY RELAY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — BUILT FOR DIFFICULT ENVIRONMENTS                              */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="difficult-environments">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                07 / OPERATIONAL CONSTRAINTS
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Built for Difficult Environments
              </h2>
            </div>
            <div className="font-body-lg text-body-lg text-on-surface font-medium border-l-2 border-secondary pl-space-md max-w-xl">
              "Encepto designs AI systems with real operating constraints in mind. Environmental and operational limits are treated as foundational engineering requirements, not secondary afterthoughts."
            </div>
          </div>

          {/* 6 Constraint Selector Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-xs">
            {constraintModules.map((c) => {
              const isSelected = c.id === activeConstraintId;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveConstraintId(c.id)}
                  className={`p-space-sm text-left flex flex-col justify-between min-h-[140px] transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-on-primary border-2 border-primary shadow-sm'
                      : 'bg-surface-container border border-outline-variant hover:border-on-surface text-on-surface'
                  }`}
                  type="button"
                >
                  <span
                    className={`font-mono-label text-[10px] font-bold ${
                      isSelected ? 'text-secondary-container' : 'text-secondary'
                    }`}
                  >
                    {c.tag}
                  </span>
                  <span className="font-headline-md text-body-md font-bold uppercase mt-1">
                    {c.name}
                  </span>
                  <span className="font-mono-label text-[9px] uppercase tracking-wider block mt-2 text-on-surface-variant">
                    {isSelected ? '● INSPECTING' : 'CLICK TO VIEW'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Constraint Detail Readout Panel */}
          <div className="bg-surface-container border-2 border-secondary p-space-md lg:p-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md transition-all">
            <div className="flex flex-col gap-2 max-w-3xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold">
                ENGINEERING SPECIFICATION // {activeConstraint.name}
              </span>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                {activeConstraint.statement}
              </p>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                {activeConstraint.mitigation}
              </p>
            </div>
            <div className="bg-surface px-space-md py-space-xs border border-outline-variant font-mono-label text-[11px] text-secondary font-bold flex-shrink-0">
              {activeConstraint.spec}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — APPLICATION APPROACH                                         */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="approach">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              08 / APPLICATION METHODOLOGY
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Application Approach
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              How Encepto approaches an application environment: a disciplined engineering pipeline connecting physical constraints directly with edge intelligence.
            </p>
          </div>

          {/* Connected Flow Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-space-xs relative">
            {approachSteps.map((st, idx) => (
              <div
                key={st.step}
                className="bg-surface border border-outline-variant p-space-sm flex flex-col justify-between min-h-[200px] relative hover:border-secondary transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between font-mono-label text-mono-label">
                    <span className="text-secondary font-bold">STAGE // {st.step}</span>
                    <span className="text-on-surface-variant text-[10px]">{idx < 5 ? '→' : '●'}</span>
                  </div>
                  <h4 className="font-headline-md text-body-md text-on-surface font-bold uppercase mt-1">
                    {st.name}
                  </h4>
                  <p className="font-body-sm text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="pt-space-xs border-t border-outline-variant/60 font-mono-label text-[9px] text-on-surface-variant">
                  STATUS: VERIFIED GATE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 09 — TECHNOLOGY CONNECTION                                        */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="technology-connection">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              09 / UNDERLYING FOUNDATION
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Technology Connection
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Encepto's application domains are directly enabled by our unified technology stack. Each physical deployment builds upon four core pillars:
            </p>
          </div>

          {/* Synthesis Banner: Pillars + Applications Flow */}
          <div className="bg-surface-container border border-outline-variant p-space-md lg:p-space-lg flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px]">
              <span className="text-secondary font-bold">STACK SYNTHESIS: 4 PILLARS → REAL-WORLD APPLICATIONS</span>
              <span className="text-on-surface-variant">CO-DESIGNED ARCHITECTURE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm">
              <Link
                to="/technology"
                className="bg-surface p-space-md border border-outline-variant flex flex-col justify-between hover:border-secondary transition-colors group"
              >
                <div>
                  <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                    PILLAR 01
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                    Embedded AI
                  </h4>
                  <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                    Edge inference, local processing kernels, and hardware-aware quantization executing within sub-5W envelopes.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-secondary flex items-center gap-1 font-bold">
                  <span>Explore Pillar</span>
                  <MaterialIcon name="arrow_forward" className="text-[14px]" />
                </div>
              </Link>

              <Link
                to="/technology"
                className="bg-surface p-space-md border border-outline-variant flex flex-col justify-between hover:border-secondary transition-colors group"
              >
                <div>
                  <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                    PILLAR 02
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                    Computer Vision
                  </h4>
                  <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                    Perception, multi-object detection, high-precision inspection, continuous monitoring, and visual behavioral analysis.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-secondary flex items-center gap-1 font-bold">
                  <span>Explore Pillar</span>
                  <MaterialIcon name="arrow_forward" className="text-[14px]" />
                </div>
              </Link>

              <Link
                to="/technology"
                className="bg-surface p-space-md border border-outline-variant flex flex-col justify-between hover:border-secondary transition-colors group"
              >
                <div>
                  <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                    PILLAR 03
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                    Intelligent Sensing
                  </h4>
                  <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                    Synchronized multi-sensor fusion uniting cameras, thermopiles, IMUs, and environmental contextual telemetry.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-secondary flex items-center gap-1 font-bold">
                  <span>Explore Pillar</span>
                  <MaterialIcon name="arrow_forward" className="text-[14px]" />
                </div>
              </Link>

              <Link
                to="/technology"
                className="bg-surface p-space-md border border-outline-variant flex flex-col justify-between hover:border-secondary transition-colors group"
              >
                <div>
                  <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                    PILLAR 04
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                    Vision-Language
                  </h4>
                  <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                    Multimodal visual understanding, on-device causal reasoning, and synthesized natural language state assertions.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-secondary flex items-center gap-1 font-bold">
                  <span>Explore Pillar</span>
                  <MaterialIcon name="arrow_forward" className="text-[14px]" />
                </div>
              </Link>
            </div>

            {/* Downward Architectural Arrow to Real-World Applications */}
            <div className="flex flex-col items-center justify-center pt-space-xs font-mono-label text-body-sm">
              <span className="text-secondary text-[16px] font-bold animate-bounce">↓</span>
              <span className="text-on-surface font-bold mt-1 uppercase text-[11px] tracking-wider">
                REAL-WORLD APPLICATION DEPLOYMENTS
              </span>
              <div className="flex flex-wrap justify-center gap-space-sm pt-2 text-on-surface-variant text-[11px]">
                <span className="bg-surface px-2 py-0.5 border border-outline-variant font-bold">AGRICULTURE</span>
                <span>·</span>
                <span className="bg-surface px-2 py-0.5 border border-outline-variant font-bold">INDUSTRIAL</span>
                <span>·</span>
                <span className="bg-surface px-2 py-0.5 border border-outline-variant font-bold">INFRASTRUCTURE</span>
                <span>·</span>
                <span className="bg-surface px-2 py-0.5 border border-outline-variant font-bold">ENERGY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10 — APPLICATION CTA                                              */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container transition-colors">
        <div className="max-w-[1440px] mx-auto border border-outline-variant bg-surface p-space-md lg:p-space-xl flex flex-col items-center text-center gap-space-md transition-colors">
          <div className="flex items-center gap-space-xs font-mono-label text-mono-label text-secondary uppercase font-bold">
            <span className="w-2 h-2 bg-secondary inline-block"></span>
            <span>FIELD COLLABORATION INQUIRY</span>
          </div>

          <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface max-w-3xl">
            Have a real-world problem worth exploring?
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Start with the environment and the constraint. Let's explore what intelligent systems could make possible.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-sm">
            <Link
              className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
              to="/contact"
            >
              <span>Talk to Encepto</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
            <Link
              className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
              to="/technology"
            >
              Explore Technology →
            </Link>
          </div>

          <div className="flex items-center gap-space-md font-mono-label text-body-sm text-on-surface-variant pt-space-md border-t border-outline-variant w-full justify-center flex-wrap">
            <span>AGRICULTURE</span>
            <span>//</span>
            <span>INDUSTRIAL</span>
            <span>//</span>
            <span>INFRASTRUCTURE</span>
            <span>//</span>
            <span>ENERGY</span>
          </div>
        </div>
      </section>
    </div>
  );
};
