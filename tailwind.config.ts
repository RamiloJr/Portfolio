import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0F0D",
        surface: "#121A18",
        ink: "#F2F4F3",
        muted: "#93A29C",
        line: "#1E2B27",
        accent: "#34E0A1",
        "accent-ink": "#06110D",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;