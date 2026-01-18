<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;

	let choice: string | undefined = undefined;

	function select_condition(card: Card) {
		if (card.type == "Créature") {
			return true;
		}
		return false;
	}

	function select_action(card: Card | undefined) {
		system.game.use.card.useEffect(card);
		system.game.use.reset();
	}
</script>

{#if choice == undefined}
	<div class="center">
		<button
			class="big choice"
			on:click={() => {
				select_action(undefined);
			}}
		>
			Se place sur le terrain
		</button>

		<br />

		<button
			class="big choice"
			on:click={() => {
				choice = "stun";
			}}
		>
			Se détruit pour augmenter jusqu'à 1 l'étourdissement d'une créature adverse sur le terrain
		</button>
	</div>
{:else}
	<button
		class="square return"
		on:click={() => {
			choice = undefined;
		}}
	>
		↩
	</button>

	<Zone bind:system entity={system.game.use.card.owner.adversary()} zone={system.game.use.card.owner.adversary().zone("Terrain")} {select_condition} {select_action} />
{/if}
