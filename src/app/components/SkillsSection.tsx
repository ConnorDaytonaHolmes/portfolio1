"use client";
import Image from "next/image";

const codeSkills = [
  { icon: 'skills/typescript.svg', alt: 'TypeScript' },
  { icon: 'skills/csharp.svg', alt: 'C#' },
  { icon: 'skills/sql.svg', alt: 'SQL' },
  { icon: 'skills/python.svg', alt: 'Python' },
  { icon: 'skills/react.svg', alt: 'React' },
  { icon: 'skills/bash.svg', alt: 'Bash' },
  { icon: 'skills/java.svg', alt: 'Java' },
  { icon: 'skills/rust.svg', alt: 'Rust' },
  { icon: 'skills/go.svg', alt: 'Go' },
  { icon: 'skills/cpp.svg', alt: 'C++' },
];

const techSkills = [
  { icon: 'skills/git.svg', alt: 'Git' },
  { icon: 'skills/azure.svg', alt: 'Azure' },
  { icon: 'skills/docker.svg', alt: 'Docker' },
  { icon: 'skills/jira.svg', alt: 'Jira' },
];

// Pre-calculate positions to avoid hydration mismatch
const codePositions = codeSkills.map((_, index) => {
  const angle = (index / codeSkills.length) * 2 * Math.PI;
  return {
    x: Math.round(1000 * Math.cos(angle) * 50) / 1000,
    y: Math.round(1000 * Math.sin(angle) * 50) / 1000,
  };
});

const techPositions = techSkills.map((_, index) => {
  const angle = (index / techSkills.length) * 2 * Math.PI;
  return {
    x: Math.cos(angle) * 50,
    y: Math.sin(angle) * 50,
  };
});

export default function SkillsSection() {

  return (
    <section className="flex flex-col items-center w-screen" id='skills' style={{ height: 'calc(100vh - 144px)' }}>
      <img className="absolute w-screen h-screen -z-999 brightness-15 left-0"
        src="bg2.png" 
        alt="Background"/>
      <h2 className="heading text-6xl md:text-8xl mb-6 text-center 3xl:mt-20 mt-10">
        Skills
      </h2>

      { /* MOBILE */ }
      <div className="flex flex-col gap-8 md:hidden py-10 justify-center flex-grow-1">
        <div className="flex flex-col w-full overflow-hidden gap-y-12">
          
          {/* Row 1 */}
          <div className="flex animate-marquee-infinite whitespace-nowrap gap-8 justify-center">
            {/* We duplicate the array to create a seamless loop */}
            {codeSkills.slice(0, 3).map((skill, i) => {
              return (
                <div key={`${0}-${i}`} className="flex-shrink-0">
                  <SkillIcon icon={skill.icon} alt={skill.alt} />
                </div>
              );
            })}
          </div>
          
          {/* Row 2 */}
          <div className="flex animate-marquee-infinite whitespace-nowrap gap-8 justify-center">
            {/* We duplicate the array to create a seamless loop */}
            {codeSkills.slice(3, 7).map((skill, i) => {
              return (
                <div key={`${0}-${i}`} className="flex-shrink-0">
                  <SkillIcon icon={skill.icon} alt={skill.alt} />
                </div>
              );
            })}
          </div>
          
          {/* Row 3 */}
          <div className="flex animate-marquee-infinite whitespace-nowrap gap-8 justify-center">
            {/* We duplicate the array to create a seamless loop */}
            {codeSkills.slice(7).map((skill, i) => {
              return (
                <div key={`${0}-${i}`} className="flex-shrink-0">
                  <SkillIcon icon={skill.icon} alt={skill.alt} />
                </div>
              );
            })}
          </div>
          
          {/* Row 4 */}
          <div className="flex animate-marquee-infinite whitespace-nowrap gap-8 justify-center">
            {/* We duplicate the array to create a seamless loop */}
            {techSkills.map((skill, i) => {
              return (
                <div key={`${0}-${i}`} className="flex-shrink-0">
                  <SkillIcon icon={skill.icon} alt={skill.alt} />
                </div>
              );
            })}
          </div>       
        </div>
      </div>
      
      { /* DESKTOP */ }
      <div className="relative w-full h-full items-center justify-center hidden md:flex">
        {/* CODE Skills - Outer Circle (60% of screen height) */}
        <div className="absolute animate-spin-slow-clockwise border-1 border-gray-200/10 rounded-full
          w-[60vh] h-[60vh]">
          {codeSkills.map((skill, index) => {
            const { x, y } = codePositions[index];
            return (
              <div
                key={skill.alt}
                className="absolute"
                style={{
                  left: `${50 + x}%`,
                  top: `${50 + y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="animate-spin-slow-counter">
                  <SkillIcon icon={skill.icon} alt={skill.alt} />
                </div>
              </div>
            );
          })}
        </div>

        {/* TECH Skills - Inner Circle (30% of screen height, half the size) */}
        <div className="absolute animate-spin-slow-counter  border-1 border-gray-200/10 rounded-full w-[30vh] h-[30vh]">
          {techSkills.map((skill, index) => {
            const { x, y } = techPositions[index];
            return (
              <div
                key={skill.alt}
                className="absolute"
                style={{
                  left: `${50 + x}%`,
                  top: `${50 + y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="animate-spin-slow-clockwise">
                  <SkillIcon icon={skill.icon} alt={skill.alt} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ icon, alt }: { icon: string; alt: string }) {
  const size = 64;
  return (
    <div className="flex flex-col items-center justify-center group relative" style={{ width: size, height: size }}>
      <div className="transition-all duration-300 transform group-hover:scale-175 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
        <Image src={icon} alt={alt} width={size} height={size} unoptimized style={{ width: size, height: size }} />
      </div>
      <div className="absolute top-full mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-300 text-center whitespace-nowrap">
        {alt}
      </div>
    </div>
  );
}


