/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Bodoni Moda", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#FF6F61",
        secondary: "#FAE3D9",
        accent: "#A3B18A",
        "light-accent": "#BCC9A4",
        "extra-light-accent": "#D6E1BF",
        background: "#FFF8F0",
        "text-color": "#4B3E3E",
      },
      backgroundImage: {
        hero: "url('/hero-image.jpg')",
      },
    },
  },
  plugins: [],
};
