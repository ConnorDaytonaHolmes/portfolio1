"use client";

import { useEffect, useRef, useState } from "react";
import ParticleCanvas from "./ParticleCanvas";
import ScrollButton from "./ScrollButton";

/* ── Typewriter code tokens ─────────────────────────────────── */
const CODE_TOKENS = [
  { t: "const",             c: "#79c0ff" },
  { t: " engineer",         c: "#ffa657" },
  { t: " = {\n",            c: "#c9d1d9" },
  { t: "  name",            c: "#79c0ff" },
  { t: ": ",                c: "#c9d1d9" },
  { t: '"Connor Holmes"',   c: "#a5d6ff" },
  { t: ",\n",               c: "#c9d1d9" },
  { t: "  role",            c: "#79c0ff" },
  { t: ": ",                c: "#c9d1d9" },
  { t: '"Software Engineer"', c: "#a5d6ff" },
  { t: ",\n",               c: "#c9d1d9" },
  { t: "  company",         c: "#79c0ff" },
  { t: ": ",                c: "#c9d1d9" },
  { t: '"Redi Software"',   c: "#a5d6ff" },
  { t: ",\n",               c: "#c9d1d9" },
  { t: "  location",        c: "#79c0ff" },
  { t: ": ",                c: "#c9d1d9" },
  { t: '"Perth, AU"',       c: "#a5d6ff" },
  { t: ",\n",               c: "#c9d1d9" },
  { t: "  skills",          c: "#79c0ff" },
  { t: ": [\n    ",         c: "#c9d1d9" },
  { t: '"TypeScript"',      c: "#a5d6ff" },
  { t: ", ",                c: "#c9d1d9" },
  { t: '"C#"',              c: "#a5d6ff" },
  { t: ",\n    ",           c: "#c9d1d9" },
  { t: '"React"',           c: "#a5d6ff" },
  { t: ", ",                c: "#c9d1d9" },
  { t: '"Azure"',           c: "#a5d6ff" },
  { t: ",\n  ],\n",         c: "#c9d1d9" },
  { t: "  available",       c: "#79c0ff" },
  { t: ": ",                c: "#c9d1d9" },
  { t: "true",              c: "#ff7b72" },
  { t: ",\n",               c: "#c9d1d9" },
  { t: "};",                c: "#c9d1d9" },
];

const TOTAL_CHARS = CODE_TOKENS.reduce((s, tk) => s + tk.t.length, 0);

function CodeTerminal() {
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCharIndex((prev) => {
          if (prev >= TOTAL_CHARS) {
            clearInterval(interval);
            setDone(true);
            return TOTAL_CHARS;
          }
          return prev + 1;
        });
      }, 21);
    }, 900);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  /* render only the visible portion of each token */
  const renderTokens = () => {
    let consumed = 0;
    return CODE_TOKENS.map((tk, i) => {
      if (consumed >= charIndex) return null;
      const visible = tk.t.slice(0, charIndex - consumed);
      consumed += tk.t.length;
      return (
        <span key={i} style={{ color: tk.c }}>
          {visible}
        </span>
      );
    });
  };

  return (
    <div className="glass rounded-2xl overflow-hidden w-full max-w-[420px] animate-float-gentle">
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.03]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57] opacity-80" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e] opacity-80" />
        <span className="w-3 h-3 rounded-full bg-[#28c840] opacity-80" />
        <span className="mono text-[10px] text-[var(--text-muted)] ml-2 tracking-wider">
          profile.ts
        </span>
      </div>

      {/* Code body */}
      <div className="p-5 md:p-6">
        <pre
          className="mono text-xs md:text-sm leading-6 whitespace-pre"
          aria-label="Connor Holmes profile code"
        >
          {renderTokens()}
          {/* blinking cursor */}
          <span
            className={done ? "animate-blink-cursor" : ""}
            style={{
              display: "inline-block",
              width: "2px",
              height: "1em",
              background: "var(--teal)",
              marginLeft: "1px",
              verticalAlign: "middle",
            }}
          />
        </pre>
      </div>
    </div>
  );
}

/* ── Rotating title words ───────────────────────────────────── */
const PREFIXES = ["Software", "Web", "Systems"];
const AFFIXES  = ["Engineer", "Developer", "Architect"];

export default function HeroSection({ onContact }: { onContact: () => void }) {
  const [pIdx, setPIdx] = useState(0);
  const [aIdx, setAIdx] = useState(0);
  const [pFade, setPFade] = useState(false);
  const [aFade, setAFade] = useState(false);

  useEffect(() => {
    const aInt = setInterval(() => {
      setAFade(true);
      setTimeout(() => { setAIdx((p) => (p + 1) % AFFIXES.length); setAFade(false); }, 550);
    }, 4000);
    const pTO = setTimeout(() => {
      const pInt = setInterval(() => {
        setPFade(true);
        setTimeout(() => { setPIdx((p) => (p + 1) % PREFIXES.length); setPFade(false); }, 550);
      }, 4000);
      return () => clearInterval(pInt);
    }, 2000);
    return () => { clearInterval(aInt); clearTimeout(pTO); };
  }, []);

  const scrollToWork = () =>
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Particle network background */}
      <ParticleCanvas />

      {/* Subtle radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(6,9,16,0.8) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pt-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">

          {/* ── Left: main copy ─────────────────────────────── */}
          <div className="flex flex-col max-w-xl">
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mono tracking-widest mb-8 w-fit"
              style={{
                border: "1px solid rgba(45,212,191,0.3)",
                background: "rgba(45,212,191,0.08)",
                color: "var(--teal-bright)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--teal)] animate-pulse-core" />
              Available for opportunities
            </div>

            {/* Name */}
            <h1
              className="heading gradient-text leading-[0.9] tracking-tight mb-6"
              style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
            >
              Connor
              <br />
              Holmes
            </h1>

            {/* Rotating title */}
            <div className="flex items-center gap-3 mb-5 h-9 md:h-10">
              <span
                className={`heading text-xl md:text-2xl transition-opacity duration-[550ms] ${
                  pFade ? "opacity-0" : "opacity-70"
                }`}
              >
                {PREFIXES[pIdx]}
              </span>
              <span className="w-px h-5 bg-[var(--border-bright)] opacity-60" />
              <span
                className={`heading text-xl md:text-2xl transition-opacity duration-[550ms] ${
                  aFade ? "opacity-0" : "opacity-70"
                }`}
              >
                {AFFIXES[aIdx]}
              </span>
            </div>

            {/* Location */}
            <p className="mono text-sm tracking-[0.15em] text-[var(--text-bright)] mb-10 uppercase">
              Perth, Australia
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToWork}
                className="px-7 py-3 rounded-lg text-sm mono tracking-wider transition-all duration-300 cursor-pointer"
                style={{
                  background: "var(--teal)",
                  color: "#060910",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "var(--teal-bright)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 24px rgba(45,212,191,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "var(--teal)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                }}
              >
                View My Work
              </button>

              <button
                onClick={onContact}
                className="px-7 py-3 rounded-lg text-sm mono tracking-wider transition-all duration-300 glass glass-hover cursor-pointer"
                style={{ color: "var(--text)" }}
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* ── Right: code terminal (desktop) ─────────────── */}
          <div className="hidden lg:flex lg:justify-end lg:flex-shrink-0">
            <CodeTerminal />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <ScrollButton target="experience" delayed={true} />
      </div>
    </section>
  );
}
