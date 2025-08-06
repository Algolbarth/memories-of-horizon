<script lang="ts">
	import type { System } from "../../../../System/Class";

	export let system: System;

	function fonction(choice) {
		system.game.use.card.useEffect(choice);
		system.game.use.reset();
	}
</script>

<div class="center" style="text-align:center">
	<button
		class="big choice"
		on:click={() => {
			fonction("Créature");
		}}
	>
		Élémentaire de roche
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			fonction("Bâtiment");
		}}
	>
		Mur de roche
	</button>
</div>
