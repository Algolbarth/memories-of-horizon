<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;

	function condition(card: Card) {
		if (card.type == "Objet" && card.familles.total().includes("Potion") && card.name != "Concoction") {
			return true;
		}
		return false;
	}

	function fonction(card: Card) {
		system.game.use.card.useEffect(card);
		system.game.use.reset();
	}
</script>

<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Réserve")} {condition} {fonction} />
