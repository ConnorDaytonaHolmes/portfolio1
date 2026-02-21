"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import ScrollButton from "./ScrollButton";
import ProjectIcon from "./ProjectIcon";

type CardState = "title" | "expanded" | "thin" | "corner";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  link?: string;
  children: ReactNode;
  isPersonal: boolean;
  state: CardState;
  onClick: () => void;
}

/* 3-D tilt effect helper */
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 14;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -14;
    el.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg)`;
    el.style.boxShadow = `${-x * 0.8}px ${y * 0.8}px 30px rgba(45,212,191,0.12)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    el.style.boxShadow = "none";
  };

  return { ref, onMove, onLeave };
}

function TechBadge({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md mono text-xs"
      style={{
        background: "rgba(45,212,191,0.08)",
        border: "1px solid rgba(45,212,191,0.18)",
        color: "var(--text-bright)",
      }}
    >
      <Image src={src} alt={alt} width={14} height={14} unoptimized />
      {alt}
    </div>
  );
}

function ProjectCard({
  title,
  subtitle,
  link,
  children,
  isPersonal,
  state,
  onClick,
}: ProjectCardProps) {
  const tilt = useTilt();

  if (state === "corner" || state === "thin") {
    return (
      <div
        className="rounded-2xl cursor-pointer transition-all duration-700 overflow-hidden"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        onClick={onClick}
      />
    );
  }

  if (state === "title") {
    return (
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMove}
        onMouseLeave={tilt.onLeave}
        onClick={onClick}
        className="rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden h-full flex flex-col items-center justify-center p-8 relative group"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(45,212,191,0.25)";
        }}
      >
        <ProjectIcon isPersonal={isPersonal} size={22} />
        <h5
          className="heading text-center text-2xl md:text-4xl lg:text-5xl leading-tight"
          style={{ color: "var(--text)" }}
        >
          {title}
        </h5>
      </div>
    );
  }

  /* expanded */
  return (
    <div
      onClick={onClick}
      className="rounded-2xl cursor-pointer transition-all duration-700 overflow-hidden h-full flex flex-col p-7 md:p-9 relative group"
      style={{
        background: "var(--bg-card-hover)",
        border: "1px solid var(--border-bright)",
        boxShadow: "var(--teal-glow)",
      }}
    >
      <ProjectIcon isPersonal={isPersonal} size={28} />

      <h5 className="heading text-xl md:text-3xl mb-2 pr-10">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--teal)] transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {title} ↗
          </a>
        ) : (
          title
        )}
      </h5>

      <p className="mono text-xs tracking-wider mb-5" style={{ color: "var(--text-muted)" }}>
        {subtitle}
      </p>

      <div className="flex-grow overflow-auto">{children}</div>
    </div>
  );
}

/* ── Project data ── */
interface ProjectData {
  title: string;
  subtitle: string;
  link?: string;
  isPersonal: boolean;
  bullets: string[];
  tech: { src: string; alt: string }[];
}

