import { readable } from "svelte/store";

export const skills = readable([
	{
		icon: "html5",
		name: "HTML"
	},
	{
		icon: "css3",
		name: "CSS"
	},
	{
		icon: "javascript",
		name: "JavaScript"
	},
	{
		icon: "svelte",
		name: "Svelte/SvelteKit"
	},
	{
		icon: "python",
		name: "Python"
	},
	{
		icon: "flask",
		name: "Flask"
	},
	{
		icon: "tailwindcss",
		name: "TailwindCSS"
	},
	{
		icon: "markdown",
		name: "Markdown"
	},
	{
		icon: "git",
		name: "Git"
	},
	{
		icon: "github",
		name: "GitHub"
	},
	{
		icon: "netlify",
		name: "Netlify"
	},
	{
		icon: "heroku",
		name: "Heroku"
	}
]);
