import { writable, derived } from "svelte/store";
import type { PastelColorState } from "./types";
import { DEFAULT_PASTEL_STATE } from "./values";

export function createPastelColorStore() {
	return writable<PastelColorState>(DEFAULT_PASTEL_STATE);
}

export const usePastelColor = createPastelColorStore();

export const pastelJson = derived(usePastelColor, ($s) =>
	JSON.stringify(
		{
			pastelize: $s.pastelize,
			generatedPalette: $s.generatedPalette
		},
		null,
		2
	)
);
