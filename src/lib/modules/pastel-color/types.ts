export interface PastelizeResult {
	original: string;
	pastel: string;
}

export interface PastelPaletteGeneratorResult {
	source: string;
	colors: string[];
}

export interface PastelTemplate {
	name: string;
	colors: string[];
}

export interface PastelColorState {
	sourceHex: string;
	pastelize: PastelizeResult | null;
	generatedPalette: PastelPaletteGeneratorResult | null;
	templates: PastelTemplate[];
	json: string;
}
