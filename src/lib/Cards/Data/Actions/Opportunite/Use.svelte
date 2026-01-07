<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import type { Creature } from "../../../Class/Creature";

	export let system: System;

	let choice: boolean = false;

	function select_condition(card: Card) {
		if (card.type == "Créature") {
			return true;
		}
		return false;
	}

	function select_action(target: Creature | undefined) {
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
				select_action(undefined);
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
	<Zone bind:system bind:entity={system.game.use.card.owner} zone={system.game.use.card.owner.zone("Terrain")} {select_condition} {select_action} />
{/if}
