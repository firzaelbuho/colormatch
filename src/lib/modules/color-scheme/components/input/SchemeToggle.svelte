<script lang="ts">
	import { usePalette } from "../../store";
	import { setActiveScheme } from "../../service";

	let currentScheme: "light" | "dark";

	usePalette.subscribe((s) => {
		currentScheme = s.activeScheme;
	});

	$: isDark = currentScheme === "dark";

	function handleToggleChange(e: Event) {
		const target = e.currentTarget as HTMLInputElement;
		setActiveScheme(target.checked ? "dark" : "light");
	}
</script>

<div class="form-control mb-4">
	<label class="cursor-pointer label justify-start gap-4">
		<input
			type="checkbox"
			class="toggle toggle-lg"
			bind:checked={isDark}
			on:change={handleToggleChange}
		/>
		<span>{isDark ? "Dark Scheme" : "Light Scheme"}</span>
	</label>
</div>
