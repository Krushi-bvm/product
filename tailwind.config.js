/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ecf0f3: '#ecf0f3',
        f3024d:'#f3024d',
      },
      // fontFamily: {
      //   'sans': ['Helvetica', 'Arial', 'sans-serif'],
      //   'serif': ['ui-serif', 'Georgia'],
      //   'mono': ['ui-monospace', 'SFMono-Regular'],
      //   'display': ['Oswald'],
      //   'body': ['"Open Sans"'],
      // }
    },
  },
  plugins: [],
}

