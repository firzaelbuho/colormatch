<script lang="ts">

	import PastelSwatch from '$lib/modules/pastel-color/components/PastelSwatch.svelte';

	export let colors: string[] = [];
</script>

<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
	{#each colors as c}
		<PastelSwatch color={c} />
	{/each}
</div>
