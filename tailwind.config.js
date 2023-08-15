/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../public/images/products/142892-cool-background-designs-1920x1200-for-mac.jpg')",
      },
      keyframes :{
        "0%" : {transform : "translateX(0%)"},
        "50%" : {transform : "translateX(50%)"},
        "100%" : {transform : "translateX(100%)"},
      },
      animation :{
        shimmer : "shimmer 1.5s infinite"
      }
    },
  },
  plugins: [],
}