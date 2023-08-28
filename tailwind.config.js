/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-text-color": "var(--primary-text-color)",
      },
    },
  },
  plugins: [],
};
