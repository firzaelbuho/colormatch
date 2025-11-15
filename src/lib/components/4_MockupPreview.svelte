<script lang="ts">
	import InfographicMockup from "./preview/InfographicMockup.svelte";
	import InfographicPreview from "./preview/InfographicMockup.svelte";
	import PosterMockup from "./preview/PosterMockup.svelte";
	import WebMockup from "./preview/WebMockup.svelte";

    export let palette: Record<string, string>;

  type MockupTab = "web" | "poster" | "infographic";

    let tab: MockupTab = "web";

    const tabs: { id: MockupTab; label: string }[] = [
        { id: "web", label: "Web" },
        { id: "poster", label: "Poster" },
        { id: "infographic", label: "Infographic" }
    ];
</script>

<div class="collapse collapse-arrow bg-base-200 rounded-lg shadow-lg">
	<input type="checkbox" checked />
	<div class="collapse-title text-xl font-medium">
		<h2 class="text-2xl font-bold p-2">Mockup Preview</h2>
	</div>

	<div class="collapse-content p-4 space-y-4">

		<!-- Tabs -->
		<div role="tablist" class="tabs tabs-bordered">
			{#each tabs as t}
				<button
					role="tab"
					class="tab capitalize {tab === t.id ? 'tab-active font-bold' : ''}"
					on:click={() => (tab = t.id)}
				>
					{t.label}
				</button>
			{/each}
		</div>

		<!-- Content -->
		<div class="mt-4">
			{#if tab === 'web'}
				<WebMockup {palette} />
			{:else if tab === 'poster'}
				<PosterMockup {palette} />
			{:else if tab === 'infographic'}
				<InfographicMockup {palette} />
			{/if}
		</div>

	</div>
</div>
