<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";

	export let system: System;

	function condition(card: Card) {
		if (card.type == "Bâtiment" && !card.elements.total().includes("Eau")) {
			return true;
		}
		return false;
	}

	function fonction(card: Card) {
		system.game.use.card.useEffect(card);
		system.game.use.reset();
	}
</script>

<Zone bind:system entity={system.game.use.card.owner.adversary()} zone={system.game.use.card.owner.adversary().zone("Terrain")} {condition} {fonction} />
