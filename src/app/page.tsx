"use client";

import { useRef } from "react";
import ScrollAnimations from "./components/ScrollAnimations";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  const experienceSectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <ScrollAnimations disabled={false} />

      <div className="flex flex-col min-h-screen">
        <HeroSection nextSectionRef={experienceSectionRef} />
        <ExperienceSection ref={experienceSectionRef} />
        <ProjectsSection />
        <SkillsSection />
        <FooterSection />
      </div>
    </>
  );
}

