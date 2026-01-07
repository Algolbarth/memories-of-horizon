<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import type { Item } from "../../../Class/Item";

	export let system: System;

	let potion_1: Item | undefined;
	let potion_2: Item | undefined;

	function select_condition(card: Card) {
		if (card.type == "Objet" && card.familles.total().includes("Potion") && (potion_1 == undefined || card != potion_1)) {
			return true;
		}
		return false;
	}

	function select_action_1(card: Card) {
		potion_1 = card;
	}

	function select_action_2(card: Card) {
		potion_2 = card;

		system.game.use.card.useEffect(potion_1, potion_2);
		system.game.use.reset();
	}
</script>

{#if potion_1 == undefined}
	<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Réserve")} {select_condition} select_action={select_action_1} />
{:else}
	<button
		class="return"
		on:click={() => {
			potion_1 = undefined;
		}}
	>
		↩
	</button>
	<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Réserve")} {select_condition} select_action={select_action_2} />
{/if}
