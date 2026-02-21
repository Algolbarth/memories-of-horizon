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
		Génère un Élémentaire de roche sur le terrain
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			selectAction("building");
		}}
	>
		Créé un Mur de roche sur le terrain
	</button>
</div>
