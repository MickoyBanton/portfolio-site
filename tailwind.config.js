/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'active-section',
    'active-section:w-16',
    'active-section:bg-slate-200',
    'active-section:text-slate-200'
  ],
}

