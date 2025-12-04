<script lang="ts">
	import PaletteGrid from "./PaletteGrid.svelte";
	import type { PastelTemplate } from "../types";

	export let templates: PastelTemplate[] = [];

	let search = "";

	// filtered templates (reactive)
	$: filtered = templates.filter((t) =>
		t.name.toLowerCase().includes(search.toLowerCase())
	);
</script>

<section class="py-10">
	<h2 class="text-2xl font-semibold mb-6">Pastel Template Palettes</h2>

	<!-- SEARCH BAR -->
	<div class="form-control mb-6">
		<input
			type="text"
			placeholder="Search template…"
			class="input input-bordered w-full"
			bind:value={search}
		/>
	</div>

	<!-- TEMPLATE LIST -->
	<div class="space-y-8">
		{#each filtered as t}
			<div class="card bg-base-100 shadow p-6">
				<h3 class="text-xl font-semibold mb-4">{t.name}</h3>
				<PaletteGrid colors={t.colors} />
			</div>
		{:else}
			<p class="opacity-70">No template found.</p>
		{/each}
	</div>
</section>
