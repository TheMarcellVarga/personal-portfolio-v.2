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
        'gradient-light': 'linear-gradient(243deg, #E6F8FF 0%, #D9E6FF 47.5%, #BEE1E6 100%)',
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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.5s ease-out forwards',
        fadeInRight: 'fadeInRight 0.5s ease-out forwards',
      },
      transitionProperty: {
        'scroll': 'transform, opacity',
      },
      transitionTimingFunction: {
        'scroll': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      transitionDuration: {
        'scroll': '1s',
      },
      scrollDown: 'scrollDown 1.5s ease-in-out infinite',
      bounce: 'bounce 1s infinite',
      },
      keyframes: {
        scrollDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(300%)' }
        }
      }
    },
  darkMode: "class",
  plugins: [],
};

export default config;
