/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'snow': {
          DEFAULT: '#fcf7f8',
          100: '#481b24',
          200: '#913749',
          300: '#c5677a',
          400: '#e1afb9',
          500: '#fcf7f8',
          600: '#fdf9fa',
          700: '#fdfbfb',
          800: '#fefcfc',
          900: '#fefefe'
        },
        'battleship_gray': {
          DEFAULT: '#808f85',
          100: '#191d1a',
          200: '#333935',
          300: '#4c564f',
          400: '#66736a',
          500: '#808f85',
          600: '#99a59d',
          700: '#b3bbb6',
          800: '#ccd2ce',
          900: '#e6e8e7'
        },
        'rojo': {
          DEFAULT: '#de1f26',
          100: '#2d0608',
          200: '#590d0f',
          300: '#861317',
          400: '#b3191f',
          500: '#de1f26',
          600: '#e64c52',
          700: '#ec797d',
          800: '#f2a6a8',
          900: '#f9d2d4'
        },
        'english_violet': {
          DEFAULT: '#443850',
          100: '#0e0b10',
          200: '#1c1720',
          300: '#292231',
          400: '#372d41',
          500: '#443850',
          600: '#6a577d',
          700: '#8f7ba3',
          800: '#b5a7c2',
          900: '#dad3e0'
        },
        'davys_gray': {
          DEFAULT: '#4e4b5c',
          100: '#100f13',
          200: '#201e25',
          300: '#2f2d38',
          400: '#3f3d4a',
          500: '#4e4b5c',
          600: '#6f6a82',
          700: '#928ea3',
          800: '#b6b4c1',
          900: '#dbd9e0'
        }
      }
    },
  },
  plugins: [],
} 