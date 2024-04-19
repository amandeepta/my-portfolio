
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveText: {
          '0%': {
              opacity: 1,
              transform: 'translateX(-100%)',
          },
          '50%': {
              opacity: 1,
              transform: 'translateX(100%)',
          },
          '100%': {
              opacity: 1,
              transform: 'translateX(-100%)',
          },
      },
  },
  animation: {
      moveText: 'moveText 3s ease-in-out',
  },
},
},
  plugins: [],
}