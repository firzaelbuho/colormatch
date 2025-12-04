<script lang="ts">
	import type { Scheme } from "../types";
	export let palette: Scheme;

	const GRID_COLS = 6;
	const GRID_ROWS = 5;
	const GRID_SIZE = GRID_COLS * GRID_ROWS;

	// Ambil semua warna dari scheme
	$: allColors = Object.values(palette).filter(Boolean);

	// Jika warna kurang → looping
	$: colors = Array.from({ length: GRID_SIZE }, (_, i) => {
		return allColors[i % allColors.length];
	});
</script>

<div class="card bg-base-200 shadow-xl">
	<div class="card-body items-center text-center">

		<h2 class="text-sm font-semibold text-base-content/70 mb-4">
			Color Scheme
		</h2>

		<!-- FIXED 6×5 GRID MOSAIC -->
		<div
			class="
				grid
				grid-cols-6
				w-full max-w-lg
				rounded-xl overflow-hidden
			"
			style="line-height: 0;"
		>
			{#each colors as hex}
				<div
					class="w-full aspect-square"
					style="background-color: {hex};"
				></div>
			{/each}
		</div>

	</div>
</div>
