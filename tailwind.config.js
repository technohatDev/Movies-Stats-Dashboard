/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: "SignikaNegative"
			},
			colors: {
				primary: "#0873d7"
			}
		}
	},
	plugins: []
};
