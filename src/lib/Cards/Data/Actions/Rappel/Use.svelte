<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;

	function selectCondition(card: Card) {
		return true;
	}

	function selectAction(card: Card) {
		if (system.game && system.game.use.card) {
			system.game.use.card.useEffect(card);
			system.game.use.reset();
		}
	}
</script>

<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Défausse")} {selectCondition} {selectAction} />
