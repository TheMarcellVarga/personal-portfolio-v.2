import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

interface BackToTopProps {
  showAfter?: number; // Show after scrolling this many pixels
}

export default function BackToTop({ 
  showAfter = 300
}: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user has scrolled down
      setVisible(window.scrollY > showAfter);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Run once on mount
    handleScroll();
    
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

  // Calculate if we're near bottom of page
  const [isNearBottom, setIsNearBottom] = useState(false);
  
  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // If we're within 200px of the bottom
      const isBottom = scrollHeight - scrollTop - clientHeight < 200;
      setIsNearBottom(isBottom);
    };
    
    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    checkScrollPosition(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed left-3 sm:left-4 md:left-8 z-40 
        p-2 sm:p-3 rounded-full 
        bg-gray-100/90 backdrop-blur-sm
        border border-custom-blue/10
        shadow-lg 
        transition-all duration-300 ease-out
        hover:opacity-100
        hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-custom-blue
        transform translate-y-0 hover:translate-y-[-2px]
        ${visible ? 'opacity-80' : 'opacity-0 pointer-events-none'}
        ${isNearBottom ? 'bottom-20 sm:bottom-22' : 'bottom-6 sm:bottom-8'}`}
      aria-label="Back to top"
    >
      <ArrowUpIcon className="w-4 h-4 sm:w-5 sm:h-5 text-custom-blue" />
    </button>
  );
} 