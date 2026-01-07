<script lang="ts">
	import type { System } from "../../../../System/Class";

	export let system: System;

	function select_action(choice) {
		system.game.use.card.useEffect(choice);
		system.game.use.reset();
	}
</script>

<div class="center" style="text-align:center">
	<button
		class="big choice"
		on:click={() => {
			select_action("creature");
		}}
	>
		Remplit le terrain allié d'Élémentaire de caillou
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			select_action("damage");
		}}
	>
		Inflige 6 dégâts à toutes les unités adverses sur le terrain
	</button>
</div>
