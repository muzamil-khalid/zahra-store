import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFDF5",        // ivory cream
        ivory: "#F4ECD9",        // warm cream alt
        "ivory-2": "#efe6d0",
        ink: "#3A2A22",          // deep chocolate (text / near-black)
        "ink-2": "#2c201a",
        rust: { DEFAULT: "#8D734B", dark: "#6f5a39" }, // antique bronze (brand accent)
        gold: "#E1C16E",          // highly gold (highlight)
        cocoa: "#543D32",         // chocolate brown (dark sections)
        taupe: "#cdb98f",
        muted: "#8a7c69",
        "muted-light": "#bcae8c",
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
