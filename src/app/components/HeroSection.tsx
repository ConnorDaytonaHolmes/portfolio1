import React, { useEffect, useState } from "react";
import ScrollButton from "./ScrollButton";

export default function HeroSection() {
  const prefixes = ["Software", "Web", "Systems"];
  const affixes = ["Engineer", "Developer", "Designer"];
  const [prefixIndex, setPrefixIndex] = useState(0);
  const [affixIndex, setAffixIndex] = useState(0);
  const [prefixAnimating, setPrefixAnimating] = useState(false);
  const [affixAnimating, setAffixAnimating] = useState(false);

  useEffect(() => {
    const affixInterval = setInterval(() => {
      setAffixAnimating(true);
      setTimeout(() => {
        setAffixIndex((prev) => (prev + 1) % affixes.length);
        setAffixAnimating(false);
      }, 600);
    }, 4000);

    const prefixTimeout = setTimeout(() => {
      const prefixInterval = setInterval(() => {
        setPrefixAnimating(true);
        setTimeout(() => {
          setPrefixIndex((prev) => (prev + 1) % prefixes.length);
          setPrefixAnimating(false);
        }, 600);
      }, 4000);

      return () => clearInterval(prefixInterval);
    }, 2000);

    return () => {
      clearInterval(affixInterval);
      clearTimeout(prefixTimeout);
    };
  }, []);

  return (
    <section className="flex items-center justify-center h-screen">
      <img className="absolute w-screen h-screen -z-999  brightness-15" 
        src="bg1.webp" 
        alt="Background"/>
      
      <div className="text-center items-center">
        <h1 className="heading text-7xl md:text-9xl mb-4">
          Connor Holmes
        </h1>

        <div className="flex flex-row space-between justify-center gap-8">
          <div className="relative h-12 md:h-20 overflow-hidden flex items-center w-full justify-end">
            <h2
              className={`heading text-2xl md:text-5xl absolute transition-opacity duration-[600ms] ease-in-out ${
                prefixAnimating
                  ? 'opacity-0'
                  : 'opacity-100'
              }`}
            >
              {prefixes[prefixIndex]}
            </h2>
          </div>
          <div className="relative h-12 md:h-20 overflow-hidden flex items-center justify-center w-full justify-start">
            <h2
              className={`heading text-2xl md:text-5xl absolute transition-opacity duration-[600ms] ease-in-out ${
                affixAnimating
                  ? 'opacity-0'
                  : 'opacity-100'
              }`}
            >
              {affixes[affixIndex]}
            </h2>
          </div>
        </div>
        <h4 className="heading text-2xl opacity-80">
          Perth, Australia
        </h4>
        <ScrollButton target="experience" delayed={true} />
      </div>
    </section>
  );
}
