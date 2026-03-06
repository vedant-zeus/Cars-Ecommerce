/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        stealth: {
          900: '#0A0C10', // Deepest background
          800: '#14171D', // Card background
          700: '#1E232B', // Hover/Border
        },
        neon: {
          cyan: '#00F5FF',
          blue: '#1A6BFF',
        }
      },
      backgroundImage: {
        'stealth-gradient': 'linear-gradient(135deg, #0A0C10 0%, #1A1D23 100%)',
      }
    },
  },
  plugins: [],
};
