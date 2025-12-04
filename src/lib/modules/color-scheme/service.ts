// src/lib/modules/color-scheme/service.ts
import { usePalette } from './store';
import {
	argbFromHex,
	hexFromArgb,
	themeFromSourceColor
} from '@material/material-color-utilities';
import { DEFAULT_PALETTE_STATE, PALETTE_TEMPLATES } from './values';

// helper
function createHexPalette(schemeJson: Record<string, unknown>): Record<string, string> {
	const hexPalette: Record<string, string> = {};
	for (const [key, value] of Object.entries(schemeJson)) {
		hexPalette[key] = hexFromArgb(value as number);
	}
	return hexPalette;
}

export function generatePalette(hexColor: string) {
	try {
		const sourceColor = argbFromHex(hexColor);
		const theme = themeFromSourceColor(sourceColor);

		const lightPalette = createHexPalette(theme.schemes.light.toJSON());
		const darkPalette = createHexPalette(theme.schemes.dark.toJSON());

		usePalette.update((s) => ({
			...s,
			sourceHex: hexColor,
			lightPalette,
			darkPalette
		}));
	} catch (err) {
		console.error('Invalid hex format:', err);
	}
}

export function setActiveScheme(scheme: 'light' | 'dark') {
	usePalette.update((s) => ({
		...s,
		activeScheme: scheme
	}));
}

export function setDisplayMode(mode: 'hex' | 'rgba') {
	usePalette.update((s) => ({
		...s,
		displayMode: mode
	}));
}

export function resetPalette() {
	usePalette.set(DEFAULT_PALETTE_STATE);
}

export function applyTemplate(name: string) {
	const tpl = PALETTE_TEMPLATES.find((t) => t.name === name);
	if (!tpl) return;

	usePalette.update((s) => ({
		...s,
		sourceHex: tpl.sourceHex,
		lightPalette: tpl.lightPalette,
		darkPalette: tpl.darkPalette
	}));
}
