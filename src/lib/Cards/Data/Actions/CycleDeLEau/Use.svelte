<script lang="ts">
	import type { System } from "../../../../System/Class";

	export let system: System;

	function select_action(choice: string) {
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
			select_action("Pile");
		}}
	>
		Augmente de 1 la taille de la pile alliée.
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			select_action("Réserve");
		}}
	>
		Augmente de 1 la taille de la réserve alliée.
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			select_action("Terrain");
		}}
	>
		Augmente de 1 la taille du terrain allié.
	</button>
</div>
