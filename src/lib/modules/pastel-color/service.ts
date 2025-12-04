import { usePastelColor } from "./store";
import { DEFAULT_PASTEL_STATE } from "./values";

/* ------------------------------------------------------
   Helper: Convert HEX → HSL
------------------------------------------------------ */
function hexToHsl(hex: string): { h: number; s: number; l: number } {
	hex = hex.replace("#", "");
	const r = parseInt(hex.substring(0, 2), 16) / 255;
	const g = parseInt(hex.substring(2, 4), 16) / 255;
	const b = parseInt(hex.substring(4, 6), 16) / 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	let s = 0;
	const l = (max + min) / 2;

	if (max !== min) {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
		else if (max === g) h = (b - r) / d + 2;
		else h = (r - g) / d + 4;

		h /= 6;
	}

	return { h, s, l };
}

/* ------------------------------------------------------
   Helper: Convert HSL → HEX
------------------------------------------------------ */
function hslToHex(h: number, s: number, l: number): string {
	h *= 360;

	const c = (1 - Math.abs(2 * l - 1)) * s;
	const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	const m = l - c / 2;

	let r = 0;
	let g = 0;
	let b = 0;

	if (0 <= h && h < 60) [r, g, b] = [c, x, 0];
	else if (60 <= h && h < 120) [r, g, b] = [x, c, 0];
	else if (120 <= h && h < 180) [r, g, b] = [0, c, x];
	else if (180 <= h && h < 240) [r, g, b] = [0, x, c];
	else if (240 <= h && h < 300) [r, g, b] = [x, 0, c];
	else [r, g, b] = [c, 0, x];

	const toHex = (n: number): string =>
		Math.round((n + m) * 255)
			.toString(16)
			.padStart(2, "0");

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/* ------------------------------------------------------
   Feature 1: PASTELIZE
   Convert a single color to nearest pastel version
------------------------------------------------------ */
export function pastelize(hex: string): void {
	const { h } = hexToHsl(hex);

	// FORCE pastel tone:
	const pastelS = 0.22 + Math.random() * 0.10; // 22–32%
	const pastelL = 0.78 + Math.random() * 0.10; // 78–88%

	const pastel = hslToHex(h, pastelS, pastelL);

	usePastelColor.update((state) => ({
		...state,
		sourceHex: hex,
		pastelize: { original: hex, pastel }
	}));
}


/* ------------------------------------------------------
   Feature 2: Generate Harmonious Pastel Palette
   Creates 8 soft pastel tones around the base hue
------------------------------------------------------ */
export function generatePastelPalette(hex: string): void {
	const { h, s, l } = hexToHsl(hex);

	const colors: string[] = [];

	for (let i = 0; i < 8; i++) {
		const offsetHue = (h + i * 0.05) % 1;

		const pastel = hslToHex(
			offsetHue,
			Math.max(0.22, s * 0.35),
			Math.min(0.88, l + 0.15 + i * 0.01)
		);

		colors.push(pastel);
	}

	usePastelColor.update((state) => ({
		...state,
		sourceHex: hex,
		generatedPalette: {
			source: hex,
			colors
		}
	}));
}

/* ------------------------------------------------------
   Feature 3: Reset Module State
------------------------------------------------------ */
export function resetPastel(): void {
	usePastelColor.set(DEFAULT_PASTEL_STATE);
}
