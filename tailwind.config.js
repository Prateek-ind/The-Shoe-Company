/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      screens: {
        'media560': '560px',
        "media450": "450px"
      },
      backgroundImage: {
        'testimonial-bg': "url('/images/testimonial-BG.png')",
      }
    },
  },
  plugins: [],
};
