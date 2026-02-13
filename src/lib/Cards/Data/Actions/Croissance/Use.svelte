<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import { Creature } from "../../../Class/Creature";

	export let system: System;

	let choice: string | undefined = undefined;

	function selectCondition(card: Card) {
		if (card instanceof Creature) {
			return true;
		}
		return false;
	}

	function selectAction(card: Card) {
		if (system.game && system.game.use.card) {
			system.game.use.card.useEffect(card, choice);
			system.game.use.reset();
		}
	}
</script>

{#if choice == undefined}
	<div class="center">
		<button
			class="big choice"
			on:click={() => {
				choice = "life";
			}}
		>
			Augmente de 75 la constitution d'une créature alliée sur le terrain
		</button>

		<br />

		<button
			class="big choice"
			on:click={() => {
				choice = "balance";
			}}
		>
			Augmente de 50 la constitution et la force d'une créature alliée sur le terrain
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
		<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Terrain")} {selectCondition} {selectAction} />
	{/if}
{/if}
