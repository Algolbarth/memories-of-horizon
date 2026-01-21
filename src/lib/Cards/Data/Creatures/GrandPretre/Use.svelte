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
			select_action("life");
		}}
	>
		Augmente de 15 la constitution de toutes les créatures alliées sur le terrain
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			select_action("heal");
		}}
	>
		Soigne 20 blessures à toutes les créatures alliées sur le terrain
	</button>
</div>
