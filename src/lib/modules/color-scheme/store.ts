// src/lib/modules/color-scheme/store.ts
import { writable, derived } from 'svelte/store';
import type { PaletteState } from './types';
import { DEFAULT_PALETTE_STATE } from './values';

export function createPaletteStore() {
	return writable<PaletteState>(DEFAULT_PALETTE_STATE);
}

// Store utama
export const usePalette = createPaletteStore();

// Derived store (tetap boleh di sini, tidak ada logic heavy)
export const activePalette = derived(usePalette, ($s) =>
	$s.activeScheme === 'light' ? $s.lightPalette : $s.darkPalette
);

export const activeJsonString = derived(activePalette, ($p) =>
	JSON.stringify($p, null, 2)
);
