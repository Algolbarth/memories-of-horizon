<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import { Card } from "../../../Class";
	import { Creature } from "../../../Class/Creature";
	import type { Stat } from "../../../Class/Stat";

	export let system: System;

	let target: Creature | undefined = undefined;

	function condition(card: Card) {
		if (card instanceof Creature && card.hasDebuff()) {
			return true;
		}
		return false;
	}

	function fonction(card: Creature) {
		target = card;
	}

	function fonction2(stat: Stat) {
		system.game.use.card.useEffect(stat);
		system.game.use.reset();
	}
</script>

{#if target == undefined}
	<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Terrain")} {condition} {fonction} />
{:else}
	<button
		on:click={() => {
			target = undefined;
		}}
	>
		Retour
	</button>

	<div class="center" style="text-align:center">
		{#each target.stats as stat}
			{#if stat.debuff && stat.condition()}
				<button
					class="big choice"
					on:click={() => {
						fonction2(stat);
					}}
				>
					{stat.name}
				</button>

				<br />
			{/if}
		{/each}
	</div>
{/if}
