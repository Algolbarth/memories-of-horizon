<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import { Creature } from "../../../Class/Creature";

	export let system: System;

	function select_condition(card: Card) {
		if (card instanceof Creature && (card.stat("Poison").value() > 0 || card.stat("Brûlure").value() > 0 || card.stat("Toxicité").value() > 1)) {
			return true;
		}
		return false;
	}

	function select_action(card: Card) {
		system.game.use.card.useEffect(card);
		system.game.use.reset();
	}
</script>

<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Terrain")} {select_condition} {select_action} />
