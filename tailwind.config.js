/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors
        primary: {
          DEFAULT: '#28348E',
          light: '#3F51B5',
          dark: '#1A237E',
        },
        secondary: {
          DEFAULT: '#FFC931',
          light: '#FFD95A',
          dark: '#FFB300',
        },
        // Add other custom colors as needed

        'space-blue': '#1a237e',
        'cosmic-purple': '#4a148c',
        'celestial-gold': '#f59f00',
        'space-black': '#1a1a1a',
        'cosmic-gray': '#424242',
        'starry-white': '#ffffff',
        'cosmic-text': '#b39ddb'
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        amsipro: ['AmsiPro-Regular', 'sans-serif'],
        'amsipro-bold': ['AmsiPro-Bold', 'sans-serif'],
        avenir: ['Avenir', 'sans-serif'],
      },
      // You can extend other theme properties here
      // like spacing, borderRadius, etc.
    },
  },
  plugins: [],
}
