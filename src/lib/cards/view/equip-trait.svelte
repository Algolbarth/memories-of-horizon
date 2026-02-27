<script lang="ts">
	import type { Equipment } from "../class/equipment";

	export let card: Equipment;
</script>

<div class="box">
	<span class="box_title">Traits d'équipement</span>

	<br />

	<div class="container">
		{#each card.equipTraits as trait}
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
