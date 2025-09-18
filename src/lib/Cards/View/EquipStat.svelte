<script lang="ts">
	import type { Equipment } from "../Class/Equipment";

	export let card: Equipment;
</script>

<div class="box">
	<i>Statistiques d'équipement</i>

	<br />

	<div class="container">
		{#each card.equipStats as stat}
			{#if stat.condition()}
				<div class="row">
					<div>
						{stat.name}
					</div>
					<div>
						{stat.value()}
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	div.container {
		display: grid;
	}

	div.row {
		display: grid;
		grid-template-columns: 12em 4fr;
	}
</style>
