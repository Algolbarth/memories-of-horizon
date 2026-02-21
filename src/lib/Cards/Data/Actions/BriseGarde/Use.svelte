<script lang="ts">
	import type { Game } from "../../../../Game/Game";
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	export let game: Game;
	export let card: Card;

	function selectCondition(target: Card) {
		if (target.stat("Garde").value() > 0) {
			return true;
		}
		return false;
	}

	function selectAction(target: Card) {
		card.useEffect(target);
		game.use.reset();
	}
</script>

<Zone bind:system bind:game entity={card.adversary()} zone={card.adversary().zone("Terrain")} {selectCondition} {selectAction} />
