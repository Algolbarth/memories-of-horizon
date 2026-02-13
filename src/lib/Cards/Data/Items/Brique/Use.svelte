<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import { Building } from "../../../Class/Building";

	export let system: System;

	let choice: string | undefined = undefined;

	function selectCondition_1(card: Card) {
		if (card instanceof Building) {
			return true;
		}
		return false;
	}

	function selectCondition_2() {
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
	<div class="center">
		<button
			class="big choice"
			on:click={() => {
				choice = "heal";
			}}
		>
			Soigne 20 blessures à un bâtiment allié sur le terrain
		</button>

		<br />

		<button
			class="big"
			on:click={() => {
				choice = "damage";
			}}
		>
			Inflige 20 dégâts à une unité adverse sur le terrain
		</button>
	</div>
{:else if choice == "heal"}
	<button
		class="square return margin-bottom"
		on:click={() => {
			choice = undefined;
		}}
	>
		↩
	</button>

	{#if system.game && system.game.use.card && system.game.use.card.owner}
		<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Terrain")} selectCondition={selectCondition_1} {selectAction} />
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
		<Zone bind:system entity={system.game.use.card.adversary()} zone={system.game.use.card.adversary().zone("Terrain")} selectCondition={selectCondition_2} {selectAction} />
	{/if}
{/if}
