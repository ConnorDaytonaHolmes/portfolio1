import React from "react";
import ScrollButton from "./ScrollButton";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="heading text-7xl md:text-9xl mb-4">
          Connor Holmes
        </h1>
        <h2 className="heading text-2xl md:text-5xl mb-2">
          Software Engineer
        </h2>
        <p className="heading text-2xl opacity-80">
          Perth, Australia
        </p>
        <ScrollButton target="experience" delayed={true} />
      </div>
    </section>
  );
}
