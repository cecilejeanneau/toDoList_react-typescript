/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			height: {
				'922': '57.5rem',
			},
			backgroundImage: {
				'waves': 'url("../public/background.png")',
			},
			colors: {
				'light-nuance-40': '#A5D5DB',
				'color-light-primary': '#E8F4F6',
				'dark-color-20': '#187984',
				'dark-color-60': '#0C3C42',
				'color-state-success': '#AEEC2B',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
