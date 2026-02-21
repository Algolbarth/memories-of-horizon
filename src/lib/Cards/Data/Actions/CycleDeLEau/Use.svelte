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

<div class="center" style="text-align:center">
	<button
		class="big choice"
		on:click={() => {
			selectAction("Pile");
		}}
	>
		Augmente de 1 la taille de la pile alliée.
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			selectAction("Inventaire");
		}}
	>
		Augmente de 1 la taille de l'inventaire allié.
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			selectAction("Terrain");
		}}
	>
		Augmente de 1 la taille du terrain allié.
	</button>
</div>
