/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(187, 0, 0)',
        'scp-black': 'rgb(17, 17, 17)',
        'scp-dark': 'rgb(28, 28, 28)',
        'scp-red': 'rgb(187, 0, 0)',
        'scp-light-red': 'rgb(220, 20, 20)',
        'scp-white': 'rgb(240, 240, 240)',
        'scp-gray': 'rgb(160, 160, 160)',
        'scp-border': 'rgb(100, 100, 100)',
      },
      fontFamily: {
        'courier': ['Courier Prime', 'Courier New', 'monospace'],
        'special': ['Special Elite', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
