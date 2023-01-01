import { readable } from "svelte/store";

export const projects = readable([
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
	}
]);
