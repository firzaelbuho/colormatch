
<script lang="ts">
	export let palette: Record<string, string>;

	// Helper ikon untuk alerts
	const icons = {
		error:
			'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
		success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
		warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
		info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
	};
</script>

<div class="collapse collapse-arrow bg-base-200 rounded-lg shadow-lg">
	<input type="checkbox" checked />
	<div class="collapse-title text-xl font-medium">
		<h2 class="text-2xl font-bold p-2">UI Mockup Preview (Full App)</h2>
	</div>
	<div class="collapse-content bg-base-100 p-0 md:p-4">
		{#if !palette.primary}
			<div class="text-center p-8">Generating mockup...</div>
		{:else}
			<div
				class="border border-base-content/20 rounded-lg overflow-hidden relative flex flex-col h-[700px]"
				style:background-color={palette.background}
				style:color={palette.onBackground}
			>
				<div
					class="navbar p-4 shadow-sm"
					style:background-color={palette.surfaceContainer}
					style:color={palette.onSurfaceVariant}
				>
					<div class="flex-none">
						<button class="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-5 h-5 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path></svg
							>
						</button>
					</div>
					<div class="flex-1">
						<a href="/" class="btn btn-ghost text-xl">ColorMatch App</a>
					</div>
					<div class="flex-none">
						<button class="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-5 h-5 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
								></path></svg
							>
						</button>
					</div>
				</div>

				<div class="flex flex-row flex-grow h-0">
					<div
						class="hidden md:flex flex-col items-center w-20 py-4 space-y-4"
						style:background-color={palette.surface}
					>
						<div
							class="flex flex-col items-center p-2 rounded-lg"
							style:background-color={palette.secondaryContainer}
							style:color={palette.onSecondaryContainer}
						>
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
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3"
								/>
							</svg>
							<span class="text-xs">Home</span>
						</div>
						<div
							class="flex flex-col items-center p-2"
							style:color={palette.onSurfaceVariant}
						>
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
									d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
								/>
							</svg>
							<span class="text-xs">Shop</span>
						</div>
					</div>

					<div class="flex-grow p-6 overflow-y-auto space-y-6">
						<div
							class="card shadow-lg"
							style:background-color={palette.surfaceContainerHigh}
							style:color={palette.onSurface}
						>
							<div class="card-body">
								<h2 class="card-title" style:color={palette.primary}>Main Content</h2>
								<p style:color={palette.onSurfaceVariant}>
									This content area uses <strong>Background</strong>, and this card
									uses <strong>SurfaceContainerHigh</strong>.
								</p>
							</div>
						</div>

						<div class="space-y-4">
							<h3 class="font-bold">Key Theme Colors</h3>
							<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div
									class="flex items-center justify-center p-8 rounded-lg shadow-md"
									style:background-color={palette.primary}
									style:color={palette.onPrimary}
								>
									<span class="text-xl font-bold">Primary</span>
								</div>
								<div
									class="flex items-center justify-center p-8 rounded-lg shadow-md"
									style:background-color={palette.secondary}
									style:color={palette.onSecondary}
								>
									<span class="text-xl font-bold">Secondary</span>
								</div>
								<div
									class="flex items-center justify-center p-8 rounded-lg shadow-md"
									style:background-color={palette.tertiary}
									style:color={palette.onTertiary}
								>
									<span class="text-xl font-bold">Tertiary</span>
								</div>
							</div>
						</div>

						<div class="space-y-4">
							<h3 class="font-bold">Semantic States</h3>
							<div
								class="alert"
								style:background-color={palette.errorContainer}
								style:color={palette.onErrorContainer}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 shrink-0"
									fill="none"
									viewBox="0 0 24 24"
									style:stroke={palette.error}
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d={icons.error}
									/></svg
								>
								<span><strong>Error:</strong> Uses <strong>errorContainer</strong>.</span>
							</div>
							<div
								class="alert"
								style:background-color={palette.tertiaryContainer}
								style:color={palette.onTertiaryContainer}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 shrink-0"
									fill="none"
									viewBox="0 0 24 24"
									style:stroke={palette.tertiary}
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d={icons.success}
									/></svg
								>
								<span><strong>Success:</strong> Mapped to <strong>tertiaryContainer</strong>.</span>
							</div>
							<div
								class="alert"
								style:background-color={palette.secondaryContainer}
								style:color={palette.onSecondaryContainer}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 shrink-0"
									fill="none"
									viewBox="0 0 24 24"
									style:stroke={palette.secondary}
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d={icons.warning}
									/></svg
								>
								<span><strong>Warning:</strong> Mapped to <strong>secondaryContainer</strong>.</span>
							</div>
							<div
								class="alert"
								style:background-color={palette.primaryContainer}
								style:color={palette.onPrimaryContainer}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 shrink-0"
									fill="none"
									viewBox="0 0 24 24"
									style:stroke={palette.primary}
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d={icons.info}
									/></svg
								>
								<span><strong>Info:</strong> Mapped to <strong>primaryContainer</strong>.</span>
							</div>
						</div>

						<div
							class="toast-demo flex items-center justify-between gap-4 rounded-lg p-4 shadow-lg"
							style:background-color={palette.inverseSurface}
							style:color={palette.inverseOnSurface}
						>
							<span>Uses <strong>inverseSurface</strong>.</span>
							<button class="font-bold" style:color={palette.inversePrimary}>
								UNDO
							</button>
						</div>

						
					</div>
				</div>

				<button
					class="btn btn-circle btn-lg absolute bottom-6 right-6 shadow-lg"
					style:background-color={palette.primary}
					style:color={palette.onPrimary}
					aria-label="Add"
				>
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
							d="M12 4.5v15m7.5-7.5h-15"
						/>
					</svg>
				</button>
			</div>
		{/if}
	</div>
</div>