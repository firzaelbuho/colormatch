<script lang="ts">
	// Impor store untuk data deskripsi & displayMode
	import { paletteStore, colorDescriptions } from '$lib/palette.store';

	// Menerima data dari parent
	export let entries: [string, string][] = [];
	export let jsonString: string = '{}';
	export let activeScheme: 'light' | 'dark' = 'light'; // <-- PROP BARU

	// Berlangganan ke displayMode
	let displayMode: 'hex' | 'rgba';
	paletteStore.subscribe((val) => {
		displayMode = val.displayMode;
	});

	// --- Helper internal ---
	function setDisplayMode(mode: 'hex' | 'rgba') {
		paletteStore.setDisplayMode(mode);
	}

	function hexToRgba(hex: string): string {
		let c: any = hex.substring(1).split('');
		if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		c = '0x' + c.join('');
		return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(', ')}, 1)`;
	}

	function copyToClipboard(text: string, feedbackEl: HTMLElement | null) {
		if (!feedbackEl) return;
		navigator.clipboard.writeText(text).then(
			() => {
				const originalText = feedbackEl.innerText;
				feedbackEl.innerText = 'Copied!';
				feedbackEl.classList.add('btn-success');
				setTimeout(() => {
					feedbackEl.innerText = originalText;
					feedbackEl.classList.remove('btn-success');
				}, 1500);
			},
			(err) => {
				console.error('Failed to copy: ', err);
				feedbackEl.innerText = 'Error!';
				feedbackEl.classList.add('btn-error');
			}
		);
	}
</script>

<div class="collapse collapse-arrow bg-base-200 rounded-lg shadow-lg">
	<input type="checkbox" checked />
	<div class="collapse-title text-xl font-medium">
		<div class="flex flex-col md:flex-row justify-between md:items-center p-2 gap-4">
			<h2 class="text-2xl font-bold capitalize">
				Generated Palette ({activeScheme} Scheme)
			</h2>
			<div class="flex items-center gap-2 flex-wrap">
				<div role="tablist" class="tabs tabs-boxed tabs-sm">
					<a
						role="tab"
						class="tab"
						class:tab-active={displayMode === 'hex'}
						on:click={() => setDisplayMode('hex')}
					>
						HEX
					</a>
					<a
						role="tab"
						class="tab"
						class:tab-active={displayMode === 'rgba'}
						on:click={() => setDisplayMode('rgba')}
					>
						RGBA
					</a>
				</div>
				<button
					class="btn btn-secondary btn-sm"
					on:click={(e) => copyToClipboard(jsonString, e.currentTarget)}
				>
					Copy All (JSON)
				</button>
			</div>
		</div>
	</div>
	<div class="collapse-content bg-base-100">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
			{#each entries as [name, hexCode] (name)}
				<div class="card card-compact bg-base-200/50 shadow-sm border border-base-content/10">
					<div class="card-body flex-row items-center gap-4">
						<div
							class="w-12 h-12 rounded-lg border border-base-content/20"
							style:background-color={hexCode}
						></div>
						<div class="flex-1 overflow-hidden">
							<div class="font-bold text-base-content truncate">{name}</div>
							<div class="font-mono text-sm text-base-content/70">
								{displayMode === 'hex' ? hexCode : hexToRgba(hexCode)}
							</div>
						</div>
						<div
							class="tooltip tooltip-bottom text-justify max-w-xs"
							data-tip={colorDescriptions[name] || 'Deskripsi tidak tersedia'}
						>
							<button class="btn btn-ghost btn-circle btn-sm" aria-label="Info">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									class="w-5 h-5 stroke-current"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
							</button>
						</div>
						<button
							class="btn btn-ghost btn-sm"
							on:click={(e) =>
								copyToClipboard(
									displayMode === 'hex' ? hexCode : hexToRgba(hexCode),
									e.currentTarget
								)}
						>
							Copy
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>