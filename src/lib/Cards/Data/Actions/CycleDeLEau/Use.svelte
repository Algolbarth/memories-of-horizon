<script lang="ts">
	import type { System } from "../../../../System/Class";

	export let system: System;

	function selectAction(choice: string) {
		if (system.game && system.game.use.card) {
			system.game.use.card.useEffect(choice);
			system.game.use.reset();
		}
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
