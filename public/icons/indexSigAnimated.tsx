import React from "react";

interface IconProps {
  isOpen: boolean;
}

const IndexSigAnimatedIcon: React.FC<IconProps> = ({ isOpen }) => {
  return (
    <svg
      className="svg-elem-1"
      width="85"
      height="37"
      viewBox="0 0 85 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_18_152)">
        <path
          stroke={isOpen ? "#053B50" : "white"}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M0.396973 36.3291C0.396973 36.3291 1.80464 21.811 13.6633 7.89246"
        />
        <path
          stroke={isOpen ? "#053B50" : "white"}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M84.6029 0.378418C83.4907 1.72562 28.5188 31.0478 28.5188 31.0478C34.2765 18.2493 39.5275 5.38881 37.4414 4.87415C37.3274 4.8523 37.2096 4.85749 37.0982 4.88928C31.574 6.017 19.8186 16.4677 17.715 17.2805C17.665 17.3015 17.6107 17.3113 17.5561 17.3093C16.4821 17.2881 15.8514 13.5856 15.4907 9.68776"
        />
      </g>
      <defs>
        <clipPath id="clip0_18_152">
          <rect width="85" height="36.7076" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IndexSigAnimatedIcon;