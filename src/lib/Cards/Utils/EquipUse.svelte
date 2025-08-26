<script lang="ts">
	import Zone from "../../Game/Zone.svelte";
	import type { System } from "../../System/Class";
	import type { Card } from "../Class";
	import { Creature } from "../Class/Creature";

	export let system: System;

	function condition(card: Card) {
		if (card instanceof Creature && card.canEquip()) {
			return true;
		}
		return false;
	}

	function fonction(card: Creature) {
		if (system.game && system.game.use.card) {
			system.game.use.card.useEffect(card);
			system.game.use.reset();
		}
	}
</script>

{#if system.game && system.game.use.card && system.game.use.card.owner}
	<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Terrain")} {condition} {fonction} />
{/if}
