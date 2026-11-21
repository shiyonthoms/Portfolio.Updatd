import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: "#F7F4EF",
        sand: "#EFEAE1",
        stone: "#E2DDD5",
        obsidian: "#111111",
        charcoal: "#52504C",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "'Plus Jakarta Sans'", "sans-serif"],
        mono: ["var(--font-mono)", "'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        "liquid-glass":
          "0 10px 30px -10px rgba(17, 17, 17, 0.08), 0 4px 12px -4px rgba(17, 17, 17, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.85)",
        "liquid-hover":
          "0 20px 40px -12px rgba(17, 17, 17, 0.12), 0 6px 16px -4px rgba(17, 17, 17, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.95)",
      },
    },
  },
  plugins: [forms],
};

export default config;
