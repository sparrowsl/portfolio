import { readable } from "svelte/store";

export const skills = readable([
	{
		icon: "bx bxl-html5",
		name: "HTML"
	},
	{
		icon: "bx bxl-css3",
		name: "CSS"
	},
	{
		icon: "bx bxl-javascript",
		name: "JavaScript"
	},
	{
		icon: "bx bxl-javascript",
		name: "Svelte/SvelteKit"
	},
	{
		icon: "bx bxl-python",
		name: "Python"
	},
	{
		icon: "bx bxl-flask",
		name: "Flask"
	},
	{
		icon: "bx bxl-tailwind-css",
		name: "TailwindCSS"
	},
	{
		icon: "bx bxl-markdown",
		name: "Markdown"
	},
	{
		icon: "bx bxl-git",
		name: "Git"
	},
	{
		icon: "bx bxl-github",
		name: "GitHub"
	},
	{
		icon: "bx bxl-netlify",
		name: "Netlify"
	},
	{
		icon: "bx bxl-heroku",
		name: "Heroku"
	}
]);
