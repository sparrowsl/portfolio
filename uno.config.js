import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerVariantGroup,
} from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";
import skills from "./src/lib/stores/skills.js";

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			extraProperties: { display: "inline-block", "vertical-align": "middle" },
		}),
		presetWebFonts({
			fonts: {
				opensans: [{ name: "Open Sans", weights: ["300", "400", "500", "600", "700", "800"] }],
			},
		}),
	],
	safelist: [
		...skills.map((skill) => `i-${skill.icon}`),
		...skills.map((skill) => `text-${skill.color}`),
	],
	shortcuts: {
		container: "px-4 mx-auto max-w-5xl lg:px-0",
	},
	theme: {
		colors: {
			brand: "#0A2647",
			dark_navy: "#020c1b",
			navy: "#0a192f",
			light_navy: "#112240",
			lightest_navy: "#233554",
			navy_shadow: "rgba(2,12,27,0.7)",
			dark_slate: "#495670",
			slate: "#8892b0",
			teal: "rgba(45, 212, 191)",
			light_slate: "#a8b2d1",
			lightest_slate: "#ccd6f6",
			white: "#e6f1ff",
		},
	},
	transformers: [transformerVariantGroup()],
	extractors: [extractorSvelte()],
});
