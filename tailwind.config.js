/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      letterSpacing: {
        wide: '.6px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '80%',
          },
          '@screen md': {
            maxWidth: '80%',
          },
          '@screen lg': {
            maxWidth: '80%',
          },
          '@screen xl': {
            maxWidth: '80%',
          },
        }
      })
    },require("daisyui")
  ],
}
