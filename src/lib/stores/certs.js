import { readable } from "svelte/store";

export const certificates = readable([
	{
		title: "Python Certificate",
		institute: "(HackerRank)"
	},
	{
		title: "Python for Everybody",
		institute: "(Coursera)"
	},
	{
		title: "Diploma in Python Programming",
		institute: "(Alison)"
	},
	{
		title: "Diploma in Software Engineering",
		institute: "(BlueCrest University College)"
	}
]);
