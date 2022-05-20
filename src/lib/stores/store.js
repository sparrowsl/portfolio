import { readable, writable } from "svelte/store";

export let darkMode = writable(false);
export const projects = readable([
	{
		title: "Theater Screen",
		desc: "Displays movies and information about each movie viewed.",
		image: "",
		stack: ["HTML", "CSS", "JavaScript", "sveltekit"],
		links: {
			live: "https://theaterscreen.netlify.app/",
			code: "https://github.com/benjithorpe/theaterscreen"
		}
	},
	{
		title: "Codebuddy",
		desc: "A smart and reactive web based HTML/CSS editor.",
		image: "",
		stack: ["HTML", "CSS", "JavaScript", "Svelte"],
		links: {
			live: "https://codebuddy.netlify.app/",
			code: "https://github.com/benjithorpe/codebuddy"
		}
	},
	{
		title: "Countries info",
		desc: "Display information of countries in the world. toggle between light and dark mode.",
		image: "",
		stack: ["HTML", "CSS", "JavaScript", "Svelte"],
		links: {
			live: "http://fem-countries-data.vercel.app/",
			code: "https://github.com/benjithorpe/FEM-countries-data"
		}
	},
	{
		title: "Sivo",
		desc: "An anonymous platform for random post and comments (no authentication required).",
		image: "",
		stack: ["HTML", "CSS", "Python", "Django"],
		links: {
			live: "http://sivos.herokuapp.com/",
			code: "https://github.com/benjithorpe/sivo"
		}
	},
	{
		title: "Advice Generator",
		desc: `Generates random advices. Makes use of the
						<a href='https://api.adviceslip.com/' class="text-blue-700">Advice Slip API</a>`,
		image: "",
		stack: ["HTML", "CSS", "JavaScript"],
		links: {
			live: "https://fem-advice-generator.netlify.app/",
			code: "https://github.com/benjithorpe/FEM-advice-generator"
		}
	}
]);
