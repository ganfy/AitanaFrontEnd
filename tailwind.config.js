/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'], // Asegúrate de incluir transformaciones en hover
      scale: ['hover', 'focus'],     // Habilita scale en hover
    },
  },
  plugins: [],
}