const PROJECTS: ProjectData[] = [
  {
    title: "Picardata",
    subtitle: "Business Intelligence & Analytics Platform",
    link: "https://picardata.com",
    isPersonal: false,
    bullets: [
      "Built a utility to programmatically transform live dashboard views into formatted PPTX presentations, saving stakeholders hours of manual reporting.",
      "Engineered a comprehensive localisation framework supporting a multilingual user base with dynamic translations across the platform.",
      "Developed a modular UI featuring interactive real-time widgets for weather, currency, and stock market data.",
    ],
    tech: [
      { src: "skills/csharp.svg",     alt: "C#" },
      { src: "skills/typescript.svg", alt: "TypeScript" },
      { src: "skills/react.svg",      alt: "React" },
      { src: "skills/azure.svg",      alt: "Azure" },
    ],
  },
  {
    title: "I-VADE",
    subtitle: "VR Aggression De-escalation Training",
    link: "https://research.csiro.au/onalumni/i-vade/",
    isPersonal: false,
    bullets: [
      "Acted as project lead and lead developer across the full system.",
      "Built a React-based admin dashboard for user management and session oversight.",
      "Developed a .NET WPF desktop app to orchestrate and launch localised VR scenarios.",
      "Engineered a centralised .NET microservices backend to sync trainee performance data via RESTful APIs.",
    ],
    tech: [
      { src: "skills/csharp.svg",     alt: "C#" },
      { src: "skills/typescript.svg", alt: "TypeScript" },
      { src: "skills/react.svg",      alt: "React" },
    ],
  },
  {
    title: "Pronto",
    subtitle: "Project Scaffolding Engine (Internal Tool)",
    isPersonal: false,
    bullets: [
      "Spearheaded an automated 'Zero-to-Deployed' provisioning tool that cut new client project setup from days to under 30 minutes.",
      "Built a configurable wizard for engineers to select infrastructure including CRMs, microservices, and notification layers.",
      "Scripted provisioning of Azure resources, repo forks, DNS records and proxies.",
      "Integrated Postmark API for automated email template deployment with full CI/CD pipelines.",
    ],
    tech: [
      { src: "skills/typescript.svg", alt: "TypeScript" },
      { src: "skills/azure.svg",      alt: "Azure" },
      { src: "skills/bash.svg",       alt: "Bash" },
      { src: "skills/cloudflare.svg", alt: "Cloudflare" },
    ],
  },
  {
    title: "Mul-Ty-Player",
    subtitle: "Video Game Mod",
    link: "https://github.com/xMcacutt/Mul-Ty-Player",
    isPersonal: true,
    bullets: [
      "Collaborated with a small team to transform a single-player game into a fully-featured multiplayer experience using .NET WPF.",
      "Used process & memory manipulation, DLL injection, and socket connections for host/join/play functionality.",
      "Implemented client-side prediction and server-side reconciliation to minimise latency.",
      "Used performance profilers to resolve memory leaks and increase server-side runtime performance by 96%.",
    ],
    tech: [
      { src: "skills/csharp.svg",  alt: "C#" },
      { src: "skills/python.svg",  alt: "Python" },
      { src: "skills/cpp.svg",     alt: "C++" },
    ],
  },
];

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const toggle = (i: number) => setExpanded(expanded === i ? null : i);

  const getTemplate = () => {
    if (isMobile) return { rows: "1fr", cols: "1fr" };
    const thin = "56px";
    const big = `calc(100% - 2rem - ${thin})`;
    switch (expanded) {
      case 0: return { rows: `${big} ${thin}`, cols: `${big} ${thin}` };
      case 1: return { rows: `${big} ${thin}`, cols: `${thin} ${big}` };
      case 2: return { rows: `${thin} ${big}`, cols: `${big} ${thin}` };
      case 3: return { rows: `${thin} ${big}`, cols: `${thin} ${big}` };
      default: return { rows: "1fr 1fr", cols: "1fr 1fr" };
    }
  };

  const getState = (i: number): CardState => {
    if (expanded === null) return "title";
    if (expanded === i) return "expanded";
    const row = Math.floor(i / 2);
    const col = i % 2;
    const er = Math.floor(expanded / 2);
    const ec = expanded % 2;
    return row === er || col === ec ? "thin" : "corner";
  };

  const tmpl = getTemplate();

  return (
    <section className="min-h-screen py-24 px-6 md:px-16 relative" id="projects">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--teal), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-section">
          <p className="mono text-xs tracking-[0.25em] uppercase text-[var(--teal)] mb-3">
            02 / Projects
          </p>
          <h2 className="heading text-5xl md:text-7xl leading-none">Projects</h2>
        </div>

        {/* Grid */}
        <div
          className="grid lg:h-[640px] gap-8 fade-in-section delay-100"
          style={{
            gridTemplateRows: tmpl.rows,
            gridTemplateColumns: tmpl.cols,
            transition:
              "grid-template-rows 0.7s cubic-bezier(0.4,0,0.2,1), grid-template-columns 0.7s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              subtitle={p.subtitle}
              link={p.link}
              isPersonal={p.isPersonal}
              state={isMobile ? "expanded" : getState(i)}
              onClick={() => toggle(i)}
            >
              <ul className="flex flex-col gap-2.5 mb-5 flex-grow">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed">
                    <span style={{ color: "var(--teal)", marginTop: "2px", flexShrink: 0 }}>›</span>
                    <span style={{ color: "var(--text-bright)" }}>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map((t) => (
                  <TechBadge key={t.alt} {...t} />
                ))}
              </div>
            </ProjectCard>
          ))}
        </div>
      </div>

      <ScrollButton target="skills" />
    </section>
  );
}
