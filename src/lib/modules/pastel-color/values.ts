import type { PastelColorState, PastelTemplate } from "./types";

/**
 * @typedef {object} PastelTemplate
 * @property {string} name - Nama deskriptif untuk palet.
 * @property {string[]} colors - Array berisi 4 kode warna HEX pastel.
 */

/**
 * Palet Warna Pastel Default untuk aplikasi SvelteKit.
 * Palet ini ideal untuk tema yang lembut dan menenangkan.
 * @type {PastelTemplate[]}
 */
export const DEFAULT_TEMPLATES: PastelTemplate[] = [
	// Awal: Template dari permintaan Anda
	{
		name: "Sakura Spring",
		colors: ["#ffcce0", "#ffeaf4", "#ffd8d8", "#ffe0f7"]
	},
	{
		name: "Ocean Breeze",
		colors: ["#b8e8ff", "#c9f6ff", "#d6fbff", "#aee1f9"]
	},
	{
		name: "Pastel Candy",
		colors: ["#fcbad3", "#fce1d4", "#e8f6f3", "#c5e7e2"]
	},

	// Tambahan: Palet Baru
	{
		name: "Mint Dream",
		colors: ["#c5e8c5", "#e6f9e6", "#b0e0a0", "#d1f1d1"]
	},
	{
		name: "Lavender Haze",
		colors: ["#d9b8ff", "#e9d5ff", "#c5a4f7", "#e1cbf9"]
	},
	{
		name: "Peach Sunrise",
		colors: ["#ffb3a7", "#ffc3c0", "#f7d0a7", "#ffe5d4"]
	},
	{
		name: "Cloud Nine",
		colors: ["#d2dcf7", "#e5edff", "#c4d1e7", "#e7e7eb"]
	},
	{
		name: "Lemon Drop",
		colors: ["#fff9c4", "#fffde7", "#fff176", "#ffe082"]
	},
	{
		name: "Coral Reef",
		colors: ["#ffaa80", "#ffc7a9", "#ff9e66", "#f7d0c4"]
	},
	{
		name: "Forest Whisper",
		colors: ["#b4cfb0", "#cce6c8", "#a7c4a1", "#d8e8d6"]
	},
	{
		name: "Violet Sky",
		colors: ["#b8c2ff", "#d5dcff", "#a0a9e7", "#c8d0f9"]
	},
	{
		name: "Cotton Candy",
		colors: ["#ffc9e4", "#ffe7f5", "#f7b1d1", "#e3d2f9"]
	},
	{
		name: "Misty Rose",
		colors: ["#f7d7d7", "#f9eaea", "#e0b0b0", "#f5caca"]
	},
	{
		name: "Aqua Splash",
		colors: ["#a0e6e6", "#c5f7f7", "#8bd3d3", "#b9f0f0"]
	},
	{
		name: "Harvest Gold",
		colors: ["#f7e8a9", "#fffad0", "#e0c98e", "#f5ebbf"]
	},
	{
		name: "Bubblegum Pop",
		colors: ["#ff99b3", "#ffb8cb", "#e6859e", "#f7d1db"]
	},
	{
		name: "Stone Wash",
		colors: ["#c7c7d6", "#e0e0e9", "#b0b0c0", "#d8d8e5"]
	},
	{
		name: "Tropical Punch",
		colors: ["#ffcc99", "#ffe0b8", "#ffba7f", "#ffd8c0"]
	},
	{
		name: "Lilac Bloom",
		colors: ["#e0baff", "#f0e5ff", "#c7a3e6", "#e9d8f9"]
	},
	{
		name: "Grassland Soft",
		colors: ["#c8d9c0", "#e1ecd9", "#b3c9ac", "#d5e4cf"]
	}
];

export const DEFAULT_PASTEL_STATE: PastelColorState = {
	sourceHex: "#ff9eb5",
	pastelize: null,
	generatedPalette: null,
	templates: DEFAULT_TEMPLATES,
	json: "{}"
};
