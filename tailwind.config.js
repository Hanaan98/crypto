/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#2081e2",
        accent: "#1b1b1b",
        tertiary: "#252525",
        heading: "#ffffff",
      },
    },
  },
  plugins: [],
};
