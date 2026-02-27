<script lang="ts">
	import type { Game } from "../../../../game/game";
	import Zone from "../../../../game/zone.svelte";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import { Creature } from "../../../class/creature";

	export let system: System;
	export let game: Game;
	export let card: Card;

	function selectCondition(target: Card) {
		if (target instanceof Creature && target.hasDebuff()) {
			return true;
		}
		return false;
	}

	function selectAction(target: Card) {
		card.useEffect(target);
		game.use.reset();
	}
</script>

<Zone bind:system bind:game entity={card.owner()} zone={card.owner().zone("Terrain")} {selectCondition} {selectAction} />
