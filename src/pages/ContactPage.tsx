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
      <section className="w-full px-margin-mobile lg:px-margin py-16 lg:py-20 border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant pb-4 text-xs font-semibold text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="tracking-widest uppercase text-secondary font-bold">CONTACT</span>
              <span className="text-outline">|</span>
              <span>DIRECT ENGINEERING INQUIRY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-secondary/10 text-secondary border border-secondary/20 px-2.5 py-0.5 rounded text-xs font-semibold">
                TYPICAL RESPONSE &lt; 24 HOURS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6 flex flex-col gap-4">
              <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
                Start a conversation <br className="hidden sm:inline" />
                <span className="text-secondary">with our lab.</span>
              </h1>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Whether you need embedded computer vision on custom silicon, multi-sensor environmental fusion, or on-device vision-language models, let’s discuss your technical constraints.
              </p>

              <div className="bg-surface-container rounded-xl border border-outline-variant p-6 flex flex-col gap-4 text-sm mt-2">
                <div className="flex items-center justify-between border-b border-outline-variant pb-3 text-xs font-semibold">
                  <span className="text-secondary uppercase tracking-wider">Direct Communication Channels</span>
                  <span className="text-on-surface-variant">Lab Direct</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Email:</span>
                    <a href="mailto:contact@encepto.ai" className="text-secondary font-semibold hover:underline">
                      contact@encepto.ai
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Lab Status:</span>
                    <span className="text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                      <span>Operational</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Core Disciplines:</span>
                    <span className="text-on-surface text-xs font-medium">Embedded AI · Vision · Sensing · VLMs</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  className="text-sm font-semibold text-secondary hover:underline flex items-center gap-1"
                  to="/technology"
                >
                  <span>Explore Our Technology First</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="lg:col-span-6 bg-surface-container rounded-2xl border border-outline-variant p-6 sm:p-8 shadow-sm">
              {formSubmitted ? (
                <div className="py-8 px-4 flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center font-bold shadow-md">
                    <MaterialIcon name="check" className="text-[28px]" />
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface">Inquiry Dispatched</h3>
                  <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
                    Thank you, {formData.name || 'Partner'}. Your requirements have been received. Our engineering team will review your specifications and get in touch at {formData.email || 'your email'}.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 px-5 py-2.5 bg-surface rounded border border-outline-variant text-xs uppercase tracking-wider text-on-surface font-semibold hover:bg-surface-container-high transition-colors"
                    type="button"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-outline-variant pb-3 text-xs font-semibold">
                    <span className="text-secondary uppercase tracking-wider">Technical Inquiry Form</span>
                    <span className="text-on-surface-variant">Direct to Engineering</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Eng. Jane Doe"
                        className="bg-surface rounded-lg border border-outline-variant px-3.5 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@organization.com"
                        className="bg-surface rounded-lg border border-outline-variant px-3.5 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant">
                        Organization / University
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Enterprise or lab name"
                        className="bg-surface rounded-lg border border-outline-variant px-3.5 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant">
                        Primary Focus Domain
                      </label>
                      <select
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className="bg-surface rounded-lg border border-outline-variant px-3.5 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors"
                      >
                        <option value="industrial">Industrial Vision &amp; Inspection</option>
                        <option value="sensing">Multi-Sensor Environmental Fusion</option>
                        <option value="embedded">Edge Compute &amp; NPU Quantization</option>
                        <option value="vlm">On-Device Vision-Language Reasoning</option>
                        <option value="custom-rd">Custom AI &amp; Software Engineering</option>
                        <option value="internship">Student Internship / Research Fellowship</option>
                        <option value="academic-collab">Academic &amp; Institutional Collaboration</option>
                        <option value="other">Other Real-World Deployment</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-on-surface-variant">
                      Problem &amp; Operating Constraints *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.constraints}
                      onChange={(e) => setFormData({ ...formData, constraints: e.target.value })}
                      placeholder="Describe the physical operating environment, target hardware/SoC, latency requirements, thermal/power limits, and sensing modalities..."
                      className="bg-surface rounded-lg border border-outline-variant px-3.5 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center justify-center gap-2 mt-2"
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

