<script lang="ts">
	export let palette: Record<string, string>;

	// dummy data untuk mockup chart
	const barData = [40, 60, 80, 50, 90, 70];

	const scatterData = [
		{ x: 20, y: 30 },
		{ x: 50, y: 70 },
		{ x: 80, y: 50 },
		{ x: 35, y: 85 },
		{ x: 70, y: 20 }
	];
</script>

<div
	class="w-full h-[700px] rounded-xl shadow-lg p-10 space-y-10 overflow-auto"
	style:background-color={palette.background}
	style:color={palette.onBackground}
>
	<h2 class="text-4xl font-bold text-center">Infographic Preview</h2>

	<!-- 4 Color Panels (tetap dari kode awal) -->
	<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
		<div class="card shadow-xl"
			style:background-color={palette.primary}
			style:color={palette.onPrimary}
		>
			<div class="card-body">
				<h3 class="card-title">Primary</h3>
				<p>Main brand color</p>
			</div>
		</div>

		<div class="card shadow-xl"
			style:background-color={palette.secondary}
			style:color={palette.onSecondary}
		>
			<div class="card-body">
				<h3 class="card-title">Secondary</h3>
				<p>Support accent</p>
			</div>
		</div>

		<div class="card shadow-xl"
			style:background-color={palette.tertiary}
			style:color={palette.onTertiary}
		>
			<div class="card-body">
				<h3 class="card-title">Tertiary</h3>
				<p>Decorative color</p>
			</div>
		</div>

		<div class="card shadow-xl"
			style:background-color={palette.error}
			style:color={palette.onError}
		>
			<div class="card-body">
				<h3 class="card-title">Error</h3>
				<p>Semantic color</p>
			</div>
		</div>
	</div>

	<!-- Charts Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">

		<!-- Bar Chart -->
		<div class="p-6 rounded-xl shadow-lg"
			style:background-color={palette.surfaceContainerHigh}
			style:color={palette.onSurface}
		>
			<h3 class="text-xl font-bold mb-4">Bar Chart</h3>

			<div class="flex items-end gap-3 h-40">
				{#each barData as n}
					<div
						class="w-6 rounded"
						style="
							background-color: {palette.primary};
							height: {n}%;
						"
					></div>
				{/each}
			</div>
		</div>

		<!-- Pie Chart -->
		<div class="p-6 rounded-xl shadow-lg"
			style:background-color={palette.surfaceContainerHigh}
			style:color={palette.onSurface}
		>
			<h3 class="text-xl font-bold mb-4">Pie Chart</h3>

			<div class="relative w-40 h-40 mx-auto rounded-full"
				style="
					background:
						conic-gradient(
							{palette.primary} 0deg 120deg,
							{palette.secondary} 120deg 210deg,
							{palette.tertiary} 210deg 360deg
						);
				"
			></div>

			<div class="mt-4 space-y-1 text-sm">
				<div><span class="inline-block w-3 h-3 rounded mr-2" style="background:{palette.primary}"></span>33% Category A</div>
				<div><span class="inline-block w-3 h-3 rounded mr-2" style="background:{palette.secondary}"></span>25% Category B</div>
				<div><span class="inline-block w-3 h-3 rounded mr-2" style="background:{palette.tertiary}"></span>42% Category C</div>
			</div>
		</div>

		<!-- Line Chart -->
		<div class="p-6 rounded-xl shadow-lg"
			style:background-color={palette.surfaceContainerHigh}
			style:color={palette.onSurface}
		>
			<h3 class="text-xl font-bold mb-4">Line Chart</h3>

			<div class="relative w-full h-40 border border-base-content/20 rounded-xl">
				<svg width="100%" height="100%" class="absolute inset-0">
					<polyline
						fill="none"
						stroke={palette.primary}
						stroke-width="3"
						points="0,110 60,70 120,85 180,40 240,60 300,20"
					/>
				</svg>
			</div>
		</div>

		<!-- Scatter Plot -->
		<div class="p-6 rounded-xl shadow-lg"
			style:background-color={palette.surfaceContainerHigh}
			style:color={palette.onSurface}
		>
			<h3 class="text-xl font-bold mb-4">Scatter Plot</h3>

			<div class="relative w-full h-40 border border-base-content/20 rounded-xl">
				{#each scatterData as p}
					<div
						class="absolute w-3 h-3 rounded-full"
						style="
							left: {p.x}%;
							top: {p.y}%;
							background-color: {palette.tertiary};
						"
					></div>
				{/each}
			</div>
		</div>

	</div>

	<p class="text-center text-sm opacity-60">
		Material Design 3 Colors applied to infographic components.
	</p>

</div>
