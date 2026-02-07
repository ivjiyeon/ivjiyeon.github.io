/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Almost nothing here — colors, shadows, etc. are in CSS @theme
      fontFamily: {
        // Optional: if you want to override defaults
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Add plugins only if needed, e.g.:
    // require('@tailwindcss/typography'),
  ],
}