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
			select_action("dwarf");
		}}
	>
		Se transforme en Druide des montagnes (forme nain)
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			select_action("bear");
		}}
	>
		Se transforme en Druide des montagnes (forme ours)
	</button>
</div>
