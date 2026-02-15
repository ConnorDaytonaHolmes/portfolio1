"use client";

import Image from "next/image";
import { useState } from "react";

export default function FooterSection() {
  const [copied, setCopied] = useState(false);
  const email = "connorholmes.419@gmail.com";

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <footer className="py-12 px-8 md:px-20 mt-auto bg-white/[0.02]" id='footer'>
      <div className="flex justify-center gap-8">
        { /* GITHUB PROFILE */ }
        <a
          href="https://github.com/ConnorDaytonaHolmes"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
        >
          <Image src="icons/github.svg" alt="GitHub" width={48} height={48} unoptimized />
        </a>

        { /* LINKEDIN PROFILE */ }
        <a
          href="https://www.linkedin.com/in/connor-holmes-27588b226/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
        >
          <Image src="icons/linkedin.svg" alt="LinkedIn" width={48} height={48} unoptimized />
        </a>

        { /* EMAIL */ }
        <button
          onClick={copyEmailToClipboard}
          className="opacity-70 hover:opacity-100 transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] relative group"
          aria-label="Copy email to clipboard"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 7 10 6 10-6" />
          </svg>
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {copied ? "Copied!" : email}
          </div>
        </button>
      </div>
    </footer>
  );
}