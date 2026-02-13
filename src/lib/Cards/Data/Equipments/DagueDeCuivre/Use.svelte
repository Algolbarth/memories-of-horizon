<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import { Creature } from "../../../Class/Creature";

	export let system: System;

	let choice: string | undefined = undefined;

	function selectCondition_1(card: Card) {
		if (card instanceof Creature && card.canEquip()) {
			return true;
		}
		return false;
	}

	function selectCondition_2(card: Card) {
		return true;
	}

	function selectAction(card: Card) {
		if (system.game && system.game.use.card) {
			system.game.use.card.useEffect(card, choice);
			system.game.use.reset();
		}
	}
</script>

{#if choice == undefined}
	<div class="center" style="text-align:center">
		<button
			class="big choice"
			on:click={() => {
				choice = "equip";
			}}
		>
			S'équipe à une créature alliée sur le terrain
		</button>

		<br />

		<button
			class="big choice"
			on:click={() => {
				choice = "damage";
			}}
		>
			Inflige 5 dégâts à une unité adverse sur le terrain
		</button>
	</div>
{:else if choice == "equip"}
	<button
		class="square return margin-bottom"
		on:click={() => {
			choice = undefined;
		}}
	>
		↩
	</button>
	{#if system.game && system.game.use.card && system.game.use.card.owner}
		{#if system.game && system.game.use.card && system.game.use.card.owner}
			<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Terrain")} selectCondition={selectCondition_1} {selectAction} />
		{/if}
	{/if}
{:else if choice == "damage"}
	<button
		class="square return margin-bottom"
		on:click={() => {
			choice = undefined;
		}}
	>
		↩
	</button>
	{#if system.game && system.game.use.card && system.game.use.card.owner}
		{#if system.game && system.game.use.card && system.game.use.card.owner}
			<Zone bind:system entity={system.game.use.card.adversary()} zone={system.game.use.card.adversary().zone("Terrain")} selectCondition={selectCondition_2} {selectAction} />
		{/if}
	{/if}
{/if}
