<script lang="ts">
	import { Unit, type Card } from "../Class";
    import Life from "./Life.svelte";

	export let card: Card;

	let special_interface: string[] = ["Santé", "Vitalité"];
</script>

<div class="box">
	<i>Statistiques</i>

	<br />

	<div class="container">
		{#if card instanceof Unit && card.checkStat("Constitution")}
			<Life bind:card />
		{/if}

		{#each card.stats as stat}
			{#if stat.condition() && !special_interface.includes(stat.name)}
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
		grid-template-columns: 12em 2fr 2fr 14em;
	}
</style>
