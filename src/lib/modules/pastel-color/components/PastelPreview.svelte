<script lang="ts">
	export let colors: string[] = [];
</script>

<div class="card bg-base-200 shadow-xl">
	<div class="card-body">
		<h3 class="font-semibold text-base-content/70 mb-2">Pastel Preview</h3>

		<div class="grid grid-cols-4 sm:grid-cols-8 gap-2">
			{#each colors as c}
				<div
					class="w-full h-16 rounded-lg border border-base-content/10"
					style="background-color: {c}"
					title={c}
				></div>
			{/each}
		</div>
	</div>
</div>
