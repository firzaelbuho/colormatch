<script lang="ts">
	export let color: string;

	function copy() {
		navigator.clipboard.writeText(color);
	}
</script>

<div class="flex flex-col items-center space-y-2">
	<div
		class="w-full h-16 rounded-lg border border-base-content/10"
		style="background-color: {color}"
	/>

	<div class="flex flex-col items-center">
		<p class="text-sm font-mono">{color}</p>
		<button class="btn btn-xs btn-outline mt-1" on:click={copy}>Copy</button>
	</div>
</div>
