<script lang="ts">
	import {
		usePastelColor,
		pastelJson
	} from "./store";

	import {
		pastelize,
		generatePastelPalette
	} from "./service";

	// Components
	import InputColor from "./components/InputColor.svelte";
	import PastelizeSection from "./components/PastelizeSection.svelte";
	import PaletteGeneratorSection from "./components/PaletteGeneratorSection.svelte";
	import TemplateSection from "./components/TemplateSection.svelte";

	let sourceColor = "#ff9eb5";
	let activeTab: "pastelize" | "palette" | "templates" = "pastelize";

	$: state = $usePastelColor;

	function handleTabChange(tab: typeof activeTab) {
		activeTab = tab;
	}
</script>

<main class="max-w-5xl mx-auto px-4 md:px-6 lg:px-10">

	<!-- HERO -->
	<section class="py-10 text-center">
		<h1 class="text-4xl font-bold mb-4">Pastel Color Studio</h1>
		<p class="text-base opacity-80">
			Pastelize any color, generate harmonious pastel palettes, or explore beautiful pastel templates.
		</p>
	</section>

	<!-- INPUT SECTION -->
	<section class="py-10">
		<InputColor bind:color={sourceColor} label="Base Color" />
	</section>

	<!-- TABS -->
	<div class="tabs tabs-boxed w-full mb-6">
		<button
			class="tab {activeTab === 'pastelize' ? 'tab-active' : ''}"
			on:click={() => handleTabChange('pastelize')}
		>
			Pastelize
		</button>

		<button
			class="tab {activeTab === 'palette' ? 'tab-active' : ''}"
			on:click={() => handleTabChange('palette')}
		>
			Palette Generator
		</button>

		<button
			class="tab {activeTab === 'templates' ? 'tab-active' : ''}"
			on:click={() => handleTabChange('templates')}
		>
			Templates
		</button>
	</div>

	<!-- ACTIVE TAB CONTENT -->
	{#if activeTab === "pastelize"}
		<PastelizeSection
			color={sourceColor}
			result={state.pastelize}
			onGenerate={() => pastelize(sourceColor)}
		/>
	{:else if activeTab === "palette"}
		<PaletteGeneratorSection
			color={sourceColor}
			palette={state.generatedPalette?.colors ?? []}
			onGenerate={() => generatePastelPalette(sourceColor)}
		/>
	{:else}
		<TemplateSection templates={state.templates} />
	{/if}

	<!-- JSON -->
	<section class="py-10">
		<h2 class="text-xl font-semibold mb-4">JSON Output</h2>
		<pre class="bg-base-200 p-4 rounded-lg">{ $pastelJson }</pre>
	</section>
</main>
