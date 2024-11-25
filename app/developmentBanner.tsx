"use client";

import { useState, useEffect } from 'react';
import { XIcon } from 'lucide-react';

const DevelopmentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the banner has been dismissed before
    const isDismissed = localStorage.getItem('devBannerDismissed');
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Store the dismissal in localStorage
    localStorage.setItem('devBannerDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div 
      className="
        fixed bottom-4 right-4 z-50
        max-w-md w-full
        bg-gradient-to-br from-gray-100/95 to-gray-100/90
        backdrop-blur-sm
        rounded-xl
        p-4
        shadow-[0_8px_30px_rgba(2,66,92,0.12)]
        border border-custom-blue/10
        transform transition-all duration-500
        hover:shadow-[0_15px_60px_rgba(2,66,92,0.2)]
        group
      "
    >
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#02425C_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none rounded-xl" />
      
      <button
        onClick={handleDismiss}
        className="
          absolute top-2 right-2
          text-custom-blue/60 hover:text-custom-blue
          transition-colors duration-300
        "
      >
        <XIcon className="w-5 h-5" />
      </button>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-custom-blue">
          🚧 Website Under Development
        </h3>
        
        <p className="text-sm text-custom-blue/80 leading-relaxed">
          This website is currently being enhanced with new features and improvements. 
          While you can explore all available content, some sections might be under construction.
        </p>

        <div className="flex items-center gap-2 mt-1">
          <div className="
            w-2 h-2 rounded-full bg-custom-blue/60
            animate-pulse
          "/>
          <span className="text-xs text-custom-blue/60">
            Development in progress
          </span>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentBanner;