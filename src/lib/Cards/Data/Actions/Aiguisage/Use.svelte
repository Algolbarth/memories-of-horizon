<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;

	function select_condition(card: Card) {
		if (card.familles.total().includes("Arme")) {
			return true;
		}
		return false;
	}

	function select_action(card: Card) {
		system.game.use.card.useEffect(card);
		system.game.use.reset();
	}
</script>

<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Réserve")} {select_condition} {select_action} />
