<script lang="ts">
	import type { Game } from "../../../../Game/Game";
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import { Creature } from "../../../Class/Creature";

	export let system: System;
	export let game: Game;
	export let card: Card;

	let choice: string | undefined = undefined;

	function selectCondition_1(target: Card) {
		if (target instanceof Creature && target.canEquip()) {
			return true;
		}
		return false;
	}

	function selectCondition_2(target: Card) {
		return true;
	}

	function selectAction(target: Card) {
		card.useEffect(target, choice);
		game.use.reset();
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
			Inflige 50 dégâts à une unité adverse sur le terrain
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

	<Zone bind:system bind:game entity={card.owner()} zone={card.owner().zone("Terrain")} selectCondition={selectCondition_1} {selectAction} />
{:else if choice == "damage"}
	<button
		class="square return margin-bottom"
		on:click={() => {
			choice = undefined;
		}}
	>
		↩
	</button>

	<Zone bind:system bind:game entity={card.adversary()} zone={card.adversary().zone("Terrain")} selectCondition={selectCondition_2} {selectAction} />
{/if}
