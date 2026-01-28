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
			select_action("goblin");
		}}
	>
		Se transforme en Druide de feu (forme gobelin)
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			select_action("lizard");
		}}
	>
		Se transforme en Druide de feu (forme lézard)
	</button>
</div>
