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
        'gradient-light': 'linear-gradient(243deg, #AED9E0 0%, #CBD5E0 47.5%, #ECEFF1 100%)',

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