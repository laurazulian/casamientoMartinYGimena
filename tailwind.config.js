/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': "url('/fondo.png')", // imagen en la carpeta public
      },
    },
  },
  plugins: [],
};
