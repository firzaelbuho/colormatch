<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- GLOBAL NAVBAR -->
<nav class="navbar  shadow-sm px-4 md:px-8">
	<div class="flex-1">
		<a href="/" class="font-bold text-lg hover:opacity-70 transition">
			UIColorMatch
		</a>
	</div>

	<div class="flex-none">
		<!-- Back button if NOT on "/" -->
		{#if $page.url.pathname !== '/'}
			<a href="/" class="btn btn-ghost btn-sm flex items-center gap-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
				</svg>
				<span class="hidden sm:inline">Back</span>
			</a>
		{/if}
	</div>
</nav>

<!-- PAGE CONTENT -->
<main class="min-h-[80vh] px-4 md:px-6 lg:px-10 py-6">
	{@render children()}
</main>

<!-- GLOBAL FOOTER -->
<footer class="text-center p-6 py-8 text-base-content/70 border-t border-base-content/10 mt-20">
	Made by
	<a
		href="https://github.com/firzaelbuho"
		target="_blank"
		rel="noopener noreferrer"
		class="link link-hover font-medium"
	>
		firzaelbuho
	</a>
</footer>
