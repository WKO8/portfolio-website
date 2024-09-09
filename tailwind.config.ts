import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        body: ["Sometype Mono", "system-ui", "sans-serif"],
      },
      colors: {
        'light-grey': "#A7A6A6",
        'mid-grey': "#363636",
        'dark-grey': "#1E1E1E",
        'hacker-green': "#20C20E"
      }
    },
  },
  plugins: [],
};
export default config;
