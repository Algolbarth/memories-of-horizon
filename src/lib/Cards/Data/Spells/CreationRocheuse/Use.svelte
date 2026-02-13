<script lang="ts">
	import type { System } from "../../../../System/Class";

	export let system: System;

	function selectAction(choice: string) {
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
			selectAction("creature");
		}}
	>
		Génère un Élémentaire de roche sur le terrain
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			selectAction("building");
		}}
	>
		Créé un Mur de roche sur le terrain
	</button>
</div>
