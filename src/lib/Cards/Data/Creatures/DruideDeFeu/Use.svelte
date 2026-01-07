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
			select_action("Gobelin");
		}}
	>
		Se transforme en Druide de feu (forme gobelin)
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			select_action("Lézard");
		}}
	>
		Se transforme en Druide de feu (forme lézard)
	</button>
</div>
