import React from 'react';
import { Hero } from '../components/Hero';
import { TechnologyPillars } from '../components/TechnologyPillars';
import { Applications } from '../components/Applications';
import { RDProcess } from '../components/RDProcess';
import { ReusableIP } from '../components/ReusableIP';
import { ResearchInsights } from '../components/ResearchInsights';
import { FinalCTA } from '../components/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-slate-900 dark:text-slate-100 antialiased">
      {/* 1. Hero: AI That Works Beyond the Lab */}
      <Hero />

      {/* 2. Technology: Embedded AI, Computer Vision, Intelligent Sensing, Vision-Language Models */}
      <TechnologyPillars />

      {/* 3. Applications: Agriculture, Industrial, Infrastructure, Energy */}
      <Applications />

      {/* 4. How We Work: Research → Build → Test → Deploy */}
      <RDProcess />

      {/* 5. Product Preview: Software-First Approach */}
      <ReusableIP />

      {/* 6. Research & Case Studies: Compact Preview */}
      <ResearchInsights />

      {/* 7. Contact CTA: Have a problem worth solving? */}
      <FinalCTA />
    </div>
  );
};

export default HomePage;
