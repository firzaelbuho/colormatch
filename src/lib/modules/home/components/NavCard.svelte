<script lang="ts">
	export let title: string;
	export let desc: string;
	export let href: string;
</script>

<a
	href={href}
	class="
		card bg-base-200 shadow-xl p-6
		hover:shadow-2xl hover:scale-[1.02]
		transition-all duration-200 cursor-pointer
		block
	"
>
	<h2 class="text-2xl font-semibold mb-2">{title}</h2>
	<p class="opacity-80 text-sm mb-4">{desc}</p>

	<div class="flex items-center text-primary font-semibold">
		<span>Open tool</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 ml-2"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</div>
</a>
