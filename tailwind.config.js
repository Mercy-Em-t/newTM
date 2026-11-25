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
        'fae-fruit': '#9E1E5B',
        'opal': '#6850AD',
        'precious-gold': 'var(--precious-gold, #F4B956)',
        'twilight-void': '#0A0210',
        'velvet-plum': '#2D1036',
        'royal-amaranth': '#6B0733',
        'terracotta-fire': '#D97352',
        'harvest-gold': '#E9A23B',
        'lavender-rose': '#FAF4F7',
        'plum-muted': '#9684A8',
        'opal-dawn': '#FAF5F8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
