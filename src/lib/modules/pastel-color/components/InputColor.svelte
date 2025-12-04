<script lang="ts">
	export let color: string;
	export let label: string;
</script>

<div class="form-control">
	<label class="label">
		<span class="label-text font-semibold">{label}
		</span>
	</label>
	<input type="color" bind:value={color} class="input input-bordered h-16 w-full mb-3" />
	<input type="text" bind:value={color} class="input input-bordered font-mono" />
</div>
