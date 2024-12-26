/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#590D0F',
          400: '#B3191F',
          DEFAULT: '#DE1F26',
          600: '#E64C52',
          800: '#F2A6A8',
        },
        secondary: {
          300: '#B85EFF',
          DEFAULT: '#9F2FFF',
          700: '#7B00FF',
        },
        tertiary: {
          300: '#2D3FDE',
          DEFAULT: '#4C3AE3',
          700: '#6B35E8',
        },
        background: {
          300: '#2B2F4B',
          DEFAULT: '#1F2342',
          700: '#151832',
        },
        accent: {
          red: '#FF2D2D',
          purple: '#C042FF',
          blue: '#00F6FF',
        },
        main: {
          DEFAULT: '#FFFFFF',
          secondary: '#CCCCCC',
        },
        text: '#DE1F26',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom right, var(--tw-colors-background-700) 0%, var(--tw-colors-background-DEFAULT) 50%, var(--tw-colors-background-300) 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(21,24,50,0.95) 0%, rgba(31,35,66,0.95) 100%)',
        'gradient-primary': 'linear-gradient(135deg, var(--tw-colors-primary-DEFAULT) 0%, var(--tw-colors-primary-600) 100%)',
        'gradient-secondary': 'linear-gradient(135deg, var(--tw-colors-secondary-DEFAULT) 0%, var(--tw-colors-secondary-300) 100%)',
        'gradient-tertiary': 'linear-gradient(135deg, var(--tw-colors-tertiary-DEFAULT) 0%, var(--tw-colors-tertiary-300) 100%)',
        'mesh-glow': 'radial-gradient(at 40% 40%, rgba(222,31,38,0.08) 0px, transparent 50%), radial-gradient(at 90% 10%, rgba(159,47,255,0.05) 0px, transparent 50%)',
        'mesh-pattern': `repeating-linear-gradient(
                          -45deg,
                          var(--tw-colors-background-300) 1px,
                          transparent 2px,
                          transparent 6px
                        )`,
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'glow': 'glow 4s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 0.8 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} 