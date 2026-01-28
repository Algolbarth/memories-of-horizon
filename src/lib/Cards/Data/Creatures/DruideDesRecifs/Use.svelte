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
			select_action("merfolk");
		}}
	>
		Se transforme en Druide des récifs (forme ondin)
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			select_action("turtle");
		}}
	>
		Se transforme en Druide des récifs (forme tortue)
	</button>
</div>
