/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rojo: {
          200: '#590D0F',
          400: '#B3191F',
          DEFAULT: '#DE1F26',
          600: '#E64C52',
          800: '#F2A6A8',
        },
        aurora: {
          300: '#34EDB5',
          DEFAULT: '#00F5D4',
          700: '#00D6B9',
        },
        cosmic: {
          300: '#2D3FDE',
          DEFAULT: '#4C3AE3',
          700: '#6B35E8',
        },
        space: {
          300: '#2B2F4B',
          DEFAULT: '#1F2342',
          700: '#151832',
        },
        neon: {
          purple: '#B026FF',
          blue: '#00F6FF',
          pink: '#FF2D95',
        },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom right, #151832 0%, #1F2342 50%, #2B2F4B 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(31,35,66,0.9) 0%, rgba(43,47,75,0.9) 100%)',
        'gradient-cosmic': 'linear-gradient(135deg, #4C3AE3 0%, #2D3FDE 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #00F5D4 0%, #34EDB5 100%)',
        'gradient-rojo': 'linear-gradient(135deg, #DE1F26 0%, #E64C52 100%)',
        'mesh-glow': 'radial-gradient(at 40% 40%, rgba(0, 245, 212, 0.05) 0px, transparent 50%), radial-gradient(at 90% 10%, rgba(222, 31, 38, 0.05) 0px, transparent 50%)',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
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