<script lang="ts">
	export let sourceColor: string;
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	function generate() {
		dispatch("generate");
	}
</script>

<div class="form-control flex-col sm:flex-row gap-4 items-end mt-auto">

	<div class="w-full sm:w-auto">
		<label class="label">
			<span class="label-text font-semibold">Source Color</span>
		</label>
		<input
			type="color"
			bind:value={sourceColor}
			class="input input-bordered w-full h-16 p-1"
		/>
	</div>

	<input
		type="text"
		bind:value={sourceColor}
		class="input input-bordered w-full sm:flex-1 font-mono"
	/>

	<button class="btn btn-primary btn-lg w-full sm:w-auto" on:click={generate}>
		Generate Scheme
	</button>
</div>
