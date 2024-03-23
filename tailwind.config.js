/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./root/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'reid': ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 200s linear infinite',
        'pulse-fast': 'pulse 2s linear infinite',
      }
    },
  },
  plugins: [],
}

