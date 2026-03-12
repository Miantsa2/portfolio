/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        jacarta: 'rgb(58,52,91)',
        queenpink: 'rgb(243,200,221)',
        middlepurple: 'rgb(209,131,169)',
        oldlavender: 'rgb(113,85,122)',
        brownchocolate: 'rgb(75,21,53)',
      },
    },
  },
  plugins: [],
}

