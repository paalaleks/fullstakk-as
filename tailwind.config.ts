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
        foreground: "#FDC675",
        foreground_2: "#E5CA9B",
        background: "#4a121c",
        backgroundShade: "#430d16",
        backgroundShade_2: "#341A1A",
        backgroundShade_3: "#390d15",
        accent: "#6b1927",
        accent_2: "#725e61",
      },
      fontFamily: {
        flyover: ["Flyover", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
