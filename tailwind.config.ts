import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mehraab: {
          pink: "#B94D70",
          "deep-rose": "#8F304F",
          ivory: "#F8F1E7",
          cream: "#FFF9F1",
          blue: "#17345F",
          "midnight-blue": "#102746",
          emerald: "#176B58",
          "deep-emerald": "#0F4F42",
          gold: "#C49A52",
          "light-gold": "#DDBD78",
          ink: "#241C1B",
          muted: "#756B63",
          sand: "#EFE6D8",
          border: "#E2D7C5",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        script: ["var(--font-alex-brush)", "cursive"],
      },
      boxShadow: {
        gold: "0 4px 20px -2px rgba(196, 154, 82, 0.25)",
        royal: "0 10px 30px -5px rgba(23, 52, 95, 0.3)",
        soft: "0 10px 25px -5px rgba(36, 28, 27, 0.05)",
      },
      borderRadius: {
        arch: "120px 120px 0 0",
        jharokha: "100px 100px 12px 12px",
      },
    },
  },
  plugins: [],
};

export default config;
