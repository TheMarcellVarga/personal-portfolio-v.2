import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  // Initialize theme based on user preference or system preference
  useEffect(() => {
    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set dark mode if explicitly saved, otherwise use system preference
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else if (savedTheme === 'light') {
      setDarkMode(false);
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  // Update the DOM when dark mode changes
  useEffect(() => {
    if (darkMode === undefined) return;
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // Don't render until we've determined the initial state
  if (darkMode === undefined) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 
        p-3 rounded-full 
        bg-card-background backdrop-blur-sm
        border border-card-border
        shadow-lg 
        transition-all duration-300 
        hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-custom-blue"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <SunIcon className="w-5 h-5 text-text-primary" />
      ) : (
        <MoonIcon className="w-5 h-5 text-text-primary" />
      )}
    </button>
  );
} 