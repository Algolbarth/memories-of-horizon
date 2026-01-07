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
			select_action("Créature");
		}}
	>
		Crée un Élémentaire de roche sur le terrain
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			select_action("Bâtiment");
		}}
	>
		Créé un Mur de roche sur le terrain
	</button>
</div>
