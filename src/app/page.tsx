import ScrollAnimations from "./components/ScrollAnimations";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <>
      <ScrollAnimations disabled />

      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <FooterSection />
      </div>
    </>
  );
}

