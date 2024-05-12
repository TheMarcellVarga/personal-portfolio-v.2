// Import useState and useEffect from React
import React, { useState, useEffect } from 'react';

// Assuming DarkModeIcon is a functional component
const DarkModeIcon = ({ isDarkMode, isOpen }) => {
  // State to track hover status and timer
  const [isHovered, setIsHovered] = useState(false);
  const [showText, setShowText] = useState(false);

  // Timer to check if hover duration is at least 3 seconds
  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 3000); // 3000ms = 3 seconds
      return () => clearTimeout(timer); // Cleanup on component unmount or re-render
    }
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="px-4 py-2 text-white md:text-black md:dark:text-white rounded cursor-pointer"
      onClick={() => toggleDarkMode()}
    >
      {/* Your DarkModeIcon component */}
      {/* Show the text box if showText is true */}
      {showText && (
        <div className="absolute z-10 bg-white dark:bg-black text-black dark:text-white p-2 rounded-lg shadow-lg">
          Alt + C
        </div>
      )}
    </div>
  );
};

export default DarkModeIcon;