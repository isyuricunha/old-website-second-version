module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      source: ["Inter"],
    },
    extend: {
      colors: {
        bgMain: "#141416"
      },
    },
  },
  plugins: [],
};
