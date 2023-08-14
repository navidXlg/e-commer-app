/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../public/images/products/142892-cool-background-designs-1920x1200-for-mac.jpg')",
      }
    },
  },
  plugins: [],
}