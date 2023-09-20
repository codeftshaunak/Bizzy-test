// module.exports = {
//   content: [
//     "./index.html",
//     // "./src/Components/Companies/*.{js,jsx,ts,tsx}",
//     // "./src/Components/SignUp/*.{js,jsx,ts,tsx}",
//     // "./src/Components/FounderOnboarding/*.{js,jsx,ts,tsx}",
//     // "./src/Components/Message/*.{js,jsx,ts,tsx}",
//     // "./src/Components/EditProfile/*.{js,jsx,ts,tsx}",
//     // "./src/Components/PartnersRow/*.{js,jsx,ts,tsx}",
//     // "./src/Components/Footer/*.{js,jsx,ts,tsx}",
//     // "./src/Components/FAQAccordion/*.{js,jsx,ts,tsx}",
//     // "./src/Pages/FAQ/*.{js,jsx,ts,tsx}",
//     // "./src/Pages/Notifications/*.{js,jsx,ts,tsx}",
//     // "./src/Pages/NewGoal/*.{js,jsx,ts,tsx}",
//     // "./src/Pages/ForAdvisors/*.{js,jsx,ts,tsx}",
//     // "./src/Pages/ForCompanies/*.{js,jsx,ts,tsx}",
//     // "./src/Pages/Objectives/*.{js,jsx,ts,tsx}",
//     "./src/Pages/*/*.{js,jsx,ts,tsx}",
//     "./node_modules/flowbite/**/*.js",
//   ],

//   // ...
//   theme: {
//     extend: {
//       screens: {
//         pc: "1920px",
//         xs1: "400px",
//       },
//       colors: {
//         "primary-color": "#22C55E",
//         "primary-text": "#6B7280",
//         "secondary-color": "#D1D5DB",
//         "secondary-dark": "#374151",
//       },
//       borderWidth: {
//         3: "3px",
//       },
//       padding: {
//         7.5: "30px",
//       },
//       margin: {
//         7.5: "30px",
//       },
//       borderRadius: {
//         input: "15px",
//         pill: "40px",
//       },
//       transitionProperty: {
//         height: "height",
//         spacing: "margin, padding",
//       },
//       width: {
//         16: "60px",
//         18: "72px",
//       },
//       maxWidth: {
//         "8xl": "1440px",
//       },
//       height: {
//         16: "60px",
//         18: "72px",
//       },
//     },
//   },
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'outline-active': '#22C55E',
        'outline-primary': '#D1D5DB',

        // BACKGROUND
        'bg-primary-hovered': '#F9FAFB',
        'bg-success': '#F0FDF4',

        // FOREGROUND
        'fg-disabled': '#D1D5DB',
        'fg-brand': '#16A34A',
      },
    },
  },
  plugins: [],
}

