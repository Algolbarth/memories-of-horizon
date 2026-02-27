<script lang="ts">
	import type { Game } from "../../../../game/game";
	import Zone from "../../../../game/zone.svelte";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import { Building } from "../../../class/building";

	export let system: System;
	export let game: Game;
	export let card: Card;

	function selectCondition(target: Card) {
		if (target instanceof Building) {
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
