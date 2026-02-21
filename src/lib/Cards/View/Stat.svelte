<script lang="ts">
	import { Unit, type Card } from "../Class";
	import Life from "./Life.svelte";

	export let card: Card;

	let ratio_crit: number = card.stat("Critique").value();
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
				{#if stat.name == "Critique"}
					<div class="critbar">
						<div class="crit" style={"width:" + ratio_crit + "%"}>Test</div>
					</div>
				{/if}

				<div class="row">
					<div>
						{stat.name}
					</div>

					<div style="text-align: right;">
						{#if stat.name == "Intensité"}
							x
						{/if}
						{stat.value()}
					</div>

					<div style="margin-left:0.5em;">
						{#if stat.name == "Critique"}
							%
						{/if}
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
		grid-template-columns: 10em 1fr 1fr 10em;
	}

	div.critbar {
		background-color: var(--missing_crit);
		background-image: var(--paper);
		color: transparent;

		height: 1em;

		border: solid;
		border-color: black;

		display: flex;
	}

	div.crit {
		background-color: var(--crit);
		background-image: var(--paper);
		display: inline-block;
	}
</style>
