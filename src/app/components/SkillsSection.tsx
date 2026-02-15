import Image from "next/image";

export default function SkillsSection() {
  return (
    <section className="py-20 px-8 md:px-20" id='skills'>
      <h2 className="heading text-3xl md:text-4xl mb-12 text-center">
        Skills
      </h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-16">
        { /* Programming Languages */ }
        <div className="fade-in-section flex flex-wrap justify-center gap-8">
          <SkillIcon icon='skills/typescript.svg' alt='TypeScript' />
          <SkillIcon icon="skills/csharp.svg" alt="C#" />
          <SkillIcon icon="skills/sql.svg" alt="SQL" />
          <SkillIcon icon="skills/python.svg" alt="Python" />
          <SkillIcon icon="skills/react.svg" alt="React" />
          <SkillIcon icon="skills/bash.svg" alt="Bash" />
          <SkillIcon icon="skills/java.svg" alt="Java" />
          <SkillIcon icon="skills/rust.svg" alt="Rust" />
          <SkillIcon icon="skills/go.svg" alt="Go" />
          <SkillIcon icon="skills/cpp.svg" alt="C++" />
        </div>
        <hr className='fade-in-section delay-100 bg-gray-200'/>
        { /* Other Technologies */ }
        <div className="fade-in-section delay-200 flex flex-wrap justify-center gap-8">
          <SkillIcon icon="skills/git.svg" alt="Git" />
          <SkillIcon icon='skills/azure.svg' alt='Azure' />
          <SkillIcon icon="skills/docker.svg" alt="Docker" />
          <SkillIcon icon="skills/jira.svg" alt="Jira" />
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ icon, alt }: { icon: string; alt: string }) {
  const size = 48;
  return (
    <div className="flex flex-col items-center justify-center group relative">
      <div className="transition-all duration-300 transform group-hover:scale-175 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
        <Image src={icon} alt={alt} width={size} height={size} unoptimized />
      </div>
      <div className="absolute top-full mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-300 text-center whitespace-nowrap">
        {alt}
      </div>
    </div>
  );
}


