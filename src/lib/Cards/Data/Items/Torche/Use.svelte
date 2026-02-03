<script lang="ts">
	import Zone from "../../../../Game/Zone.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;

	let choice: string | undefined = undefined;

	function select_condition() {
		return true;
	}

	function select_action(card: Card | undefined) {
		if (system.game && system.game.use.card) {
			system.game.use.card.useEffect(card);
			system.game.use.reset();
		}
	}
</script>

{#if choice == undefined}
	<div class="center">
		<button
			class="big choice"
			on:click={() => {
				select_action(undefined);
			}}
		>
			Augmente de 2 la production en feu
		</button>

		<br />

		<button
			class="big choice"
			on:click={() => {
				choice = "damage";
			}}
		>
			Inflige 20 dégâts à une unité adverse sur le terrain
		</button>
	</div>
{:else if choice == "damage"}
	<button
		class="square return margin-bottom"
		on:click={() => {
			choice = undefined;
		}}
	>
		↩
	</button>

	{#if system.game && system.game.use.card}
		<Zone bind:system entity={system.game.use.card.adversary()} zone={system.game.use.card.adversary().zone("Terrain")} {select_condition} {select_action} />
	{/if}
{/if}
