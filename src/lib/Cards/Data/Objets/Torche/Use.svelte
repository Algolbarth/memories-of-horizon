<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";

	export let system: System;

	let choice: string | undefined = undefined;

	function condition() {
		return true;
	}

	function fonction(card: Card) {
		system.game.use.card.useEffect(card);
		system.game.use.reset();
	}
</script>

{#if choice == undefined}
	<div class="center">
		<button
			class="big choice"
			on:click={() => {
				fonction(undefined);
			}}
		>
			Augmente de 2 la capacité en feu
		</button>

		<br />

		<button
			class="big choice"
			on:click={() => {
				choice = "damage";
			}}
		>
			Inflige 20 dégâts à une unité adverse sur le terrain
		</button>
	</div>
{:else if choice == "damage"}
	<button
		on:click={() => {
			choice = undefined;
		}}
	>
		Retour
	</button>
	<Zone bind:system entity={system.game.use.card.owner.adversary()} zone={system.game.use.card.owner.adversary().zone("Terrain")} {condition} {fonction} />
{/if}
