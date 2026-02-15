import React, { useEffect } from "react";

export default function HeroSection() {
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

  const scrollToNextSection = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showJumpButton = () => {
    const button = document.getElementById('jump-to-experience-button');
    if (button) {
      button.classList.add('opacity-100', 'hover:opacity-70');
      button.style.cursor = 'pointer';
      setIsButtonDisabled(false);

      setTimeout(() => {
        button.classList.remove('duration-2000');
        button.classList.add('duration-400');
      }, 2000);
    }
  };
  
  useEffect(() => {
    setTimeout(showJumpButton, 2000);
  }, []);


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
        <div className='mt-5'>
          <button
            onClick={scrollToNextSection}
            className="animate-bounce transition-opacity cursor-pointer bg-transparent border-none pb-4 opacity-0 duration-2000"
            aria-label="Scroll to next section"
            id='jump-to-experience-button'
            disabled={isButtonDisabled}
            style={{ cursor: 'default' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
