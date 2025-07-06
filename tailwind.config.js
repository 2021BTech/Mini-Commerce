/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#FBBF24",
        accent: "#EF4444",
        background: "#F3F4F6",
        text: "#111827",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
    backgroundImage: {
      "checkout-pattern": "url('/assets/images/page-turner.png')",
    },
  },
  plugins: [],
};
