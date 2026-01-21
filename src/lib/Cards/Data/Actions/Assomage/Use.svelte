<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import { Creature } from "../../../Class/Creature";

	export let system: System;

	function select_condition(card: Card) {
		if (card instanceof Creature && card.stat("Étourdissement").value() < 1) {
			return true;
		}
		return false;
	}

	function select_action(card: Card) {
		if (system.game && system.game.use.card) {
			system.game.use.card.useEffect(card);
			system.game.use.reset();
		}
	}
</script>

{#if system.game && system.game.use.card}
	<Zone bind:system entity={system.game.use.card.adversary()} zone={system.game.use.card.adversary().zone("Terrain")} {select_condition} {select_action} />
{/if}
