import { useEffect } from 'react';

export default function MotionPreference() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        // User prefers reduced motion, disable animations
        document.documentElement.classList.add('reduce-motion');
        
        // Stop any currently running animations
        const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-up, .animate-bounce');
        animatedElements.forEach(el => {
          el.classList.remove('animate-fade-in', 'animate-fade-in-up', 'animate-bounce');
        });
      } else {
        // User doesn't prefer reduced motion
        document.documentElement.classList.remove('reduce-motion');
      }
    };

    // Initial check
    if (motionQuery.matches) {
      document.documentElement.classList.add('reduce-motion');
    }

    // Add event listener
    motionQuery.addEventListener('change', handleReducedMotionChange);

    // Clean up
    return () => {
      motionQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  return null; // This component doesn't render anything
} 