"use client";

import Image from "next/image";

const CODE_SKILLS = [
  { icon: "skills/typescript.svg", alt: "TypeScript" },
  { icon: "skills/csharp.svg",     alt: "C#" },
  { icon: "skills/sql.svg",        alt: "SQL" },
  { icon: "skills/python.svg",     alt: "Python" },
  { icon: "skills/react.svg",      alt: "React" },
  { icon: "skills/bash.svg",       alt: "Bash" },
  { icon: "skills/java.svg",       alt: "Java" },
  { icon: "skills/rust.svg",       alt: "Rust" },
  { icon: "skills/go.svg",         alt: "Go" },
  { icon: "skills/cpp.svg",        alt: "C++" },
];

const TECH_SKILLS = [
  { icon: "skills/git.svg",    alt: "Git" },
  { icon: "skills/azure.svg",  alt: "Azure" },
  { icon: "skills/docker.svg", alt: "Docker" },
  { icon: "skills/jira.svg",   alt: "Jira" },
];

/* Pre-compute orbit positions (avoids hydration mismatch) */
const codePositions = CODE_SKILLS.map((_, i) => {
  const a = (i / CODE_SKILLS.length) * 2 * Math.PI;
  return { x: Math.round(Math.cos(a) * 50000) / 1000, y: Math.round(Math.sin(a) * 50000) / 1000 };
});

const techPositions = TECH_SKILLS.map((_, i) => {
  const a = (i / TECH_SKILLS.length) * 2 * Math.PI;
  return { x: Math.round(Math.cos(a) * 50000) / 1000, y: Math.round(Math.sin(a) * 50000) / 1000 };
});

function SkillIcon({ icon, alt }: { icon: string; alt: string }) {
  return (
    <div className="flex flex-col items-center justify-center group relative w-14 h-14">
      <div
        className="transition-all duration-300"
        style={{ transformOrigin: "center" }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = "scale(1.7)";
          el.style.filter = "drop-shadow(0 0 10px rgba(45,212,191,0.6))";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = "scale(1)";
          el.style.filter = "none";
        }}
      >
        <Image src={icon} alt={alt} width={52} height={52} unoptimized style={{ width: 52, height: 52 }} />
      </div>
      <div
        className="absolute top-full mt-4 mono text-[10px] tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ color: "var(--teal)" }}
      >
        {alt}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      className="flex flex-col items-center w-screen py-24 relative"
      style={{ minHeight: "calc(100vh - 80px)" }}
      id="skills"
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--teal), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="mb-10 fade-in-section">
          <p className="mono text-xs tracking-[0.25em] uppercase text-[var(--teal)] mb-3">
            03 / Skills
          </p>
          <h2 className="heading text-5xl md:text-7xl leading-none">Skills</h2>
        </div>
      </div>

      {/* ── Mobile: stacked marquee rows ── */}
      <div className="flex flex-col gap-10 md:hidden py-8 w-full overflow-hidden">
        {[
          CODE_SKILLS.slice(0, 4),
          CODE_SKILLS.slice(4, 7),
          CODE_SKILLS.slice(7),
          TECH_SKILLS,
        ].map((row, ri) => (
          <div key={ri} className="flex gap-8 animate-marquee-infinite whitespace-nowrap">
            {[...row, ...row].map((skill, si) => (
              <div key={si} className="flex-shrink-0">
                <SkillIcon icon={skill.icon} alt={skill.alt} />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ── Desktop: concentric orbital rings ── */}
      <div className="relative flex-grow w-full items-center justify-center hidden md:flex">

        {/* Outer orbit – Languages */}
        <div
          className="absolute animate-spin-slow-clockwise rounded-full"
          style={{
            width: "62vh",
            height: "62vh",
            border: "1px solid rgba(45,212,191,0.15)",
          }}
        >
          {CODE_SKILLS.map((skill, i) => (
            <div
              key={skill.alt}
              className="absolute"
              style={{
                left: `${50 + codePositions[i].x}%`,
                top:  `${50 + codePositions[i].y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="animate-spin-slow-counter">
                <SkillIcon icon={skill.icon} alt={skill.alt} />
              </div>
            </div>
          ))}

          {/* Outer ring label */}
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 mono text-[9px] tracking-[0.3em] uppercase animate-spin-slow-counter"
            style={{ color: "rgba(45,212,191,0.4)" }}
          >
            Languages &amp; Frameworks
          </div>
        </div>

        {/* Inner orbit – Tools */}
        <div
          className="absolute animate-spin-slow-counter rounded-full"
          style={{
            width: "30vh",
            height: "30vh",
            border: "1px solid rgba(45,212,191,0.22)",
          }}
        >
          {TECH_SKILLS.map((skill, i) => (
            <div
              key={skill.alt}
              className="absolute"
              style={{
                left: `${50 + techPositions[i].x}%`,
                top:  `${50 + techPositions[i].y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="animate-spin-slow-clockwise">
                <SkillIcon icon={skill.icon} alt={skill.alt} />
              </div>
            </div>
          ))}
          
          {/* Inner ring label */}
          <div
            className="absolute top-7 right-1 mono text-[9px] tracking-[0.3em] uppercase animate-spin-slow-clockwise"
            style={{ color: "rgba(45,212,191,0.4)" }}
          >
            Technologies
          </div>
        </div>

        {/* Central glowing core */}
        <div className="absolute flex items-center justify-center">
          <div
            className="rounded-full animate-pulse-core"
            style={{
              width: "64px",
              height: "64px",
              background: "radial-gradient(circle, rgba(45,212,191,0.35) 0%, transparent 70%)",
              border: "1px solid rgba(45,212,191,0.3)",
            }}
          />
          <div
            className="absolute rounded-full animate-pulse-ring"
            style={{
              width: "96px",
              height: "96px",
              border: "1px solid rgba(45,212,191,0.15)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
