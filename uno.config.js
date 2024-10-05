import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerVariantGroup,
} from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";
// biome-ignore lint/nursery/useImportRestrictions: <explanation>
import { tech } from "./src/routes/utils.js";

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			extraProperties: { display: "inline-block", "vertical-align": "middle" },
		}),
		presetWebFonts({
			fonts: {
				opensans: [
					{
						name: "Open Sans",
						weights: ["300", "400", "500", "600", "700", "800"],
					},
				],
				firasans: [
					{
						name: "Fira Sans",
						weights: ["300", "400", "500", "600", "700", "800"],
					},
				],
				rajdhani: [{ name: "Rajdhani", weights: ["500", "700"] }],
			},
		}),
	],
	safelist: [
		...tech.map((skill) => `i-${skill.icon}`),
		...tech.map((skill) => `text-${skill.color}`),
	],
	shortcuts: {
		container: "px-4 mx-auto max-w-5xl lg:px-0",
	},
	theme: {
		colors: {
			light_navy: "#112240",
			secondary: "#007F73",
		},
	},
	transformers: [transformerVariantGroup()],
	extractors: [extractorSvelte()],
});
