/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)'},
          '50%': { transform: 'rotate(3deg)'},
        }
      },
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'playwrite': ['Playwrite CO Guides', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

