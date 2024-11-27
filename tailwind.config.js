/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D2C2F",
        secondary: "#D7F427",
        lightsecondary: "#D3EC62",
        black: "#000",
        white: "#fff",
      },
      container: {
        center: true,
        padding: "0.5rem",
        screens: {
          lg: "1300px", // Max width of 1300px for large screens
          xl: "1300px", // Max width of 1300px for extra large screens
        },
      },
    },
  },
  plugins: [],
};
