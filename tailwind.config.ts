import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFFCF5",
        ink: "#141413",
        clay: "#D97757",
        stone: {
          50: "#FAF9F5",
          100: "#F5F3EF",
          200: "#E8E6E1",
          300: "#D6D3CD",
          400: "#A8A6A0",
          500: "#787672",
          600: "#575551",
          900: "#141413",
        },
        forge: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          500: "#F97316",
          600: "#EA580C",
          900: "#7C2D12",
        }
      },
      fontFamily: {
        serif: ["Instrument Serif", "Newsreader", "Georgia", "serif"],
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        display: ["Instrument Serif", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "paper": "0 1px 3px rgba(20,20,19,0.04), 0 8px 24px rgba(20,20,19,0.06)",
        "paper-lg": "0 2px 8px rgba(20,20,19,0.06), 0 16px 48px rgba(20,20,19,0.08)",
        "glow": "0 0 40px rgba(217,119,87,0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16,1,0.3,1)",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
