<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import { Creature } from "../../../Class/Creature";

	export let system: System;

	function selectCondition(card: Card) {
		if (card instanceof Creature && card.stat("Protection").value() > 0) {
			return true;
		}
		return false;
	}

	function selectAction(card: Card) {
		if (system.game && system.game.use.card) {
			system.game.use.card.useEffect(card);
			system.game.use.reset();
		}
	}
</script>

<Zone bind:system entity={system.game.use.card.owner?.adversary()} zone={system.game.use.card.owner?.adversary().zone("Terrain")} {selectCondition} {selectAction} />
