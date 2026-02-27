<script lang="ts">
	import type { Game } from "../../../../game/game";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

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
			selectAction("Coquillage");
		}}
	>
		Génère Coquillage dans l'inventaire
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			selectAction("Conque");
		}}
	>
		Génère Conque dans l'inventaire
	</button>
</div>
