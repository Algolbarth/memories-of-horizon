<script lang="ts">
	import type { System } from "../../../../System/Class";

	export let system: System;

	function fonction(choice) {
		system.game.use.card.useEffect(choice);
		system.game.use.reset();
		system = system;
	}
</script>

<div class="center" style="text-align:center">
	<button
		class="big choice"
		on:click={() => {
			fonction("Ondin");
		}}
	>
		Se transforme en Druide des récifs (forme ondin)
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			fonction("Tortue");
		}}
	>
		Se transforme en Druide des récifs (forme tortue)
	</button>
</div>
