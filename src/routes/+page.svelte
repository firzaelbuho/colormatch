<script lang="ts">
	import { onMount } from 'svelte';
	import {
		paletteStore,
		activePalette,
		activeJsonString
	} from '$lib/palette.store';

	import InputCard from '$lib/components/1_InputCard.svelte';
	import ColorBarCard from '$lib/components/2_ColorBarCard.svelte';
	import PaletteList from '$lib/components/3_PaletteList.svelte';
	import MockupPreview from '$lib/components/4_MockupPreview.svelte';

	let sourceColor: string;

	let palette: Record<string, string>;
	$: palette = $activePalette;

	let entries: [string, string][] = [];
	$: entries = Object.entries($activePalette);

	let jsonString: string;
	$: jsonString = $activeJsonString;

	let activeScheme: 'light' | 'dark';
	let sourceHexFromStore: string = '';

	paletteStore.subscribe((value) => {
		activeScheme = value.activeScheme;
		sourceHexFromStore = value.sourceHex;

		if (!sourceColor) {
			sourceColor = value.sourceHex;
		}
	});

	onMount(() => {
		paletteStore.generatePalette(sourceColor || '#6750A4');
	});

	function handleGenerate() {
		paletteStore.generatePalette(sourceColor);
	}
</script>

<!-- MAIN WRAPPER -->
<div class="container mx-auto p-4 md:p-8 max-w-7xl space-y-6">

	<!-- INPUT + COLOR BAR -->
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
		<InputCard bind:sourceColor on:generate={handleGenerate} />
		<ColorBarCard {palette} />
	</div>

	<!-- PALETTE LIST + MOCKUP -->
	{#if entries.length > 0}
		<PaletteList {entries} {jsonString} {activeScheme} />
		<MockupPreview {palette} />

		<!-- MATERIAL DESIGN INFO (masih dalam palette area) -->
		<div class="pt-6 text-center text-sm"
			
		>
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

<!-- FOOTER (tidak memakai palette sama sekali) -->
<footer class="text-center p-6 py-8 text-base-content/70 border-t border-base-content/10 mt-10">
	Made with ❤️ by
	<a
		href="https://github.com/firzaelbuho"
		target="_blank"
		rel="noopener noreferrer"
		class="link link-hover font-medium"
	>
		firzaelbuho
	</a>
</footer>
