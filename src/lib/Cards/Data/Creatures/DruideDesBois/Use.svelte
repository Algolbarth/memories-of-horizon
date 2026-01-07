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
			select_action("Elfe");
		}}
	>
		Se transforme en Druide des bois (forme elfe)
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			select_action("Renard");
		}}
	>
		Se transforme en Druide des bois (forme renard)
	</button>
</div>
