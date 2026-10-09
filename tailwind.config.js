/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#06170F',
          900: '#0A2619',
          850: '#0E3322',
          800: '#14432C',
          700: '#1B5B3B',
          600: '#22784D',
        },
        agri: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        emerald: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
          glow: '#05E6BA',
        },
        amber: {
          harvest: '#F59E0B',
          glow: '#FBBF24',
          soft: '#FEF3C7',
        },
        quantum: {
          cyan: '#06B6D4',
          teal: '#14B8A6',
          violet: '#8B5CF6',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(16, 185, 129, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'glow-emerald': '0 0 25px -3px rgba(16, 185, 129, 0.35)',
        'glow-quantum': '0 0 25px -3px rgba(6, 182, 212, 0.35)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
