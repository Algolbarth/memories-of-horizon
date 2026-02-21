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
			selectAction("creature");
		}}
	>
		Remplit le terrain allié d'Élémentaire de caillou
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			selectAction("damage");
		}}
	>
		Inflige 6 dégâts à toutes les unités adverses sur le terrain
	</button>
</div>
