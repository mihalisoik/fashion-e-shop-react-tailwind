/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bonomimoda: ["Bodoni Moda", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "primary": "#FF6F61",
        "secondary": "#FAE3D9",
        "accent": "#A3B18A",
        "background": "#FFF8F0",
        "text-color": "#4B3E3E"
      },
      backgroundImage: {
        'hero': "url('/hero-image.jpg')",
      }
    },
  },
  plugins: [],
}