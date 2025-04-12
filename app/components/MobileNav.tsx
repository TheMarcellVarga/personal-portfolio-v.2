import { useEffect, useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrollToHome: () => void;
  scrollToAbout: () => void;
  scrollToWork: () => void;
  scrollToContact: () => void;
}

export default function MobileNav({
  isOpen,
  setIsOpen,
  scrollToHome,
  scrollToAbout,
  scrollToWork,
  scrollToContact
}: MobileNavProps) {
  const [mounted, setMounted] = useState(false);

  // Set initial mounted state (for animations)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (callback: () => void) => {
    setIsOpen(false);
    setTimeout(() => {
      callback();
    }, 300);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 z-50 relative"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6 text-text-primary" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-text-primary" />
        )}
      </button>

      <div 
        className={`
          fixed inset-0 
          bg-background-primary/95 backdrop-blur-md
          z-40 
          flex flex-col items-center justify-center
          transition-all duration-300 ease-in-out
          md:hidden
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col items-center justify-center gap-8 w-full">
          <button 
            onClick={() => handleNavClick(scrollToHome)}
            className="
              text-text-primary text-2xl font-medium
              relative
              transition-all duration-200
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
              after:bg-text-primary after:transition-all after:duration-300
              hover:after:w-full focus:after:w-full
              px-4 py-2 focus:outline-none
            "
          >
            Home
          </button>
          
          <button 
            onClick={() => handleNavClick(scrollToAbout)}
            className="
              text-text-primary text-2xl font-medium
              relative
              transition-all duration-200
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
              after:bg-text-primary after:transition-all after:duration-300
              hover:after:w-full focus:after:w-full
              px-4 py-2 focus:outline-none
            "
          >
            About
          </button>
          
          <button 
            onClick={() => handleNavClick(scrollToWork)}
            className="
              text-text-primary text-2xl font-medium
              relative
              transition-all duration-200
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
              after:bg-text-primary after:transition-all after:duration-300
              hover:after:w-full focus:after:w-full
              px-4 py-2 focus:outline-none
            "
          >
            Work
          </button>
          
          <button 
            onClick={() => handleNavClick(scrollToContact)}
            className="
              text-text-primary text-2xl font-medium
              relative
              transition-all duration-200
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
              after:bg-text-primary after:transition-all after:duration-300
              hover:after:w-full focus:after:w-full
              px-4 py-2 focus:outline-none
            "
          >
            Contact
          </button>
        </nav>
        
        <div className="absolute bottom-12 flex gap-6 items-center">
          <a 
            href="https://www.linkedin.com/in/marcellvarga/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary hover:text-text-primary transition-colors duration-200"
            aria-label="LinkedIn profile"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          <a 
            href="mailto:themarcellvarga@gmail.com"
            className="text-text-tertiary hover:text-text-primary transition-colors duration-200"
            aria-label="Send email"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
            </svg>
          </a>
          
          <a 
            href="/MarcellVargaCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary hover:text-text-primary transition-colors duration-200"
            aria-label="Download resume"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.276-.535.318-.356.478-.817.478-1.384-.001-1.097-.417-1.767-1.754-1.767zm-.692.732h.129c.533 0 .803.175.803.854 0 .37-.77.573-.227.69-.14.108-.351.162-.606.162h-.099v-1.706zm-2.74-.732h-.922v3.686h.922v-3.686zm-3.423 3.686h1.8v-.785h-1.17v-2.901h-.63v3.686zm-5.036-1.239h.858v-1.307h-.964v-1.14h-.63v2.688h.736zm4.03-2.447v3.686h-.625l-1.736-2.443v2.443h-.625v-3.686h.66l1.701 2.417v-2.417h.625z"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
} 