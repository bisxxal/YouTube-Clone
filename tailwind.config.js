/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Media queries for tablets and larger screens
  variants: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '570px', // medium screens (tablets)
        'lg': '1024px', // large screens (desktops)
      },
    },
  },
};
