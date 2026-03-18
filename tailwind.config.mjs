/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F0E4',
        ink:   '#0A0A0A',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
      },
      fontSize: {
        'ui': ['10px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'xs': ['11px', { lineHeight: '1.5', letterSpacing: '0.06em' }],
        'sm': ['12px', { lineHeight: '1.6', letterSpacing: '0.04em' }],
      },
    },
  },
  plugins: [],
};
