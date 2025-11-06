<script lang="ts">
	import { onMount } from 'svelte';
	// Impor store utama dan derived stores BARU
	import {
		paletteStore,
		activePalette,
		activeJsonString
	} from '$lib/palette.store';

	// Impor semua komponen (perhatikan nama baru)
	import InputCard from '$lib/components/1_InputCard.svelte';
	import ColorBarCard from '$lib/components/2_ColorBarCard.svelte';
	import PaletteList from '$lib/components/3_PaletteList.svelte';
	import MockupPreview from '$lib/components/4_MockupPreview.svelte';

	// --- State & Logika Inti ---

	// Variabel lokal untuk di-binding ke InputCard
	let sourceColor: string;

	// Berlangganan ke nilai-nilai store
	// Kita gunakan '$' (shorthand) untuk derived stores
	let palette: Record<string, string>;
	$: palette = $activePalette; // <-- Gunakan derived store

	let entries: [string, string][] = [];
	$: entries = Object.entries($activePalette); // <-- Buat entries dari derived store

	let jsonString: string;
	$: jsonString = $activeJsonString; // <-- Gunakan derived store

	let activeScheme: 'light' | 'dark';
	let sourceHexFromStore: string = '';

	// Gunakan store utama untuk state non-derived
	paletteStore.subscribe((value) => {
		activeScheme = value.activeScheme;
		sourceHexFromStore = value.sourceHex;

		// Set nilai lokal saat store pertama kali dimuat
		if (!sourceColor) {
			sourceColor = value.sourceHex;
		}
	});

	// Panggil generate saat komponen dimuat
	onMount(() => {
		paletteStore.generatePalette(sourceColor || '#6750A4');
	});

	// Fungsi ini dipanggil oleh event 'generate' dari InputCard
	function handleGenerate() {
		paletteStore.generatePalette(sourceColor);
	}
</script>

<div class="container mx-auto p-4 md:p-8 max-w-7xl space-y-6">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
		<InputCard bind:sourceColor on:generate={handleGenerate} />
		<ColorBarCard palette={palette} />
	</div>

	{#if entries.length > 0}
		<PaletteList {entries} {jsonString} {activeScheme} />

		<MockupPreview palette={palette} />
	{/if}
</div>

<footer class="text-center p-4 py-8 text-base-content/70">
	Made with ❤️ by <a
		href="https://github.com/firzaelbuho"
		target="_blank"
		rel="noopener noreferrer"
		class="link link-hover font-medium"
	>
		firzaelbuho
	</a>
</footer>