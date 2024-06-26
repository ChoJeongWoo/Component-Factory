/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
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
