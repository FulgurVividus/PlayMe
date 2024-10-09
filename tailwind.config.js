/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        headerColor: "#057FE4",
        featureColor: "#057FE4",
        callToActionColor: "#F7F9FB",
        footerColor: "#F7F9FB",
      },
    },
  },
  plugins: [],
};
