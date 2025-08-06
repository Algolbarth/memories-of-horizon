<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";

	export let system: System;

	let choice: string | undefined = undefined;

	function condition(card: Card) {
		return true;
	}

	function fonction(card: Card) {
		system.game.use.card.useEffect(card);
		system.game.use.reset();
	}
</script>

{#if choice == undefined}
	<div class="center" style="text-align:center">
		<button
			class="big choice"
			on:click={() => {
				fonction(undefined);
			}}
		>
			Se place sur le terrain
		</button>

		<br />

		<button
			class="big choice"
			on:click={() => {
				choice = "damage";
			}}
		>
			Se détruit pour infliger 30 dégâts à une unité adverse sur le terrain
		</button>
	</div>
{:else}
	<button
		on:click={() => {
			choice = undefined;
		}}
	>
		Retour
	</button>
	<Zone bind:system entity={system.game.use.card.owner.adversary()} zone={system.game.use.card.owner.adversary().zone("Terrain")} {condition} {fonction} />
{/if}
