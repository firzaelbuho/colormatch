<script lang="ts">

	import type { PaletteTemplate } from '$lib/modules/color-scheme/types';

	export let template: PaletteTemplate;
	export let scheme: "light" | "dark";
	export let onChoose: (name: string) => void;

	// pilih palette sesuai mode
	$: pal = scheme === "light"
		? template.lightPalette
		: template.darkPalette;
</script>

<div
	class="
        flex items-center justify-between
        p-4 rounded-lg shadow cursor-pointer
        hover:brightness-95 transition
    "
	style="
        background-color: {pal.background};
        color: {pal.onBackground};
    "
	on:click={() => onChoose(template.name)}
>
	<!-- TEXT -->
	<div class="flex flex-col">
		<h3 class="text-lg font-semibold">{template.name}</h3>
		<p class="text-sm opacity-70">Tap to apply palette</p>
	</div>

	<!-- COLOR PREVIEW BARS -->
	<div class="flex space-x-1 ml-4">
		<!-- primary, secondary, tertiary -->
		<div class="h-6 w-3 rounded" style="background:{pal.primary};"></div>
		<div class="h-6 w-3 rounded" style="background:{pal.secondary};"></div>
		<div class="h-6 w-3 rounded" style="background:{pal.tertiary};"></div>

		<!-- containers -->
		<div class="h-6 w-3 rounded" style="background:{pal.primaryContainer};"></div>
		<div class="h-6 w-3 rounded" style="background:{pal.secondaryContainer};"></div>
		<div class="h-6 w-3 rounded" style="background:{pal.tertiaryContainer};"></div>
	</div>
</div>
