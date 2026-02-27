<script lang="ts">
	import type { Game } from "../../../../game/game";
	import Zone from "../../../../game/zone.svelte";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	export let system: System;
	export let game: Game;
	export let card: Card;

	function selectCondition() {
		return true;
	}

	function selectAction(target: Card) {
		card.useEffect(target);
		game.use.reset();
	}
</script>

<Zone bind:system bind:game entity={card.adversary()} zone={card.adversary().zone("Terrain")} {selectCondition} {selectAction} />
