/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#070a14',
          900: '#0a0e1a',
          850: '#0d1320',
          800: '#131825',
          700: '#1a2033',
          600: '#232a3f',
          500: '#2d3650',
          400: '#3a4458',
        },
        brand: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd7ff',
          300: '#8ec1ff',
          400: '#5a9eff',
          500: '#3a86f6',
          600: '#0066ff',
          700: '#0052cc',
          800: '#0044a8',
          900: '#003a8c',
        },
        accent: {
          50: '#e6fff9',
          100: '#b3f5e3',
          200: '#7eebcd',
          300: '#45e0b5',
          400: '#00d49c',
          500: '#00c896',
          600: '#00a673',
          700: '#00855c',
          800: '#006a4a',
          900: '#00553d',
        },
        gold: {
          400: '#f5c842',
          500: '#f0b90b',
          600: '#d4a300',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.25s ease-out',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px 0 rgba(0,102,255,0.15)' },
          '50%': { boxShadow: '0 0 40px 4px rgba(0,102,255,0.25)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
