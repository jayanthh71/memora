import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",

        primarylight: "var(--primary-light)",
        secondarylight: "var(--secondary-light)",
        accentlight: "var(--accent-light)",
      },
      fontFamily: {
        heading: "var(--heading)",
        body: "var(--body)",
      },
      keyframes: {
        "counter-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "gear-spin": "spin 12s linear infinite",
        "gear-spin-counter": "counter-spin 12s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
