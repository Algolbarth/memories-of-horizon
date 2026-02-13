<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;

	function selectCondition() {
		return true;
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
