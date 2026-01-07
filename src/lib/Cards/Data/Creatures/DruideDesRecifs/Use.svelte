<script lang="ts">
	import type { System } from "../../../../System/Class";

	export let system: System;

	function select_action(choice: string) {
		system.game.use.card.useEffect(choice);
		system.game.use.reset();
		system = system;
	}
</script>

<div class="center" style="text-align:center">
	<button
		class="big choice"
		on:click={() => {
			select_action("Ondin");
		}}
	>
		Se transforme en Druide des récifs (forme ondin)
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			select_action("Tortue");
		}}
	>
		Se transforme en Druide des récifs (forme tortue)
	</button>
</div>
