/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"outer-space": "#2d383a",
				"deep-space": "#4a646c",
				"star-blue": "#007bb8",
				"rusty": "#da2c43",
				"sunglow": "#ffcc33"
			}
		},
	},
	plugins: [],
}
