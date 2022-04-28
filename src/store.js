import { readable, writable } from "svelte/store";

export let darkMode = writable(false);
export const projects = readable([
  {
    title: "Codebuddy",
    desc: "A cool, smart, responsive and reactive web based HTML editor.",
    image: "",
    stack: ["HTML", "CSS", "JavaScript", "Svelte"],
    links: {
      live: "https://codebuddy.netlify.app/",
      code: "https://github.com/benjithorpe/codebuddy"
    },
  },
  {
    title: "Countries info",
    desc: "Display information of countries in the world. toggle between light and dark mode.",
    image: "",
    stack: ["HTML", "CSS", "JavaScript", "Svelte"],
    links: {
      live: "http://fem-countries-data.vercel.app/",
      code: "https://github.com/benjithorpe/FEM-countries-data"
    },
  },
  {
    title: "Sivo",
    desc: "An anonymous platform for random post and comments (no authentication required).",
    image: "",
    stack: ["HTML", "CSS", "Python", "Django"],
    links: {
      live: "http://sivos.herokuapp.com/",
      code: "https://github.com/benjithorpe/sivo"
    },
  },
  {
    title: "Advice Generator",
    desc: "Generates random advices. Makes use of the <a href='https://api.adviceslip.com/'>Advice Slip API</a>",
    image: "",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://fem-advice-generator.netlify.app/",
      code: "https://github.com/benjithorpe/FEM-advice-generator"
    },
  },
]);
