<script lang="ts">
	import type { System } from "../../System/Class";
	import type { Card } from "../Class";

	export let system: System;
	export let card: Card;
</script>

<div class="box">
	<span class="box_title">Traits</span>

	<br />

	<div class="container">
		{#each card.traits as trait}
			{#if trait.display()}
				<div class="row">
					<div>
						{trait.name}
					</div>
				</div>
			{/if}
		{/each}

		{#if card.alternative_form != undefined}
			<div class="row">
				<div>Forme alternative</div>

				<div>
					<button
						class="active"
						on:click={() => {
							system.view.card = system.cards.getByName(card.alternative_form);
						}}
					>
						{card.alternative_form}
					</button>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	div.container {
		display: grid;
	}

	div.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
