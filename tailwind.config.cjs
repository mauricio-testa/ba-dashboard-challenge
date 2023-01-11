/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
      colors: {
        primary: 'rgb(37, 96, 223)'
      }
    },
	},
	plugins: [],
}
