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
