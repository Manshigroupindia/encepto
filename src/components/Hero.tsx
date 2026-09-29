import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

export const Hero: React.FC = () => {
  // Active stream state (1: Optical, 2: Thermal IR, 3: Depth LiDAR)
  const [activeStream, setActiveStream] = useState<1 | 2 | 3>(1);

  // Telemetry simulation
  const [fps, setFps] = useState('42.4');
  const [latency, setLatency] = useState('11.8');
  const [frameCount, setFrameCount] = useState(849204);

  // Typing animation simulation
  const [typingText, setTypingText] = useState('Sense. See. Reason. Act.');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Subtle telemetry jitter loop
  useEffect(() => {
    const interval = setInterval(() => {
      const nextFps = (41.8 + Math.random() * 1.4).toFixed(1);
      const nextLat = (11.2 + Math.random() * 1.1).toFixed(1);
      setFps(nextFps);
      setLatency(nextLat);
      setFrameCount((prev) => prev + Math.floor(Math.random() * 3 + 1));
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  // Typing animation loop
  useEffect(() => {
    if (isReducedMotion) {
      setTypingText('Sense. See. Reason. Act.');
      return;
    }

    const phrases = [
      'Sense. See. Reason. Act.',
      'Hardened Edge Silicon.',
      'Real-Time Computer Vision.',
      'Sub-Watt Tensor Compute.',
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = phrases[phraseIdx];
      if (isDeleting) {
        setTypingText(current.substring(0, charIdx - 1));
        charIdx--;
      } else {
        setTypingText(current.substring(0, charIdx + 1));
        charIdx++;
      }

      let delta = 90;
      if (isDeleting) delta /= 2;

      if (!isDeleting && charIdx === current.length) {
        delta = 2000;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        delta = 350;
      }

      timer = setTimeout(tick, delta);
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [isReducedMotion]);

  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Top Telemetry Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant pb-space-sm font-mono-label text-mono-label text-on-surface-variant">
          <div className="flex items-center gap-space-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="tracking-widest uppercase text-[10px] sm:text-mono-label">
              EMBEDDED AI · COMPUTER VISION · INTELLIGENT SENSING · VLMs
            </span>
          </div>
          <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
            <span className="hidden sm:inline-block">SYS_CLK: 1200MHz // T_DIE: 41.2°C</span>
            <span className="bg-surface-container-high px-space-xs py-0.5 text-on-surface font-bold">
              LAT 28.6139° N / FIELD DEPLOYABLE
            </span>
          </div>
        </div>

        {/* Main Headline + Editorial Copy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-sm">
          <div className="lg:col-span-8 flex flex-col gap-space-md">
            <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
              AI That Works <br className="hidden sm:inline" />
              <span className="text-secondary underline decoration-1 underline-offset-8">Beyond the Lab.</span>
            </h1>

            {/* Dynamic Typing Subheading */}
            <div className="flex items-center gap-space-xs font-mono-metric text-headline-md text-on-surface-variant min-h-[36px]">
              <span className="text-secondary select-none">&gt;</span>
              <span className="text-on-surface font-headline-md">{typingText}</span>
              {!isReducedMotion && <span className="w-2 h-5 bg-secondary animate-pulse inline-block" />}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Encepto builds modular embedded AI systems that combine computer vision, intelligent sensing, and vision-language models — engineered for real-world deployment.
            </p>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                to="/technology"
              >
                <span>Explore Our Technology</span>
                <MaterialIcon name="arrow_forward" className="text-[16px]" />
              </Link>
              <Link
                className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
                to="/contact"
              >
                Partner With Encepto
              </Link>
            </div>
          </div>
        </div>

        {/* HERO VISUAL: Edge-AI Perception HUD Interface */}
        <div className="mt-space-md w-full bg-surface-container-lowest border border-outline-variant p-space-sm lg:p-space-md">
          {/* HUD Control Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-sm gap-space-sm font-mono-label text-mono-label">
            <div className="flex items-center gap-space-md flex-wrap">
              <span className="text-secondary font-bold flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                NODE_ID: ENC-EDGE-ALPHA-09
              </span>
              <span className="hidden md:inline text-on-surface-variant">// DUAL-PIPELINE TENSOR FLOW</span>
              <span className="text-on-surface-variant font-normal">MODE: INDUSTRIAL_SURVEILLANCE_V3</span>
            </div>
            {/* Stream Selector Buttons */}
            <div className="flex items-center gap-space-xs">
              <button
                className={`px-space-xs py-0.5 font-mono-label text-body-sm transition-colors ${
                  activeStream === 1
                    ? 'bg-primary text-on-primary font-bold'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                }`}
                onClick={() => setActiveStream(1)}
                type="button"
              >
                STREAM_01: OPTICAL
              </button>
              <button
                className={`px-space-xs py-0.5 font-mono-label text-body-sm transition-colors ${
                  activeStream === 2
                    ? 'bg-primary text-on-primary font-bold'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                }`}
                onClick={() => setActiveStream(2)}
                type="button"
              >
                STREAM_02: THERMAL IR
              </button>
              <button
                className={`px-space-xs py-0.5 font-mono-label text-body-sm transition-colors ${
                  activeStream === 3
                    ? 'bg-primary text-on-primary font-bold'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                }`}
                onClick={() => setActiveStream(3)}
                type="button"
              >
                STREAM_03: DEPTH LIDAR
              </button>
            </div>
          </div>

          {/* HUD Primary Viewport & Telemetry Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md pt-space-sm">
            {/* Viewport (Col 8) */}
            <div className="lg:col-span-8 relative bg-surface-container-highest min-h-[380px] flex flex-col justify-between p-space-md overflow-hidden">
              {/* Background Sensory Raster Blueprint */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

              {/* Stream-Specific Ambient Filter */}
              {activeStream === 2 && (
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/15 via-transparent to-error/20 pointer-events-none transition-all duration-300"></div>
              )}
              {activeStream === 3 && (
                <div className="absolute inset-0 bg-[radial-gradient(#006398_0.8px,transparent_0.8px)] [background-size:12px_12px] opacity-35 pointer-events-none transition-all duration-300"></div>
              )}

              {/* Simulated Camera Feed Plate */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <svg
                  className="w-full h-full text-outline"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  viewBox="0 0 800 450"
                >
                  <circle cx="400" cy="225" r="140" strokeDasharray="4 4"></circle>
                  <circle cx="400" cy="225" r="80"></circle>
                  <line strokeDasharray="2 2" x1="200" x2="600" y1="225" y2="225"></line>
                  <line strokeDasharray="2 2" x1="400" x2="400" y1="50" y2="400"></line>
                  <path d="M 380 205 L 380 190 L 420 190 L 420 205"></path>
                  <path d="M 380 245 L 380 260 L 420 260 L 420 245"></path>
                  {/* Additional HUD tick marks */}
                  <line x1="390" y1="225" x2="410" y2="225" strokeWidth="1"></line>
                  <line x1="400" y1="215" x2="400" y2="235" strokeWidth="1"></line>
                </svg>
              </div>

              {/* Vector HUD Reticle Overlay Top */}
              <div className="relative z-10 flex items-start justify-between font-mono-label text-body-sm flex-wrap gap-2">
                <div className="bg-surface/90 border border-outline-variant px-space-sm py-space-xs backdrop-blur-sm flex flex-col gap-0.5">
                  <span className="text-secondary font-bold">FRAME: #{frameCount.toLocaleString()}</span>
                  <span className="text-on-surface-variant">
                    FPS: <span className="text-on-surface font-bold">{fps}</span> | EXP: 1/400s | AGC: 1.2x
                  </span>
                  <span className="text-on-surface-variant">BANDWIDTH: ZERO-CLOUD (LOCAL BUS)</span>
                </div>
                <div className="bg-surface/90 border border-outline-variant px-space-sm py-space-xs backdrop-blur-sm text-right">
                  <span className="text-error font-bold flex items-center justify-end gap-1">
                    <span className="w-1.5 h-1.5 bg-error inline-block animate-ping"></span>
                    LIVE INFERENCE ENGINE
                  </span>
                  <span className="text-on-surface-variant font-mono-label">
                    {activeStream === 1 ? 'INT8 TENSOR QUANT' : activeStream === 2 ? 'LWIR THERMAL MATRIX' : 'SPATIAL POINT CLOUD'}
                  </span>
                </div>
              </div>

              {/* Dynamic Bounding Boxes in Perception HUD */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-space-md py-space-md">
                {/* Bounding Box 1 */}
                <div className="border border-secondary bg-secondary/5 p-space-xs relative max-w-xs transition-all hover:bg-secondary/10">
                  <div className="absolute -top-3 left-0 bg-secondary text-on-secondary px-1 text-[9px] font-mono-label tracking-wider uppercase font-bold">
                    {activeStream === 3 ? 'SPATIAL_CLUSTER_01 [0.98]' : 'OBSTACLE_01 [0.94 CONF]'}
                  </div>
                  <div className="flex justify-between items-center text-body-sm font-mono-label text-on-surface">
                    <span>{activeStream === 3 ? 'RANGE: 4.82 METERS' : 'CLASS: STRUCTURAL_FRACTURE'}</span>
                    <span className="text-secondary">Δx: +0.12mm</span>
                  </div>
                  <div className="text-[10px] text-on-surface-variant font-mono-label mt-1 flex justify-between">
                    <span>VECTOR: [-12.4, 0.0, 4.2]</span>
                    <span>TRACK_ID: #4092</span>
                  </div>
                </div>

                {/* Bounding Box 2 */}
                <div className="border border-outline bg-surface/70 p-space-xs relative max-w-xs sm:ml-auto">
                  <div className="absolute -top-3 left-0 bg-primary text-on-primary px-1 text-[9px] font-mono-label tracking-wider uppercase font-bold">
                    {activeStream === 2 ? 'RADIOMETRIC_ZONE [CRITICAL]' : 'THERMAL_SIGNATURE [42.4°C]'}
                  </div>
                  <div className="flex justify-between items-center text-body-sm font-mono-label text-on-surface">
                    <span>STATUS: ANOMALOUS_HEAT</span>
                    <span className="text-error font-bold">ΔT: +7.8°C</span>
                  </div>
                  <div className="text-[10px] text-on-surface-variant font-mono-label mt-1 flex justify-between">
                    <span>REGION: POWER_INVERTER</span>
                    <span>RISK: NOMINAL</span>
                  </div>
                </div>
              </div>

              {/* Viewport Bottom Status Bar */}
              <div className="relative z-10 flex flex-wrap items-end justify-between font-mono-label text-body-sm pt-space-md border-t border-outline-variant/60 gap-2">
                <div className="flex items-center gap-space-md">
                  <span className="text-on-surface">
                    INFERENCE LATENCY: <strong className="text-secondary font-mono-metric text-body-md">{latency}ms</strong>
                  </span>
                  <span className="hidden sm:inline text-on-surface-variant">SRAM: 4.8MB / 8.0MB</span>
                </div>
                <div className="text-on-surface-variant text-[10px]">
                  CALIBRATION_HASH: 0x9AF831B · SENSOR_HEALTH: NOMINAL
                </div>
              </div>
            </div>

            {/* Telemetry Inspector (Col 4) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-space-sm bg-surface-container p-space-md border border-outline-variant">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs">
                  <span className="font-mono-label text-mono-label uppercase text-on-surface font-bold">SYSTEM TELEMETRY</span>
                  <span className="font-mono-label text-body-sm text-secondary font-bold">REAL-TIME BUS</span>
                </div>

                {/* Metrics Matrix */}
                <div className="grid grid-cols-2 gap-space-xs py-space-xs">
                  <div className="bg-surface-container-lowest p-space-xs border border-outline-variant">
                    <span className="font-mono-label text-[10px] text-on-surface-variant block uppercase">Edge Node Status</span>
                    <span className="font-mono-metric text-body-lg text-on-surface font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                      ONLINE
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-xs border border-outline-variant">
                    <span className="font-mono-label text-[10px] text-on-surface-variant block uppercase">Sensor Array</span>
                    <span className="font-mono-metric text-body-lg text-on-surface font-bold">04 / 04 LOCKED</span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-xs border border-outline-variant">
                    <span className="font-mono-label text-[10px] text-on-surface-variant block uppercase">Tensor Engine</span>
                    <span className="font-mono-metric text-body-lg text-on-surface font-bold">LOCAL NPU</span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-xs border border-outline-variant">
                    <span className="font-mono-label text-[10px] text-on-surface-variant block uppercase">Operating Env</span>
                    <span className="font-mono-metric text-body-lg text-on-surface font-bold">FIELD MODE</span>
                  </div>
                </div>

                {/* Micro Raw Logs */}
                <div className="flex flex-col gap-1 font-mono-label text-[10px] text-on-surface-variant pt-space-xs border-t border-outline-variant">
                  <span className="text-on-surface font-bold uppercase tracking-wider">Edge Event Stream</span>
                  <div className="flex items-center justify-between font-mono-label">
                    <span>[14:02:18.401] IMU_SYNC_OK</span>
                    <span className="text-on-surface font-bold">Jitter: 0.02ms</span>
                  </div>
                  <div className="flex items-center justify-between font-mono-label">
                    <span>[14:02:18.412] OPT_INFER_COMPLETE</span>
                    <span className="text-secondary font-bold">BBox: #4092</span>
                  </div>
                  <div className="flex items-center justify-between font-mono-label">
                    <span>[14:02:18.423] VLM_CONTEXT_DISPATCH</span>
                    <span className="text-on-surface font-bold">Token: 18ms</span>
                  </div>
                  <div className="flex items-center justify-between font-mono-label">
                    <span>[14:02:18.435] WATCHDOG_TICK</span>
                    <span className="text-on-surface-variant">Ack: 0x00</span>
                  </div>
                </div>
              </div>

              <div className="pt-space-sm border-t border-outline-variant flex items-center justify-between font-mono-label text-body-sm">
                <span className="text-on-surface-variant uppercase">Power Draw</span>
                <span className="text-on-surface font-bold font-mono-metric">3.4W (SUB-5W NOMINAL)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
