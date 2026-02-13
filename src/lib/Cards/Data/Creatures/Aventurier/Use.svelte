<script lang="ts">
	import type { System } from "../../../../System/Class";

	export let system: System;

	let types = ["action", "bâtiment", "créature", "lieu", "objet"];

	function selectAction(choice: string) {
		if (system.game && system.game.use.card) {
			system.game.use.card.useEffect(choice);
			system.game.use.reset();
		}
	}
</script>

<div class="center" style="text-align:center">
	{#each types as type}
		<button
			class="big choice"
			on:click={() => {
				selectAction(type.charAt(0).toUpperCase() + type.slice(1));
			}}
		>
			Pioche 1 {type}
		</button>

		<br />
	{/each}
</div>
