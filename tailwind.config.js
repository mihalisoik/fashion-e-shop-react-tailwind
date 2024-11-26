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
        primary: "#81C784",
        lightprimary: "#A5D6A7",
        extralightprimary: "#C8E6C9",
        background: "#F9FBE7",
        textcolor: "#616161",
      },
      backgroundImage: {
        hero: "url('/hero-image.jpg')",
      },
    },
  },
  plugins: [],
};
