import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    domain: 'industrial',
    constraints: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* SECTION 01 — HERO */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant pb-space-sm font-mono-label text-mono-label text-on-surface-variant">
            <div className="flex items-center gap-space-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="tracking-widest uppercase font-bold text-secondary">CONTACT // INQUIRY</span>
              <span>// DIRECT COLLABORATION</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span>RESPONSE TIME: &lt; 24 HOURS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start pt-space-xs">
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Start a conversation <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">with our lab.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Whether you need embedded computer vision on custom hardware, multi-sensor environmental fusion, or on-device vision-language models, let’s discuss your technical constraints.
              </p>

              <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col gap-space-sm font-mono-label text-body-sm mt-space-sm">
                <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                  <span className="text-secondary font-bold">DIRECT CHANNELS</span>
                  <span className="text-on-surface-variant">SECURE INGESTION</span>
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">EMAIL:</span>
                    <a href="mailto:contact@encepto.ai" className="text-secondary font-bold hover:underline">
                      contact@encepto.ai
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">LAB STATUS:</span>
                    <span className="text-on-surface font-bold">OPERATIONAL</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">AREAS:</span>
                    <span className="text-on-surface">EMBEDDED AI · SENSING · CV · VLMs</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-space-sm pt-space-xs">
                <Link
                  className="font-mono-label text-body-sm text-secondary hover:underline flex items-center gap-1 font-bold"
                  to="/technology"
                >
                  <span>Explore Technology First</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="lg:col-span-6 bg-surface-container border border-outline-variant p-space-lg">
              {formSubmitted ? (
                <div className="p-space-lg flex flex-col items-center text-center gap-space-md">
                  <div className="w-12 h-12 bg-secondary text-on-secondary flex items-center justify-center font-bold">
                    <MaterialIcon name="check" className="text-[24px]" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Inquiry Dispatched</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    Thank you, {formData.name || 'Partner'}. Your operational parameters have been logged. Our engineering team will review your requirements and reach out via {formData.email || 'your email'}.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-space-sm px-space-md py-space-xs bg-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider text-on-surface font-bold hover:bg-surface-container-high"
                    type="button"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-mono-label">
                    <span className="text-secondary font-bold">TECHNICAL INQUIRY FORM</span>
                    <span className="text-on-surface-variant">DIRECT TO ENGINEERING</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-mono-label text-[10px] text-on-surface-variant uppercase font-bold">
                        Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Eng. Jane Doe"
                        className="bg-surface border border-outline-variant px-3 py-2 text-body-md text-on-surface font-mono-label focus:border-secondary focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-mono-label text-[10px] text-on-surface-variant uppercase font-bold">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@organization.com"
                        className="bg-surface border border-outline-variant px-3 py-2 text-body-md text-on-surface font-mono-label focus:border-secondary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-mono-label text-[10px] text-on-surface-variant uppercase font-bold">
                        Organization / Lab
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Enterprise / Lab name"
                        className="bg-surface border border-outline-variant px-3 py-2 text-body-md text-on-surface font-mono-label focus:border-secondary focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-mono-label text-[10px] text-on-surface-variant uppercase font-bold">
                        Primary Domain
                      </label>
                      <select
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className="bg-surface border border-outline-variant px-3 py-2 text-body-md text-on-surface font-mono-label focus:border-secondary focus:outline-none"
                      >
                        <option value="industrial">Industrial Vision &amp; Inspection</option>
                        <option value="sensing">Multi-Sensor Environmental Fusion</option>
                        <option value="embedded">Edge Compute &amp; NPU Quantization</option>
                        <option value="vlm">On-Device Vision-Language Reasoning</option>
                        <option value="custom-rd">Customer-Specific AI &amp; Software R&amp;D</option>
                        <option value="internship">Student Internship / Research Fellow</option>
                        <option value="academic-collab">Academic &amp; Institutional Collaboration</option>
                        <option value="other">Other Frontier Deployment</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-mono-label text-[10px] text-on-surface-variant uppercase font-bold">
                      Problem &amp; Environmental Constraints *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.constraints}
                      onChange={(e) => setFormData({ ...formData, constraints: e.target.value })}
                      placeholder="Describe the physical environment, target hardware/SoC, latency requirements, thermal/power limits, and sensing modalities..."
                      className="bg-surface border border-outline-variant px-3 py-2 text-body-md text-on-surface font-mono-label focus:border-secondary focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-widest hover:bg-surface-container-highest hover:text-on-surface transition-all border border-primary flex items-center justify-center gap-space-xs font-bold"
                  >
                    <span>Transmit Requirements</span>
                    <MaterialIcon name="arrow_forward" className="text-[16px]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
