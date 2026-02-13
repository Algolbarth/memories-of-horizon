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
			selectAction("life");
		}}
	>
		Augmente de 15 la constitution de toutes les créatures alliées sur le terrain
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			selectAction("heal");
		}}
	>
		Soigne 20 blessures à toutes les créatures alliées sur le terrain
	</button>
</div>
