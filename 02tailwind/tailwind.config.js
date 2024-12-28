/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD1-_iVuMdIEuL70W9xQrL4RUimqbRz7uDzQ&s')",
      },
    },
  },
  plugins: [],
}

