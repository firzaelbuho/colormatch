<script lang="ts">
	import { onMount } from 'svelte';

	// Store
	import {
		usePalette,
		activePalette,
		activeJsonString
	} from './store';

	// Service
	import { generatePalette } from './service';

	// Components
	import InputCard from './components/InputCard.svelte';
	import ColorBarCard from './components/ColorBarCard.svelte';
	import PaletteList from './components/PaletteList.svelte';
	import MockupPreview from './components/MockupPreview.svelte';

	// Source color (user input)
	let sourceColor: string;

	// Derived state
	$: palette = $activePalette;
	$: entries = Object.entries(palette);
	$: jsonString = $activeJsonString;

	// Additional store-derived values
	let activeScheme: 'light' | 'dark';
	let sourceHexFromStore = '';

	usePalette.subscribe((v) => {
		activeScheme = v.activeScheme;
		sourceHexFromStore = v.sourceHex;

		if (!sourceColor) {
			sourceColor = v.sourceHex;
		}
	});

	onMount(() => {
		generatePalette(sourceColor || '#6750A4');
	});

	function handleGenerate() {
		generatePalette(sourceColor);
	}
</script>

<!-- MAIN WRAPPER -->
<div class="container mx-auto p-4 md:p-8 max-w-7xl space-y-6">

	<!-- INPUT + COLOR BAR -->
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
		<InputCard bind:sourceColor on:generate={handleGenerate} />
		<ColorBarCard {palette} />
	</div>

	<!-- PALETTE LIST + PREVIEW -->
	{#if entries.length > 0}
		<PaletteList {entries} {jsonString} {activeScheme} />
		<MockupPreview {palette} />

		<!-- MATERIAL DESIGN LINK -->
		<div class="pt-6 text-center text-sm">
			For more details, read the
			<a
				href="https://m3.material.io/styles/color/the-color-system/color-roles"
				target="_blank"
				rel="noopener noreferrer"
				class="link font-medium"
				style:color={palette.primary}
			>
				official Material Design 3 guidelines
			</a>.
		</div>
	{/if}
</div>


