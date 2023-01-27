/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'waves': 'url("../public/background.png")',
			},
			colors: {
				'light-nuance-40': '#A5D5DB',
				'dark-color-20': '#187984',
			},
		},
	},
	plugins: [],
};
