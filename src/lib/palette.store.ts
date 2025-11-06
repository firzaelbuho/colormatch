// src/lib/palette.store.ts

import { writable, derived } from 'svelte/store'; // Impor 'derived'
import {
	argbFromHex,
	hexFromArgb,
	themeFromSourceColor
} from '@material/material-color-utilities';

// --- DATA DESKRIPSI (Translated to English) ---
export const colorDescriptions: Record<string, string> = {
	primary: 'The main color for key components like FABs, buttons, and active states.',
	onPrimary: 'Text and icons placed on top of the "primary" color.',
	primaryContainer: 'A container for elements needing less emphasis than "primary".',
	onPrimaryContainer: 'Text and icons placed on top of "primaryContainer".',
	secondary:
		'An accent color for secondary components like filters, chips, and less prominent buttons.',
	onSecondary: 'Text and icons placed on top of "secondary".',
	secondaryContainer: 'A container for less prominent "secondary" elements.',
	onSecondaryContainer: 'Text and icons placed on top of "secondaryContainer".',
	tertiary:
		'A color for complementary accents or highlighting less important elements (e.g., rewards).',
	onTertiary: 'Text and icons placed on top of "tertiary".',
	tertiaryContainer: 'A container for less prominent "tertiary" elements.',
	onTertiaryContainer: 'Text and icons placed on top of "tertiaryContainer".',
	error: 'The color for indicating errors and input validation.',
	onError: 'Text and icons placed on top of "error".',
	errorContainer: 'A container for less prominent "error" elements.',
	onErrorContainer: 'Text and icons placed on top of "errorContainer".',
	background: 'The main application background color (furthest back).',
	onBackground: 'Text and icons placed on top of "background".',
	surface: 'The surface color for components like cards, sheets, and menus.',
	onSurface: 'Text and icons placed on top of "surface" (main text color).',
	surfaceVariant: 'A surface color variant for distinguishing visual areas or components.',
	onSurfaceVariant: 'Text and icons placed on top of "surfaceVariant" (secondary text).',
	outline: 'Decorative or separator outlines, such as on text fields.',
	shadow: 'The color for drop shadows.',
	inverseSurface: 'A contrasting surface for placing elements on top.',
	inverseOnSurface: 'Text and icons placed on top of "inverseSurface".',
	inversePrimary: 'A contrasting "primary" color version for "inverseSurface".',
	surfaceDim: 'Dim surface',
	surfaceBright: 'Bright surface',
	surfaceContainerLowest: 'Surface container (lowest)',
	surfaceContainerLow: 'Surface container (low)',
	surfaceContainer: 'Surface container',
	surfaceContainerHigh: 'Surface container (high)',
	surfaceContainerHighest: 'Surface container (highest)'
};

// --- INTERFACE STATE (Diperbarui) ---
export interface PaletteState {
	sourceHex: string;
	activeScheme: 'light' | 'dark';
	lightPalette: Record<string, string>;
	darkPalette: Record<string, string>;
	json: string;
	displayMode: 'hex' | 'rgba';
}

// --- INITIAL STATE (Diperbarui) ---
const initialState: PaletteState = {
	sourceHex: '#6750A4',
	activeScheme: 'light',
	lightPalette: {},
	darkPalette: {},
	json: '{}',
	displayMode: 'hex'
};

// --- Fungsi Helper Internal ---
/**
 * Mengubah object scheme JSON (angka ARGB) menjadi object palet (string HEX)
 */
function createHexPalette(schemeJson: Record<string, unknown>): Record<string, string> {
	const hexPalette: Record<string, string> = {};
	for (const [key, value] of Object.entries(schemeJson)) {
		hexPalette[key] = hexFromArgb(value as number);
	}
	return hexPalette;
}

// --- STORE UTAMA ---
function createPaletteStore() {
	// Buat writable store dengan state awal
	const { subscribe, set, update } = writable<PaletteState>(initialState);

	const generatePalette = (hexColor: string) => {
		try {
			const sourceColor = argbFromHex(hexColor);
			const theme = themeFromSourceColor(sourceColor);

			// --- BUAT KEDUA PALET ---
			const lightPalette = createHexPalette(theme.schemes.light.toJSON());
			const darkPalette = createHexPalette(theme.schemes.dark.toJSON());

			// Update state dengan kedua palet
			update((state) => ({
				...state,
				sourceHex: hexColor,
				lightPalette: lightPalette,
				darkPalette: darkPalette
			}));
		} catch (error) {
			console.error('Invalid color format:', error);
		}
	};

	// Fungsi baru untuk mengganti scheme
	const setActiveScheme = (scheme: 'light' | 'dark') => {
		update((state) => ({ ...state, activeScheme: scheme }));
	};

	const setDisplayMode = (mode: 'hex' | 'rgba') => {
		update((state) => ({ ...state, displayMode: mode }));
	};

	return {
		subscribe,
		generatePalette,
		setActiveScheme, // <-- Ekspor fungsi baru
		setDisplayMode
	};
}

export const paletteStore = createPaletteStore();

// --- DERIVED STORES ---
// Ini adalah "selector" reaktif yang mengambil data dari store utama.

/**
 * Store turunan (derived) yang secara otomatis mengembalikan
 * palet (light/dark) yang sedang aktif.
 */
export const activePalette = derived(paletteStore, ($store) => {
	return $store.activeScheme === 'light' ? $store.lightPalette : $store.darkPalette;
});

/**
 * Store turunan untuk JSON string, agar selalu update
 * saat palet aktif berubah.
 */
export const activeJsonString = derived(activePalette, ($palette) => {
	return JSON.stringify($palette, null, 2);
});