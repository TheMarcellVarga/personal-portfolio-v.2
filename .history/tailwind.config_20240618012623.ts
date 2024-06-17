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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "diagonal-gradient": "linear-gradient(to bottom left, #054F6C, #0F172A)",
        'glass': 'linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'blur': 'blur(10px)',
      },
      backgroundColor: {
        "custom-light": "bg-slate-500",
        "custom-dark": "#0f172a",
      },
      colors: {
        "custom-blue": "#176B87",
        "custom-teal": "#4FD5CC",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
      borderColor: ["hover"],
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
