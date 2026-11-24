/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#071D3A',
          'navy-dark': '#041122',
          'navy-light': '#0E2E58',
          ocean: '#0879C9',
          'ocean-hover': '#0769AF',
          'ocean-dark': '#065A96',
          cyan: '#20C5E8',
          'cyan-hover': '#1BB0D0',
          'cyan-light': '#E8FAFD',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 30px -10px rgba(8, 121, 201, 0.25)',
        'brand-glow': '0 0 25px rgba(32, 197, 232, 0.35)',
      }
    },
  },
  plugins: [],
}
