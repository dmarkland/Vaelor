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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "x-slider": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-50% - 1.25rem))" },
        },
      },
      animation: {
        "x-slider": "x-slider 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
