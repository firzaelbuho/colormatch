export interface PaletteState {
	sourceHex: string;
	activeScheme: 'light' | 'dark';
	lightPalette: Scheme;
	darkPalette: Scheme;
	json: string;
	displayMode: 'hex' | 'rgba';
}

export interface PaletteTemplate {
	name: string;
	sourceHex: string;
	lightPalette: Scheme;
	darkPalette: Scheme;
}

export interface Scheme {
	primary: string
	onPrimary: string
	primaryContainer: string
	onPrimaryContainer: string
	secondary: string

	onSecondary: string
	secondaryContainer: string
	onSecondaryContainer: string
	tertiary: string
	onTertiary: string

	tertiaryContainer: string
	onTertiaryContainer: string
	error: string
	onError: string
	errorContainer: string

	onErrorContainer: string
	background: string
	onBackground: string
	surface: string
	onSurface: string

	surfaceVariant: string
	onSurfaceVariant: string
	outline: string
	outlineVariant: string
	shadow: string

	scrim: string
	inverseSurface: string
	inverseOnSurface: string
	inversePrimary: string
}
