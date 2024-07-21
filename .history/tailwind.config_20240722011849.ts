import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-dark': 'linear-gradient(243deg, #02425C 0%, #0F172A 47.5%, #001822 100%)',
        'gradient-light': 'linear-gradient(243deg, #89CFF0 0%, #BEE1E6 47.5%, #F0FFF7 100%)', // Light gradient added here
      },
      backdropBlur: {
        'blur': 'blur(10px)',
      },
      backgroundColor: {
        "custom-light": "#D9D9D9",
      },
      colors: {
        "custom-blue": "#176B87",
        "custom-teal": "#4FD5CC",
        'gradient-dark': 'linear-gradient(243deg, #02425C 0%, #0F172A 47.5%, #001822 100%)',
        'gradient-light': 'linear-gradient(243deg, #89CFF0 0%, #BEE1E6 47.5%, #F0FFF7 100%)', // Light gradient added here
      },
    },
  },
  variants: {
    extend: {},
  },
  darkMode: "class", // Ensure dark mode is enabled
  plugins: [],
};

export default config;