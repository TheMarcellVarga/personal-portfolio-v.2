import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

interface BackToTopProps {
  showAfter?: number; // Show after scrolling this many pixels
}

export default function BackToTop({ showAfter = 300 }: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user has scrolled down
      setVisible(window.scrollY > showAfter);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 left-4 md:left-8 z-40 
        p-3 rounded-full 
        bg-card-background backdrop-blur-sm
        border border-card-border
        shadow-lg 
        transition-all duration-300 ease-out
        opacity-80 hover:opacity-100
        hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-custom-blue
        transform translate-y-0 hover:translate-y-[-2px]"
      aria-label="Back to top"
    >
      <ArrowUpIcon className="w-5 h-5 text-text-primary" />
    </button>
  );
} 