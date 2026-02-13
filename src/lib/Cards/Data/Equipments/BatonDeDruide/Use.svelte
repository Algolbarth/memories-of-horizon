<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import { Druid } from "../../../Class/Druid";

	export let system: System;

	function selectCondition(card: Card) {
		if (card instanceof Druid && card.canEquip()) {
			return true;
		}
		return false;
	}

	function selectAction(card: Druid) {
		if (system.game && system.game.use.card) {
			system.game.use.card.useEffect(card);
			system.game.use.reset();
		}
	}
</script>

{#if system.game && system.game.use.card && system.game.use.card.owner}
	<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Terrain")} {selectCondition} {selectAction} />
{/if}
