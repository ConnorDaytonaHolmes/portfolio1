import React from "react";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl mb-4 font-[family-name:var(--font-nova-square)]">
          Connor Holmes
        </h1>
        <h2 className="text-2xl md:text-3xl mb-2 font-[family-name:var(--font-geist-sans)]">
          Software Engineer
        </h2>
        <p className="text-xl opacity-80 font-[family-name:var(--font-geist-sans)]">
          Perth, Australia
        </p>
      </div>
    </section>
  );
}