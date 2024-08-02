/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'radial-gradient(ellipse at left, #FAC9D6, transparent), radial-gradient(ellipse at right, #C8C5F4, transparent)',
        'header-gradient': "url('/src/Assets/header-gradient.png')",
      },
      screens: {
        md: '738px',
        '3xl': '1436px',
        '4xl': '1592px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
});
