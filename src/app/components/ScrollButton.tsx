"use client";

import { useState, useEffect } from "react";

interface ScrollButtonProps {
  target: string;
  delayed?: boolean;
}

export default function ScrollButton({ target, delayed = false }: ScrollButtonProps) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(delayed);

  const scrollToTarget = () => {
    const targetSection = document.getElementById(target);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showJumpButton = () => {
    const button = document.getElementById(`jump-to-${target}-button`);
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
    if (delayed) {
      setTimeout(showJumpButton, 2000);
    }
  }, [delayed]);

  return (
    <div className='mt-8 flex justify-center'>
      <button
        onClick={scrollToTarget}
        className={`animate-bounce transition-opacity cursor-pointer bg-transparent border-none pb-4 ${
          delayed ? 'opacity-0 duration-2000' : 'opacity-100 hover:opacity-70'
        }`}
        aria-label={`Scroll to ${target} section`}
        id={`jump-to-${target}-button`}
        disabled={isButtonDisabled}
        style={delayed ? { cursor: 'default' } : undefined}
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
  );
}

