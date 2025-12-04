<script lang="ts">
	import { createEventDispatcher } from "svelte";

	import SchemeToggle from "./input/SchemeToggle.svelte";
	import InputHeader from "./input/InputHeader.svelte";
	import InputTabs from "./input/InputTabs.svelte";
	import ManualInput from "./input/ManualInput.svelte";
	import TemplatePicker from "./input/TemplatePicker.svelte";

	export let sourceColor: string;

	let activeTab: "manual" | "template" = "manual";

	const dispatch = createEventDispatcher();

	function handleGenerate() {
		dispatch("generate");
	}

	function handleSourceChange(c: string) {
		sourceColor = c;
	}
</script>

<div class="card bg-base-200 shadow-xl h-full">
	<div class="card-body space-y-6">

		<!-- Header -->
		<InputHeader />

		<!-- Scheme Toggle -->
		<SchemeToggle />

		<!-- Tabs -->
		<InputTabs bind:activeTab />

		<!-- Tab Content -->
		{#if activeTab === 'manual'}
			<ManualInput
				bind:sourceColor
				on:generate={handleGenerate}
			/>
		{:else}
			<TemplatePicker />
		{/if}
	</div>
</div>
