import { readable } from "svelte/store";

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
