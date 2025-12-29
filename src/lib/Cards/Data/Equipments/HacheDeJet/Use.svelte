<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import { Creature } from "../../../Class/Creature";

	export let system: System;

	let choice: string | undefined = undefined;

	function condition(card: Card) {
		if (card instanceof Creature && card.canEquip()) {
			return true;
		}
		return false;
	}

	function condition2(card: Card) {
		return true;
	}

	function fonction(card: Card) {
		system.game.use.card.useEffect(card, choice);
		system.game.use.reset();
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
		class="return"
		on:click={() => {
			choice = undefined;
		}}
	>
		↩
	</button>
	<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Terrain")} {condition} {fonction} />
{:else if choice == "damage"}
	<button
		class="return"
		on:click={() => {
			choice = undefined;
		}}
	>
		↩
	</button>
	<Zone bind:system entity={system.game.use.card.owner.adversary()} zone={system.game.use.card.owner.adversary().zone("Terrain")} condition={condition2} {fonction} />
{/if}
