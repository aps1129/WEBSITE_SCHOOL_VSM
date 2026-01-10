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
        primary: {
          DEFAULT: "#1e3a8a", // Royal Blue
          dark: "#1e40af",
          light: "#3b82f6",
        },
        accent: {
          DEFAULT: "#fbbf24", // Yellow
          light: "#fcd34d",
        },
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
