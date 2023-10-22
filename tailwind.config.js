/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce-short': 'bounce 500ms ease-in-out 1',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
