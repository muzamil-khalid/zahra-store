import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f4efe8",
        "ivory-2": "#efe8dd",
        paper: "#fbf9f5",
        ink: "#11161f",
        "ink-2": "#0c1017",
        rust: { DEFAULT: "#b5552e", dark: "#98461f" },
        cocoa: "#6e4a32",
        taupe: "#c9bca8",
        muted: "#7c7468",
        "muted-light": "#b7ac9c",
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
