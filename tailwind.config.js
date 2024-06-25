/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: false,
  theme: {
    extend: {
      maxWidth: {
        "7xl-plus": "calc(var(--width-7xl) + 2px)",
      },
    },
  },
  variants: {},
  plugins: [],
};
