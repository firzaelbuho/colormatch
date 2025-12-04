<script lang="ts">
	export let activeTab: "manual" | "template" = "manual";
</script>

<div class="tabs tabs-boxed">
	<a
		class="tab {activeTab === 'manual' ? 'tab-active' : ''}"
		on:click={() => activeTab = 'manual'}
	>
		Manual
	</a>

	<a
		class="tab {activeTab === 'template' ? 'tab-active' : ''}"
		on:click={() => activeTab = 'template'}
	>
		Templates
	</a>
</div>
