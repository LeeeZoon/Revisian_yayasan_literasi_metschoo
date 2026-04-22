import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-lime',
    'text-lime',
    'border-lime',
    'bg-lime/10',
    'bg-lime/20',
    'text-lime/60',
    'border-lime/30',
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#A8D52E',
          hover: '#94BC28',
          dark: '#65a30d',
          light: '#D4EE96',
        },
        charcoal: {
          DEFAULT: '#111111',
          soft: '#1A1A1A',
        },
        offwhite: '#F7F7F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
