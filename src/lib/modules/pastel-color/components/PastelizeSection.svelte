<script lang="ts">
	import PastelSwatch from "./PastelSwatch.svelte";

	export let color: string;
	export let result: { original: string; pastel: string } | null;
	export let onGenerate: () => void;
</script>

<section class="py-10">
	<h2 class="text-2xl font-semibold mb-6">Pastelize Color</h2>

	<button class="btn btn-primary" on:click={onGenerate}>Pastelize</button>

	{#if result}
		<div class="grid grid-cols-2 gap-6 mt-6">
			<PastelSwatch color={result.original} />
			<PastelSwatch color={result.pastel} />
		</div>
	{/if}
</section>
