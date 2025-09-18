<script lang="ts">
	import type { Card } from "../Class";

	export let card: Card;
</script>

<div class="box">
	<i>Statistiques</i>
	<br />

	<div class="container">
		{#each card.stats as stat}
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
