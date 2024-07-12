"use client";
import { useEffect } from "react";

export function Scroll()
{
    
  useEffect(() => {
      const fadeInLeft = document.querySelectorAll('.fade-in-left');
      const fadeInRight = document.querySelectorAll('.fade-in-right');
      const fadeInUp = document.querySelectorAll('.fade-in-up');
  
      const appearOptions = {
          threshold: 0,
          rootMargin: "0px 0px -100px 0px"
      };
  
      const appearOnScroll = new IntersectionObserver(function(entries, observer) {
          entries.forEach(entry => {
              if (!entry.isIntersecting) {
                  return;
              } else {
                  entry.target.classList.add('active');
                  observer.unobserve(entry.target);
              }
          });
      }, appearOptions);
  
      fadeInLeft.forEach(fader => {
          appearOnScroll.observe(fader);
      });
  
      fadeInRight.forEach(fader => {
          appearOnScroll.observe(fader);
      });
  
      fadeInUp.forEach(fader => {
          appearOnScroll.observe(fader);
      });

      return () => {
          appearOnScroll.disconnect();
      };
    
  }, []);

    return <>
    </>;
}