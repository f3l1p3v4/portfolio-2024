/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'text-1': '#FFFFFF',
        'text-2': '#c4c1c1',
        'blue-accent': '#a3ea2a', // formerly --color-blue
        'blue-2': '#518000',      // formerly --color-blue-2
        'bg-1': '#141b27',        // formerly --color-background-1
        'bg-2': '#212C42',        // formerly --color-background-2
      },
      fontFamily: {
        sans: ['"Chakra Petch"', 'sans-serif'], // Sets Chakra Petch as default sans
      },
    },
  },
  plugins: [],
}
