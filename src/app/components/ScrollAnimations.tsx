"use client";

import { useEffect } from "react";

export default function ScrollAnimations({ disabled = false } : { disabled?: boolean }) {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
    
    const showElement = (element: Element) => {
      element.classList.add("is-visible");
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          showElement(entry.target);
        }
      });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll(".fade-in-section");
    fadeElements.forEach(element => {
      if(disabled) {
        showElement(element);
      } else {
        observer.observe(element);
      }
    });
    
    return () => {
      fadeElements.forEach(element => {
        !disabled && observer.unobserve(element);
      });
    };
  }, []);
  
  return null;
}
