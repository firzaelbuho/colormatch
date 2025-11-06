<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	// Impor store untuk mengontrol activeScheme
	import { paletteStore } from '$lib/palette.store';

	export let sourceColor: string;
	const dispatch = createEventDispatcher();

	function handleGenerate() {
		dispatch('generate');
	}

	// --- LOGIKA TOGGLE (Diperbarui) ---
	let currentScheme: 'light' | 'dark';
	paletteStore.subscribe((state) => (currentScheme = state.activeScheme));

	// 'isDark' akan terikat (bind) ke toggle
	$: isDark = currentScheme === 'dark';

	// Fungsi ini akan dipanggil saat toggle di-klik
	function handleToggleChange(e: Event) {
		const target = e.currentTarget as HTMLInputElement;
		// Set scheme di store berdasarkan status 'checked' yang baru
		paletteStore.setActiveScheme(target.checked ? 'dark' : 'light');
	}
	// ---------------------------
</script>

<div class="card bg-base-200 shadow-xl h-full">
	<div class="card-body">
		<h1 class="card-title text-3xl font-bold">🎨 ColorMatch MD3</h1>
		<p class="mb-4 text-base-content/80">
			Generate a full Material Design 3 color palette from a single source color.
		</p>

		<div class="form-control mb-4">
			<label class="label">
			</label>
			<label class="cursor-pointer label justify-start gap-4">
				{#if isDark}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
				{/if}

				<input
					type="checkbox"
					class="toggle toggle-lg"
					bind:checked={isDark}
					on:change={handleToggleChange}
					aria-label="Toggle dark and light scheme"
				/>
			</label>
		</div>
		<div class="form-control flex-col sm:flex-row gap-4 items-end mt-auto">
			<div class="w-full sm:w-auto">
				<label class="label" for="color-picker">
					<span class="label-text font-semibold">Source Color</span>
				</label>
				<input
					id="color-picker"
					type="color"
					class="input input-bordered w-full h-16 p-1 cursor-pointer"
					bind:value={sourceColor}
					aria-label="Source color picker"
				/>
			</div>
			<input
				type="text"
				class="input input-GUJ_input-bordered w-full sm:flex-1 font-mono"
				bind:value={sourceColor}
				aria-label="Source color HEX value"
			/>
			<button class="btn btn-primary btn-lg w-full sm:w-auto" on:click={handleGenerate}>
				Match!
			</button>
		</div>
	</div>
</div>