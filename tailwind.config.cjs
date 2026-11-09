/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1e3a8a',
          navy: '#0f172a',
          amber: '#d97706',
          sky: '#0284c7',
        }
      }
    },
  },
  plugins: [],
};
