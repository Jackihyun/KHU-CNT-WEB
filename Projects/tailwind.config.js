/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

