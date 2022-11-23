/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				'lh': {'raw': '(min-height: 840px), (min-width:768px)'}
			}
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [],
};
