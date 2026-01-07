<script lang="ts">
	import type { Card } from "../Class";

	export let card: Card;
</script>

<div class="box">
	<span class="box_title">Traits</span>

	<br />

	<div class="container">
		{#each card.traits as trait}
			{#if trait.display()}
				<div>
					{trait.name}
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	div.container {
		display: grid;
	}
</style>
