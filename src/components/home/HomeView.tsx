import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import type { Project } from '../../data/projects';
import { CaseStudyModal } from '../work/CaseStudyModal';
import { HeroSection } from './sections/HeroSection';
import { PillarsSection } from './sections/PillarsSection';
import { ProtocolSection } from './sections/ProtocolSection';
import { FeaturedArchitecturesSection } from './sections/FeaturedArchitecturesSection';
import { EcosystemSection } from './sections/EcosystemSection';
import { DiagnosticBannerSection } from './sections/DiagnosticBannerSection';

export const HomeView: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="view-enter transition-all">
      {/* 1. EDITORIAL SPLIT HERO & ASTROLABE */}
      <HeroSection onNavigate={navigate} />

      {/* 2. THREE PILLARS OF PRACTICE */}
      <PillarsSection />

      {/* 3. 4-PHASE COMMISSIONING PROTOCOL & SCOPE FINDER */}
      <ProtocolSection onNavigate={navigate} />

      {/* 4. FEATURED ARCHITECTURES (CASE STUDIES) */}
      <FeaturedArchitecturesSection
        onNavigate={navigate}
        onSelectProject={setSelectedProject}
      />

      {/* 5. THE TRYPHEN ECOSYSTEM (R&D SANDBOX, COMMUNITY & TALENT) */}
      <EcosystemSection onNavigate={navigate} />

      {/* 6. BOTTOM COMMISSIONING CTA BANNER */}
      <DiagnosticBannerSection onNavigate={navigate} />

      {/* Case Study Modal Drawer */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};
