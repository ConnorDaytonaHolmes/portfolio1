import ScrollAnimations from "./components/ScrollAnimations";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <>
      <ScrollAnimations disabled={false} />

      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <FooterSection />
      </div>
    </>
  );
}

