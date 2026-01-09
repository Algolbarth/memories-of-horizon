<script lang="ts">
	import type { System } from "../../../../System/Class";

	export let system: System;

	function select_action(choice: string) {
		system.game.use.card.useEffect(choice);
		system.game.use.reset();
	}
</script>

<div class="center" style="text-align:center">
	<button
		class="big choice"
		on:click={() => {
			select_action("Coquillage");
		}}
	>
		Génère Coquillage dans la réserve
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			select_action("Conque");
		}}
	>
		Génère Conque dans la réserve
	</button>
</div>
