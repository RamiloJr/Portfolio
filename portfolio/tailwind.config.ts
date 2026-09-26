import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5F6F3",
        ink: "#171B1F",
        muted: "#5B6168",
        line: "#DBDDD9",
        accent: "#3454D1",
        "accent-soft": "#E7EAF8",
        forest: "#2F6F4E",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
