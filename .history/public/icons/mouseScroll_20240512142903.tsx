import React from "react";

interface IconProps {
  isDarkMode: boolean;
  isOpen: boolean;
}

const MouseScrollIcon: React.FC<IconProps> = ({ isDarkMode, isOpen }) => {
  return (
    <svg
      className="svg-elem-1"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 32.9999C15.1 32.9999 12.625 31.9749 10.575 29.9249C8.525 27.8749 7.5 25.3999 7.5 22.4999V13.4999C7.5 10.5999 8.525 8.12494 10.575 6.07494C12.625 4.02494 15.1 2.99994 18 2.99994C20.9 2.99994 23.375 4.02494 25.425 6.07494C27.475 8.12494 28.5 10.5999 28.5 13.4999V22.4999C28.5 25.3999 27.475 27.8749 25.425 29.9249C23.375 31.9749 20.9 32.9999 18 32.9999ZM19.5 13.4999H25.5C25.5 11.6999 24.9313 10.1124 23.7938 8.73744C22.6563 7.36244 21.225 6.49994 19.5 6.14994V13.4999ZM10.5 13.4999H16.5V6.14994C14.775 6.49994 13.3438 7.36244 12.2063 8.73744C11.0688 10.1124 10.5 11.6999 10.5 13.4999ZM18 29.9999C20.075 29.9999 21.8438 29.2687 23.3063 27.8062C24.7688 26.3437 25.5 24.5749 25.5 22.4999V16.4999H10.5V22.4999C10.5 24.5749 11.2313 26.3437 12.6938 27.8062C14.1563 29.2687 15.925 29.9999 18 29.9999Z"
        fill={isOpen ? "white" : isDarkMode ? "white" : "black"}
      />
    </svg>
  );
};

export default MouseScrollIcon;
