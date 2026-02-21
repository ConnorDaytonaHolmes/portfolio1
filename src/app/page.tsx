"use client";

import { useState } from "react";
import ScrollAnimations from "./components/ScrollAnimations";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import FooterSection from "./components/FooterSection";
import EmailFormModal from "./components/EmailFormModal";

export default function Home() {
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <>
      <ScrollAnimations disabled={false} />
      <NavBar />
      <EmailFormModal open={emailOpen} onClose={() => setEmailOpen(false)} />

      <div className="flex flex-col min-h-screen overflow-hidden">
        <HeroSection onContact={() => setEmailOpen(true)} />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <FooterSection onContact={() => setEmailOpen(true)} />
      </div>
    </>
  );
}
