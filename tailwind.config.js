/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-light': '#CEE5D0',
        'green-intensive': '#94B49F',
        'flesh':'#FCF8E8',
        'orange':'#ECB390',
        'background-ele':'rgb(107, 114, 128,0.5)',
        'bluepastel':'#779ECB',
        'redpastel':'#FAA0A0',
        'checkday':'#77DD77',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '95%': '95%',
        '16': '4rem',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '15': '5rem',
      },
    },
  },
  plugins: [],
}