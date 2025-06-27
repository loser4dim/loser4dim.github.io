import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"BIZ UDPGothic"', '"Open Sans"'],
      }
    }
  },
  plugins: []
};

export default config;