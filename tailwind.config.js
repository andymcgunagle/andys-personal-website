module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        'fade-out': 'fadeOut 3.05s linear',
      },
      fontFamily: {
        OpenSans: ["Open Sans", "cursive"],
      },
    },
  },
  plugins: [],
}
