<script lang="ts">
	import type { Game } from "../../../../Game/Game";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	export let game: Game;
	export let card: Card;

	function selectAction(choice: string) {
		card.useEffect(choice);
		game.use.reset();
	}
</script>

<div class="center">
	<button
		class="big choice"
		on:click={() => {
			selectAction("draw");
		}}
	>
		Pioche 3 cartes
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			selectAction("discover");
		}}
	>
		Découvre 1 carte
	</button>
</div>
