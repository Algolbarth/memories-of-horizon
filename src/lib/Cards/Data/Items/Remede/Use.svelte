<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import { Card } from "../../../Class";
	import { Creature } from "../../../Class/Creature";
	import type { Stat } from "../../../Class/Stat";

	export let system: System;

	let target: Creature | undefined = undefined;

	function select_condition(card: Card) {
		if (card instanceof Creature && card.hasDebuff()) {
			return true;
		}
		return false;
	}

	function select_action_1(card: Creature) {
		target = card;
	}

	function select_action_2(stat: Stat) {
		system.game.use.card.useEffect(stat);
		system.game.use.reset();
	}
</script>

{#if target == undefined}
	<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Terrain")} {select_condition} select_action={select_action_1} />
{:else}
	<button
		class="square return"
		on:click={() => {
			target = undefined;
		}}
	>
		↩
	</button>

	<div class="center" style="text-align:center">
		{#each target.stats as stat}
			{#if stat.debuff && stat.condition()}
				<button
					class="big choice"
					on:click={() => {
						select_action_2(stat);
					}}
				>
					{stat.name}
				</button>

				<br />
			{/if}
		{/each}
	</div>
{/if}
