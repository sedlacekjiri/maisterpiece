/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FDFAF6',
          100: '#FAF7F2',
          200: '#F3EDE3',
          300: '#E8DED0',
          400: '#D9C9B3',
          500: '#C4A882',
          600: '#A88860',
          700: '#8B6E47',
          800: '#6B5236',
          900: '#4A3825',
        },
        clay: {
          50:  '#F7F2EE',
          100: '#EDE4DA',
          200: '#D9C8B4',
          300: '#C4A882',
          400: '#AF8855',
          500: '#8B6840',
          600: '#6B4E2E',
          700: '#4E371F',
          800: '#342311',
          900: '#1E1208',
        },
        ink: {
          DEFAULT: '#1A1510',
          light:   '#2C2418',
          muted:   '#6B6055',
          subtle:  '#9A8F83',
        },
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['DM Sans', 'system-ui', 'sans-serif'],
        mono:   ['DM Mono', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'hero':    ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      maxWidth: {
        'site': '1440px',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'line-grow':  'lineGrow 1s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        lineGrow: {
          from: { transform: 'scaleX(0)' },
          to:   { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};
