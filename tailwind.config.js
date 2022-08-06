/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				/* accent: '#E56B6F', */
				accent: '#334155',
				dark: '#0f172a',
				'dark-blue': '#355070',
			},
		},
		fontFamily: {
			display: ['Inter', 'system-ui', 'sans-serif'],
			body: ['Inter', 'system-ui', 'sans-serif'],
		},
	},
	plugins: [],
};
