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

	function selectCondition(target: Card) {
		if (target instanceof Creature) {
			return true;
		}
		return false;
	}

	function selectAction(target: Creature | undefined) {
		card.useEffect(choice, target);
		game.use.reset();
	}
</script>

{#if choice == undefined}
	<div class="center">
		<button
			class="big choice"
			on:click={() => {
				choice = "discover";
				selectAction(undefined);
			}}
		>
			Découvre 1 carte
		</button>

		<br />

		<button
			class="big choice"
			on:click={() => {
				choice = "initiative";
			}}
		>
			Augmente de 1 l'initiative d'une créature alliée sur le terrain pendant ce tour
		</button>
	</div>
{:else if choice == "initiative"}
	<button
		class="square return margin-bottom"
		on:click={() => {
			choice = undefined;
		}}
	>
		↩
	</button>

	<Zone bind:system bind:game entity={card.owner()} zone={card.owner().zone("Terrain")} {selectCondition} {selectAction} />
{/if}
