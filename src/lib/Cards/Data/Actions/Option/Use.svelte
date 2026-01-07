<script lang="ts">
	import type { System } from "../../../../System/Class";

	export let system: System;

	function select_action(choice: string) {
		system.game.use.card.useEffect(choice);
		system.game.use.reset();
	}
</script>

<div class="center">
	<button
		class="big choice"
		on:click={() => {
			select_action("draw");
		}}
	>
		Pioche 3 cartes
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			select_action("discover");
		}}
	>
		Découvre 1 carte
	</button>
</div>
