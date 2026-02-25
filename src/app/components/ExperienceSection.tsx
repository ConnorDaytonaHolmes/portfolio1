"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faInfinity,
  faDatabase,
  faShield,
  faUserLock,
  faServer,
  faUsers,
  faChartLine,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import ScrollButton from "./ScrollButton";

interface Experience {
  icon: IconDefinition;
  title: string;
  description: string;
  side: "left" | "right";
}

const EXPERIENCES: Experience[] = [
  {
    icon: faPalette,
    title: "UI / UX",
    description:
      "Design and build polished, responsive user interfaces using React and CSS media queries, ensuring cross-browser compatibility and accessibility on desktop, tablet and mobile devices.",
    side: "left",
  },
  {
    icon: faInfinity,
    title: "CI / CD",
    description:
      "Optimise CI/CD deployment pipelines using custom Docker images, caching and parallelisation to reduce build times and compute costs by up to 30%.",
    side: "right",
  },
  {
    icon: faDatabase,
    title: "Database",
    description:
      "Architect relational database schemas, write performant T-SQL queries and stored procedures, and create indexes for optimised query performance in high-throughput applications.",
    side: "left",
  },
  {
    icon: faShield,
    title: "Security",
    description:
      "Manage cloud resource security via Azure RBAC, configuring Managed Identities and Service Principals to enforce least-privilege across development and production environments.",
    side: "right",
  },
  {
    icon: faUserLock,
    title: "Authentication",
    description:
      "Implement robust authentication and authorisation frameworks using .NET Identity and JWT bearer tokens, defining granular role-based claims and custom security policies.",
    side: "left",
  },
  {
    icon: faServer,
    title: "Microservices",
    description:
      "Architect and maintain scalable RESTful microservices using ASP.NET Core, implementing efficient controller patterns and middleware for complex business logic in high-traffic applications.",
    side: "right",
  },
  {
    icon: faUsers,
    title: "Mentoring",
    description:
      "Onboard interns, conduct thorough code reviews, and deliver constructive feedback and performance reports to help junior engineers grow.",
    side: "left",
  },
  {
    icon: faChartLine,
    title: "Azure Functions",
    description:
      "Engineered 20+ queue-triggered Azure Functions to synchronise data from third-party APIs (HubSpot, Google Ads, PayPal) into a centralised BI platform, with async processing for high-volume ingestion.",
    side: "right",
  },
  {
    icon: faKey,
    title: "OAuth 2.0",
    description:
      "Developed a sophisticated OAuth 2.0 & API Key management system including the full three-legged authorisation flow and a 'base' function architecture automating Azure Key Vault token retrieval and state validation.",
    side: "left",
  },
];

function TimelineCard({
  icon,
  title,
  description,
  index,
  side,
}: Experience & { index: number }) {
  return (
    <div
      className="glass glass-hover rounded-xl p-5 md:p-6 fade-in-section"
      style={{ transitionDelay: `${(index % 5) * 80}ms` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "var(--teal-dim)" }}
        >
          <FontAwesomeIcon icon={icon} style={{ color: "var(--teal)" }} />
        </div>
        <h4 className="heading text-base md:text-lg font-semibold leading-tight">
          {title}
        </h4>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-bright)" }}>
        {description}
      </p>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="min-h-screen py-24 px-6 md:px-16 relative" id="experience">
      {/* Subtle top gradient */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--teal), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* ── Section header ── */}
        <div className="mb-14 fade-in-section">
          <p className="mono text-xs tracking-[0.25em] uppercase text-[var(--teal)] mb-3">
            01 / Experience
          </p>
          <h2 className="heading text-5xl md:text-7xl leading-none">Experience</h2>
        </div>

        {/* ── Company badge ── */}
        <div
          className="flex flex-wrap items-center gap-6 mb-14 p-5 rounded-2xl fade-in-section delay-100"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="flex items-center gap-4">
            <Image
              src="icons/redisoftware.svg"
              alt="Redi Software"
              width={48}
              height={48}
              unoptimized
              priority
            />
            <div>
              <h3 className="text-lg md:text-xl font-semibold">Redi Software</h3>
              <p className="mono text-xs text-[var(--text-muted)] tracking-wider">
                Perth, Western Australia
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1 md:ml-auto text-sm">
            <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
              Intern
              <i className="ml-3 mono" style={{ color: "var(--text-bright)" }}>
                Feb 2024 – May 2024
              </i>
            </span>
            <span style={{ color: "var(--text)", fontSize: "0.85rem" }}>
              Junior Software Developer
              <i className="ml-3 mono text-xs" style={{ color: "var(--teal)" }}>
                Aug 2024 – Present
              </i>
            </span>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Center vertical line (desktop) */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block timeline-center"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {EXPERIENCES.map((exp, i) => (
              <div key={exp.title} className="relative">

                {/* Mobile: single column with left accent */}
                <div
                  className="md:hidden pl-6 relative fade-in-section"
                  style={{ transitionDelay: `${(i % 5) * 90}ms` }}
                >
                  {/* vertical left line */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[1.5px]"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, var(--teal) 20%, var(--teal) 80%, transparent)",
                    }}
                    aria-hidden="true"
                  />
                  {/* dot */}
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(50%-0.75px)] w-2.5 h-2.5 rounded-full"
                    style={{
                      background: "var(--teal)",
                      boxShadow: "0 0 10px rgba(45,212,191,0.6)",
                    }}
                    aria-hidden="true"
                  />
                  <TimelineCard {...exp} index={i} />
                </div>

                {/* Desktop: alternating L/R */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-12">
                  {/* Left column */}
                  <div className="pr-8">
                    {exp.side === "left" && (
                      <TimelineCard {...exp} index={i} />
                    )}
                  </div>

                  {/* Right column */}
                  <div className="pl-8">
                    {exp.side === "right" && (
                      <TimelineCard {...exp} index={i} />
                    )}
                  </div>

                  {/* Dot on center line */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-3 h-3 rounded-full"
                    style={{
                      background: "var(--teal)",
                      boxShadow: "0 0 12px rgba(45,212,191,0.7)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ScrollButton target="projects" />
    </section>
  );
}
