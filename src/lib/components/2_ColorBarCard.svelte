<script lang="ts">
	// Komponen ini menerima data palet
	export let palette: Record<string, string> = {};

	// Kita akan gunakan Object.entries() untuk mengambil SEMUA warna
	// secara berurutan, tidak lagi terbatas 8 warna.
	$: colorsToShow = Object.entries(palette).filter(([, hex]) => hex);
</script>

<div class="card bg-base-200 shadow-xl hidden lg:flex h-full">
	<div class="card-body items-center justify-center p-6 w-full">
		<span class="text-sm font-semibold text-base-content/70 mb-2">Full Palette Scheme</span>
		<div
			class="color-bar-wrapper flex w-full h-16 rounded-lg overflow-hidden border border-base-content/20"
		>
			{#each colorsToShow as [name, hex] (name)}
				<div
					class="tooltip h-full flex-grow"
					data-tip="{name}: {hex}"
					style="background-color: {hex};"
				>
					<div class="color-segment h-full w-full"></div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.color-segment {
		transition: transform 0.2s ease-out;
	}
	.tooltip:hover .color-segment {
		transform: scaleY(1.15);
		z-index: 10;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
	}
</style>