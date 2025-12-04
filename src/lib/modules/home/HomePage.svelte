<script lang="ts">
import NavCard from '$lib/modules/home/components/NavCard.svelte';
</script>

<main class="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-16">

	<section class="text-center mb-16">
		<h1 class="text-4xl md:text-5xl font-bold mb-4">
			UI Color Match
		</h1>
		<p class="opacity-80 text-base md:text-lg">
			A collection of powerful color utilities for UI and design workflow.
		</p>
	</section>

	<!-- Navigation Grid -->
	<section class="grid grid-cols-1 sm:grid-cols-2 gap-8">

		<NavCard
			title="Material Color Scheme Generator"
			desc="Generate full Material Design 3 color palettes from a single source color."
			href="/color-scheme"
		/>

		<NavCard
			title="Pastel Color Studio"
			desc="Transform colors into pastel tones and generate beautiful pastel palettes."
			href="/pastel-color"
		/>

	</section>

</main>
