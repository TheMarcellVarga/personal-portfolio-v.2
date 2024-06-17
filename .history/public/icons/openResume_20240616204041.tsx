import React from "react";

interface IconProps {
  isDarkMode: boolean;
  isOpen: boolean;
}

const DarkModeIcon: React.FC<IconProps> = ({ isDarkMode, isOpen }) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   height="24px"
    //   viewBox="0 -960 960 960"
    //   width="24px"
    //   fill="none"
    // >
    //   <path
    //     fill={isOpen ? "white" : isDarkMode ? "white" : "black"}
    //     d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z"
    //   />
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={isOpen ? "white" : isDarkMode ? "white" : "black"}
        d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
      />
    </svg>
  );
};

export default DarkModeIcon;
