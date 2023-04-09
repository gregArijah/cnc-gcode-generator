/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cnc-background': "url('/images/mill-surfacing.jpg')",
      }
    },
  },
  plugins: [],
}
