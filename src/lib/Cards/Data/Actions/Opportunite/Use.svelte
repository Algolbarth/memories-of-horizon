<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import { Creature } from "../../../Class/Creature";

	export let system: System;

	let choice: boolean = false;

	function selectCondition(card: Card) {
		if (card instanceof Creature) {
			return true;
		}
		return false;
	}

	function selectAction(target: Creature | undefined) {
		system.game.use.card.useEffect(target);
		system.game.use.reset();
	}
</script>

{#if !choice}
	<div class="center">
		<button
			class="big choice"
			on:click={() => {
				selectAction(undefined);
			}}
		>
			Découvre 1 carte
		</button>

		<br />

		<button
			class="big choice"
			on:click={() => {
				choice = true;
			}}
		>
			Augmente de 1 l'initiative d'une créature alliée sur le terrain pendant ce tour
		</button>
	</div>
{:else}
	<button
		class="square return margin-bottom"
		on:click={() => {
			choice = false;
		}}
	>
		↩
	</button>
	{#if system.game && system.game.use.card && system.game.use.card.owner}
		<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Terrain")} {selectCondition} {selectAction} />
	{/if}
{/if}
