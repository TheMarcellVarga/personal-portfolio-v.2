import { useState, useEffect } from 'react';
import { useIsMobile } from '../isMobile';

export default function LegacyNotice() {
  const [showLegacyNotice, setShowLegacyNotice] = useState(true);
  const [isNoticeVisible, setIsNoticeVisible] = useState(true);
  const [isHoveringLegacyNotice, setIsHoveringLegacyNotice] = useState(false);
  
  const isMobile = useIsMobile();
  const MOBILE_TIMER_DURATION = 5000;
  const DESKTOP_TIMER_DURATION = 7500;

  useEffect(() => {
    if (showLegacyNotice && !isHoveringLegacyNotice) {
      const timerDuration = isMobile
        ? MOBILE_TIMER_DURATION
        : DESKTOP_TIMER_DURATION;

      const timer = setTimeout(() => {
        setIsNoticeVisible(false);
        setTimeout(() => {
          setShowLegacyNotice(false);
        }, 500);
      }, timerDuration);

      return () => clearTimeout(timer);
    }
  }, [showLegacyNotice, isHoveringLegacyNotice, isMobile]);

  if (!showLegacyNotice) return null;

  return (
    <div
      onMouseEnter={() => setIsHoveringLegacyNotice(true)}
      onMouseLeave={() => setIsHoveringLegacyNotice(false)}
      className={`
        fixed 
        z-50
        transition-all duration-500 ease-out
        ${isNoticeVisible ? "opacity-100" : "opacity-0 translate-y-4"}
        
        /* Mobile First Positioning */
        bottom-3 
        left-3 
        right-3
        sm:bottom-4
        sm:left-4 
        sm:right-4
        md:left-auto 
        md:right-4
        
        /* Width Control */
        w-auto
        sm:max-w-sm
        
        /* Container Styling */
        bg-gray-100/90
        text-custom-blue 
        rounded-lg
        sm:rounded-xl
        shadow-lg 
        backdrop-blur-xs 
        border border-custom-blue/10
        
        /* Padding Adjustments */
        p-2.5
        sm:p-3
        md:p-4
        
        /* Layout */
        flex 
        flex-col 
        sm:flex-row 
        items-center 
        gap-1.5
        sm:gap-2
        
        /* Background Pattern */
        before:absolute 
        before:inset-0 
        before:opacity-[0.02] 
        before:bg-[radial-gradient(#02425C_1.5px,transparent_1.5px)] 
        before:[background-size:16px_16px] 
        before:pointer-events-none
        before:rounded-lg
        sm:before:rounded-xl
      `}
      role="alert"
      aria-live="polite"
    >
      <div className="flex-1 w-full sm:w-auto">
        <p className="text-sm sm:text-base md:text-lg font-bold text-custom-blue text-center sm:text-left">
          🚧 Website under development
        </p>
        <p className="text-xs sm:text-sm text-custom-blue/80 mt-0.5 sm:mt-1 text-center sm:text-left">
          Want to see the legacy version?{" "}
          <a
            href="https://personal-portfolio-v-1.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-blue hover:text-custom-teal underline transition-colors duration-300"
            aria-label="Visit legacy portfolio website"
          >
            Click here
          </a>
        </p>
      </div>

      <button
        onClick={() => setShowLegacyNotice(false)}
        className="text-custom-blue/60 hover:text-custom-blue transition-colors duration-300
        p-1 sm:p-1.5 md:p-2 
        hover:bg-custom-blue/5 
        rounded-md sm:rounded-lg
        absolute 
        top-1.5 
        right-1.5
        sm:top-2
        sm:right-2
        md:relative
        md:top-auto
        md:right-auto"
        aria-label="Close notification"
      >
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
} 