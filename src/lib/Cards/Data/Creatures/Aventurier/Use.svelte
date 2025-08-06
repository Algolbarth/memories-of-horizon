<script lang="ts">
	import type { System } from "../../../../System/Class";

	export let system: System;

	let types = ["Action", "Bâtiment", "Créature", "Lieu", "Objet"];

	function fonction(choice) {
		system.game.use.card.useEffect(choice);
		system.game.use.reset();
	}
</script>

<div class="center" style="text-align:center">
	{#each types as type}
		<button
			class="big choice"
			on:click={() => {
				fonction(type);
			}}
		>
			{type}
		</button>

		<br />
	{/each}
</div>
