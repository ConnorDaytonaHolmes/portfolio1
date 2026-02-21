"use client";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface FooterSectionProps {
  onContact: () => void;
}

export default function FooterSection({ onContact }: FooterSectionProps) {
  return (
    <footer
      className="relative py-20 px-8 md:px-16"
      id="footer"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Subtle top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--teal), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center fade-in-section">
          <p className="mono text-xs tracking-[0.25em] uppercase text-[var(--teal)] mb-3">
            04 / Contact
          </p>
          <h2 className="heading text-4xl md:text-6xl gradient-text mb-3 leading-tight">
            Let&rsquo;s Connect
          </h2>
          <p className="text-sm max-w-xs text-center leading-relaxed justify-self-center" style={{ color: "var(--text-bright)" }}>
            Open to new opportunities and collaborations.
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6 fade-in-section delay-100">
          {/* GitHub */}
          <a
            href="https://github.com/ConnorDaytonaHolmes"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl transition-all duration-300 glass glass-hover"
            aria-label="GitHub profile"
          >
            <Image
              src="icons/github.svg"
              alt="GitHub"
              width={28}
              height={28}
              unoptimized
              className="opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/connor-holmes-27588b226/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl transition-all duration-300 glass glass-hover"
            aria-label="LinkedIn profile"
          >
            <Image
              src="icons/linkedin.svg"
              alt="LinkedIn"
              width={28}
              height={28}
              unoptimized
              className="opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Email */}
          <button
            onClick={onContact}
            className="group p-3 rounded-xl transition-all duration-300 glass glass-hover cursor-pointer"
            aria-label="Send email"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ width: 28, height: 28, color: "var(--text-bright)" }}
              className="opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </button>
        </div>

        {/* Bottom line */}
        <div
          className="mono text-[10px] tracking-[0.2em] text-center fade-in-section delay-200"
          style={{ color: "var(--text-muted)" }}
        >
          Connor Holmes &mdash; Perth, Australia &mdash; 2026
        </div>
      </div>
    </footer>
  );
}
