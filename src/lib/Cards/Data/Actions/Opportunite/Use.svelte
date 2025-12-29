<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import type { Creature } from "../../../Class/Creature";

	export let system: System;

	let choice: boolean = false;

	function condition(card: Card) {
		if (card.type == "Créature") {
			return true;
		}
		return false;
	}

	function fonction(target: Creature | undefined) {
		system.game.use.card.useEffect(target);
		system.game.use.reset();
	}
</script>

{#if !choice}
	<div class="center">
		<button
			class="big choice"
			on:click={() => {
				choice = true;
			}}
		>
			Augmente de 1 l'initiative d'une créature alliée sur le terrain
		</button>

		<br />

		<button
			class="big choice"
			on:click={() => {
				fonction(undefined);
			}}
		>
			Découvre 1 carte
		</button>
	</div>
{:else}
	<button
		class="return"
		on:click={() => {
			choice = false;
		}}
	>
		↩
	</button>
	<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Terrain")} {condition} {fonction} />
{/if}
