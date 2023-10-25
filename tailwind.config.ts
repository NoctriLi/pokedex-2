import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pbrown: {
          DEFAULT: "hsl(var(--themeContrast1) / <alpha-value>)",
        },
        pyellow: {
          DEFAULT: "hsl(var(--theme1) / <alpha-value>)",
        },
        pgold: {
          DEFAULT: "hsl(var(--theme2) / <alpha-value>)",
        },
        pred: {
          DEFAULT: "hsl(var(--theme3) / <alpha-value>)",
        },
        normal: {
          DEFAULT: "hsl(var(--normal) / <alpha-value>)",
          l: "hsl(var(--normal-l) / <alpha-value>)",
          d: "hsl(var(--normal-d) / <alpha-value>)",
        },
        poison: {
          DEFAULT: "hsl(var(--poison) / <alpha-value>)",
          l: "hsl(var(--poison-l) / <alpha-value>)",
          d: "hsl(var(--poison-d) / <alpha-value>)",
        },
        psychic: {
          DEFAULT: "hsl(var(--psychic) / <alpha-value>)",
          l: "hsl(var(--psychic-l) / <alpha-value>)",
          d: "hsl(var(--psychic-d) / <alpha-value>)",
        },
        grass: {
          DEFAULT: "hsl(var(--grass) / <alpha-value>)",
          l: "hsl(var(--grass-l) / <alpha-value>)",
          d: "hsl(var(--grass-d) / <alpha-value>)",
        },
        ground: {
          DEFAULT: "hsl(var(--ground) / <alpha-value>)",
          l: "hsl(var(--ground-l) / <alpha-value>)",
          d: "hsl(var(--ground-d) / <alpha-value>)",
        },
        ice: {
          DEFAULT: "hsl(var(--ice) / <alpha-value>)",
          l: "hsl(var(--ice-l) / <alpha-value>)",
          d: "hsl(var(--ice-d) / <alpha-value>)",
        },
        fire: {
          DEFAULT: "hsl(var(--fire) / <alpha-value>)",
          l: "hsl(var(--fire-l) / <alpha-value>)",
          d: "hsl(var(--fire-d) / <alpha-value>)",
        },
        rock: {
          DEFAULT: "hsl(var(--rock) / <alpha-value>)",
          l: "hsl(var(--rock-l) / <alpha-value>)",
          d: "hsl(var(--rock-d) / <alpha-value>)",
        },
        dragon: {
          DEFAULT: "hsl(var(--dragon) / <alpha-value>)",
          l: "hsl(var(--dragon-l) / <alpha-value>)",
          d: "hsl(var(--dragon-d) / <alpha-value>)",
        },
        water: {
          DEFAULT: "hsl(var(--water) / <alpha-value>)",
          l: "hsl(var(--water-l) / <alpha-value>)",
          d: "hsl(var(--water-d) / <alpha-value>)",
        },
        bug: {
          DEFAULT: "hsl(var(--bug) / <alpha-value>)",
          l: "hsl(var(--bug-l) / <alpha-value>)",
          d: "hsl(var(--bug-d) / <alpha-value>)",
        },
        dark: {
          DEFAULT: "hsl(var(--dark) / <alpha-value>)",
          l: "hsl(var(--dark-l) / <alpha-value>)",
          d: "hsl(var(--dark-d) / <alpha-value>)",
        },
        fighting: {
          DEFAULT: "hsl(var(--fighting) / <alpha-value>)",
          l: "hsl(var(--fighting-l) / <alpha-value>)",
          d: "hsl(var(--fighting-d) / <alpha-value>)",
        },
        ghost: {
          DEFAULT: "hsl(var(--ghost) / <alpha-value>)",
          l: "hsl(var(--ghost-l) / <alpha-value>)",
          d: "hsl(var(--ghost-d) / <alpha-value>)",
        },
        steel: {
          DEFAULT: "hsl(var(--steel) / <alpha-value>)",
          l: "hsl(var(--steel-l) / <alpha-value>)",
          d: "hsl(var(--steel-d) / <alpha-value>)",
        },
        flying: {
          DEFAULT: "hsl(var(--flying) / <alpha-value>)",
          l: "hsl(var(--flying-l) / <alpha-value>)",
          d: "hsl(var(--flying-d) / <alpha-value>)",
        },
        electric: {
          DEFAULT: "hsl(var(--electric) / <alpha-value>)",
          l: "hsl(var(--electric-l) / <alpha-value>)",
          d: "hsl(var(--electric-d) / <alpha-value>)",
        },
        fairy: {
          DEFAULT: "hsl(var(--fairy) / <alpha-value>)",
          l: "hsl(var(--fairy-l) / <alpha-value>)",
          d: "hsl(var(--fairy-d) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
