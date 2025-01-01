/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        bgImg : "url('https://media.istockphoto.com/id/858560952/photo/dollar-banknotes-background.jpg?s=612x612&w=0&k=20&c=ghEdwyNnfmWHIDoCnw74HgFxBJ908XLKnfwrCT90Tlg=')"
      },
    },
  },
  plugins: [],
}

