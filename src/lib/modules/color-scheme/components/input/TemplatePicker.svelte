<script lang="ts">
	import { PALETTE_TEMPLATES } from "../../values";
	import { applyTemplate } from "../../service";
	import { usePalette } from "../../store";

	import TemplateItem from "./TemplateItem.svelte";

	let currentScheme: "light" | "dark" = "light";

	usePalette.subscribe((s) => {
		currentScheme = s.activeScheme;
	});

	function choose(name: string) {
		applyTemplate(name);
	}
</script>

<div class="mt-4">

	<!-- SCROLLABLE LIST -->
	<div
		class="space-y-3 overflow-y-auto pr-1"
		style="max-height: 260px;"
	>
		{#each PALETTE_TEMPLATES as tpl}
			<TemplateItem
				{tpl}
				template={tpl}
				scheme={currentScheme}
				onChoose={choose}
			/>
		{/each}
	</div>

</div>
