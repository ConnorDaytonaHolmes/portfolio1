"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Experience", id: "experience" },
  { label: "Projects",   id: "projects" },
  { label: "Skills",     id: "skills" },
  { label: "Contact",    id: "footer" },
];

export default function NavBar() {
  const [scrolled, setScrolled]         = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen]           = useState(false);
  const [visitorName, setVisitorName]     = useState<string | null>(null);

  useEffect(() => {
    setVisitorName(localStorage.getItem("visitor_name"));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }),
      { rootMargin: "-25% 0px -65% 0px" }
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#060910]/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mono text-base font-bold tracking-[0.2em] text-[var(--teal)] hover:opacity-70 transition-opacity cursor-pointer"
          aria-label="Scroll to top"
        >
          CH
        </button>

        {/* Welcome back message (center) */}
        {visitorName && (
          <p
            className="absolute left-1/2 -translate-x-1/2 hidden md:block mono text-xs tracking-[0.15em] pointer-events-none"
            style={{ color: "var(--text-muted)" }}
          >
            Welcome back,{" "}
            <span style={{ color: "var(--teal)" }}>{visitorName}</span>
          </p>
        )}

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, id }) => {
            const active = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`mono text-xs tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer ${
                  active
                    ? "text-[var(--teal)]"
                    : "text-[var(--text-bright)] hover:text-[var(--text)]"
                }`}
              >
                {active && (
                  <span className="text-[var(--teal)] mr-1.5 text-sm">›</span>
                )}
                {label}
              </button>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-[var(--text)] transition-transform duration-300 origin-left ${
              menuOpen ? "rotate-45 translate-y-[-1px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[var(--text)] transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[var(--text)] transition-transform duration-300 origin-left ${
              menuOpen ? "-rotate-45 translate-y-[1px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#060910]/95 backdrop-blur-xl border-t border-white/[0.06] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`mono text-xs tracking-[0.18em] uppercase text-left transition-colors cursor-pointer ${
                activeSection === id
                  ? "text-[var(--teal)]"
                  : "text-[var(--text-bright)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
