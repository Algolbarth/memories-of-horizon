<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import { Creature } from "../../../Class/Creature";

	export let system: System;

	let choice: string | undefined = undefined;

	function select_condition(card: Card) {
		if (card instanceof Creature) {
			return true;
		}
		return false;
	}

	function select_action(card: Card) {
		system.game.use.card.useEffect(card, choice);
		system.game.use.reset();
	}
</script>

{#if choice == undefined}
	<div class="center">
		<button
			class="big choice"
			on:click={() => {
				choice = "endurance";
			}}
		>
			Augmente de 10 l'endurance d'une créature alliée sur le terrain
		</button>

		<br />

		<button
			class="big choice"
			on:click={() => {
				choice = "résistance";
			}}
		>
			Augmente de 10 la résistance d'une créature alliée sur le terrain
		</button>
	</div>
{:else}
	<button
		class="square return margin-bottom"
		on:click={() => {
			choice = undefined;
		}}
	>
		↩
	</button>
	{#if system.game && system.game.use.card && system.game.use.card.owner}
		<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Terrain")} {select_condition} {select_action} />
	{/if}
{/if}
