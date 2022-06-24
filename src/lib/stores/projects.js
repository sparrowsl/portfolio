import { readable } from "svelte/store";

export const projects = readable([
	{
		title: "Theater Screen",
		desc: "Displays movies and information about each movie viewed.",
		image: "",
		stack: ["HTML", "CSS", "JavaScript", "sveltekit"],
		links: {
			demo: "https://theaterscreen.netlify.app/",
			code: "https://github.com/benjithorpe/theater-screen"
		}
	},
	{
		title: "Codebuddy",
		desc: "A smart and reactive web based HTML/CSS editor.",
		image: "",
		stack: ["HTML", "CSS", "JavaScript", "Svelte"],
		links: {
			demo: "https://codebuddy.netlify.app/",
			code: "https://github.com/benjithorpe/codebuddy"
		}
	},
	{
		title: "Countries info",
		desc: "Display information of countries in the world. toggle between light and dark mode.",
		image: "",
		stack: ["HTML", "CSS", "JavaScript", "Svelte"],
		links: {
			demo: "http://fem-countries-data.vercel.app/",
			code: "https://github.com/benjithorpe/FEM-countries-data"
		}
	},
	{
		title: "Sivo",
		desc: "An anonymous platform for random post and comments (no authentication required).",
		image: "",
		stack: ["HTML", "CSS", "Python", "Django"],
		links: {
			demo: "http://sivos.herokuapp.com/",
			code: "https://github.com/benjithorpe/sivo"
		}
	},
	{
		title: "Advice Generator",
		desc: `Generates random advices. Makes use of the
						<a href='https://api.adviceslip.com/' class="text-blue-500 underline font-bold">Advice Slip API</a>`,
		image: "",
		stack: ["HTML", "CSS", "JavaScript"],
		links: {
			demo: "https://fem-advice-generator.netlify.app/",
			code: "https://github.com/benjithorpe/FEM-advice-generator"
		}
	}
]);
