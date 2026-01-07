<script lang="ts">
	import { Unit, type Card } from "../Class";
	import Life from "./Life.svelte";

	export let card: Card;
</script>

<div class="box">
	<span class="box_title">Statistiques</span>

	<br />

	<div class="container">
		{#if card instanceof Unit && card.checkStat("Constitution")}
			<Life bind:card />
		{/if}

		{#each card.stats as stat}
			{#if stat.display()}
				<div class="row">
					<div>
						{stat.name}
					</div>
					<div style="text-align: right;">
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
		grid-template-columns: 12em 1fr 1fr 12em;
	}
</style>
