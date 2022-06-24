import { readable } from "svelte/store";

export const skills = readable([
	{
		classes: "bx bxl-html5",
		name: "HTML"
	},
	{
		classes: "bx bxl-css3",
		name: "CSS"
	},
	{
		classes: "bx bxl-javascript",
		name: "JavaScript"
	},
	{
		classes: "bx bxl-javascript",
		name: "Svelte/SvelteKit"
	},
	{
		classes: "bx bxl-python",
		name: "Python"
	},
	{
		classes: "bx bxl-flask",
		name: "Flask"
	},
	{
		classes: "bx bxl-tailwind-css",
		name: "TailwindCSS"
	},
	{
		classes: "bx bxl-markdown",
		name: "Markdown"
	},
	{
		classes: "bx bxl-git",
		name: "Git"
	},
	{
		classes: "bx bxl-github",
		name: "GitHub"
	},
	{
		classes: "bx bxl-netlify",
		name: "Netlify"
	},
	{
		classes: "bx bxl-heroku",
		name: "Heroku"
	}
]);
