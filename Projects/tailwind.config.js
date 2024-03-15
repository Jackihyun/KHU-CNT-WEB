/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'm': { 'min': "0px", "max": "389px" },
      'sm': { 'min': "390px", 'max': "819px" },
      'md': { 'min': "820px", 'max': "1023px" },
      'lg': { 'min': "1024px", 'max': "1279px" },
      'xl': { 'min': "1280px", 'max': "1535px" },
      '2xl': { 'min': "1536px" },
    },
    extend: {
      fontFamily: {
        'pretendard-medium': ['Pretendard-Medium', 'sans-serif'],
        'pretendard-regular': ['Pretendard-Regular', 'sans-serif'],
        'pretendard-semibold': ['Pretendard-Semibold', 'sans-serif'],
        'pretendard-bold': ['Pretendard-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

