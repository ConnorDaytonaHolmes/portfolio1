"use client";

import { useEffect, useState } from "react";

interface ScrollButtonProps {
  target: string;
  delayed?: boolean;
}

export default function ScrollButton({ target, delayed = false }: ScrollButtonProps) {
  const [visible, setVisible] = useState(!delayed);

  const scrollTo = () => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!delayed) return;
    const t = setTimeout(() => setVisible(true), 2200);
    return () => clearTimeout(t);
  }, [delayed]);

  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={scrollTo}
        disabled={!visible}
        aria-label={`Scroll to ${target} section`}
        className="animate-bounce cursor-pointer border-none bg-transparent transition-opacity duration-[1200ms]"
        style={{
          opacity: visible ? 0.5 : 0,
          color: "var(--teal)",
          cursor: visible ? "pointer" : "default",
        }}
        onMouseEnter={(e) => {
          if (visible) (e.currentTarget as HTMLButtonElement).style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          if (visible) (e.currentTarget as HTMLButtonElement).style.opacity = "0.5";
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
}
