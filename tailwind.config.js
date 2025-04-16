// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         custom: ['CustomFont', 'sans-serif'],
//         Geo:['Geo', "sans-serif"]
//       }
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Include all your source files (adjust the path if necessary)
    './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}', // Include Shadcn UI components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require( 'tailwind-scrollbar-hide' ),
  ],
}

