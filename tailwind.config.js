/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#060010', // 你的主背景色
        neonPurple: '#5227FF',
        pinkPop: '#FF9FFC',
        softPurple: '#B19EEF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // 正文
        heading: ['Poppins', 'sans-serif'], // 标题
      },
    },
  },
  plugins: [],
}
