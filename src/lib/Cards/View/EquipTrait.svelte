<script lang="ts">
	import type { Equipment } from "../Class/Equipment";

	export let card: Equipment;
</script>

<div class="box">
	<i>Traits d'équipement</i>

	<br />

	<div class="container">
		{#each card.equipTraits as trait}
			{#if trait.condition()}
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
