/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'kairos-bg': '#0A0A0B',
        'kairos-surface': '#141416',
        'kairos-border': '#232326',
        'kairos-muted': '#8A8A8F',
        'kairos-accent': '#D98E4E',
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
