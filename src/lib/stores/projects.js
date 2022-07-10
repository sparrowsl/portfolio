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
		title: "Eatery",
		desc: "A small restaurant website clone",
		image: "",
		stack: ["HTML", "CSS", "JavaScript", "SvelteKit"],
		links: {
			demo: "http://eateryfoods.netlify.app/",
			code: "https://github.com/benjithorpe/eatery"
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
