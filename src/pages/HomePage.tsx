import React from 'react';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { TechnologyPillars } from '../components/TechnologyPillars';
import { ArchitectureSection } from '../components/ArchitectureSection';
import { IndianReality } from '../components/IndianReality';
import { Applications } from '../components/Applications';
import { RDProcess } from '../components/RDProcess';
import { ReusableIP } from '../components/ReusableIP';
import { CaseStudies } from '../components/CaseStudies';
import { ResearchInsights } from '../components/ResearchInsights';
import { AboutPreview } from '../components/AboutPreview';
import { FinalCTA } from '../components/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      <Hero />
      <ProblemSection />
      <TechnologyPillars />
      <ArchitectureSection />
      <IndianReality />
      <Applications />
      <RDProcess />
      <ReusableIP />
      <CaseStudies />
      <ResearchInsights />
      <AboutPreview />
      <FinalCTA />
    </div>
  );
};
