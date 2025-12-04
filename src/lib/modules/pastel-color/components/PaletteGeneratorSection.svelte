<script lang="ts">
	import PaletteGrid from "./PaletteGrid.svelte";

	// Props
	export let color: string;
	export let palette: string[] = [];
	export let onGenerate: () => void;
</script>

<section class="py-10">
	<h2 class="text-2xl font-semibold mb-6">Pastel Palette Generator</h2>

	<!-- Generate Button -->
	<button class="btn btn-primary" on:click={() => onGenerate()}>
		Generate Palette
	</button>

	<!-- Palette Preview -->
	{#if palette.length > 0}
		<div class="mt-6">
			<PaletteGrid colors={palette} />
		</div>
	{/if}
</section>
