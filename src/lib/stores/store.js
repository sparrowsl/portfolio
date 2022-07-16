import { readable, writable } from "svelte/store";

// Store for toggling the theme
export let isDarkMode = writable(false);

// Store for skills
export const skills = readable([
	"html5",
	"css3",
	"javascript",
	"svelte",
	"python",
	"flask",
	"tailwindcss",
	"prisma",
	"markdown",
	"git",
	"github",
	"netlify",
	"vercel",
	"heroku"
]);

// Store for experiences
export const experiences = readable([
	{
		title: "Web Developer (Intern)",
		company: "SoftMagazin",
		duration: "June 2022 - Present"
	},
	{
		title: "Python Developer (Intern)",
		company: "Side Hustle",
		duration: "October 2021 - December 2021"
	},
	{
		title: "Slack Community Manager",
		company: "TheNewBoston",
		duration: "October 2020 - March 2021"
	},
	{
		title: "Contributing Developer @ EasyToGit",
		company: "GitHub Contribution",
		duration: "August 2020 - April 2021"
	}
]);
