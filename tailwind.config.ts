import { Orbit, Orbitron } from "next/font/google"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsla(250,66%,75%,1)",
        background: " hsla(253,27%,6%,1)",
      },
      fontFamily: {
        sans: ["var(--font-chakra-pertch)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
