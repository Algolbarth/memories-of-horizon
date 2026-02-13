<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import { Building } from "../../../Class/Building";

	export let system: System;

	function selectCondition(card: Card) {
		if (card instanceof Building && card.canDestroy() && !card.isElement("Eau")) {
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

{#if system.game && system.game.use.card}
	<Zone bind:system entity={system.game.use.card.adversary()} zone={system.game.use.card.adversary().zone("Terrain")} {selectCondition} {selectAction} />
{/if}
