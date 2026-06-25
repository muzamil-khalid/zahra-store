import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FDF6E3",        // antique cream
        ivory: "#F3E7CC",        // warm cream alt
        "ivory-2": "#ece0c4",
        ink: "#4F242C",          // deep maroon (dark sections + headings)
        "ink-2": "#3A1A20",
        rust: { DEFAULT: "#B58A3C", dark: "#9A7330" }, // antique gold (accent)
        gold: "#D6AE69",          // radiant gold (highlight / CTA)
        cocoa: "#4F242C",         // deep maroon (dark sections)
        maroon: "#4F242C",        // deep maroon
        taupe: "#D8C39A",
        muted: "#7A6A5F",
        "muted-light": "#D3C4A3",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-jost)", "system-ui", "sans-serif"],
        script: ["var(--font-allura)", "cursive"],
      },
      maxWidth: { content: "1240px" },
    },
  },
  plugins: [],
};
export default config;
