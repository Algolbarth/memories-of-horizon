<script>
	import Zone from "../../../../Game/Zone.svelte";

	export let system;

	let choice = undefined;

	function condition(card) {
		if (card.type == "Créature") {
			return true;
		}
		return false;
	}

	function fonction(card) {
		system.game.use.card.useEffect(card, choice);
		system.game.use.reset();
	}
</script>

{#if choice == undefined}
	<div class="center" style="text-align:center">
		<button
			class="big choice"
			on:click={() => {
				choice = "life";
			}}
		>
			Augmente de 10 la vie d'une créature alliée sur le terrain
		</button>

		<br />

		<button
			class="big choice"
			on:click={() => {
				choice = "heal";
			}}
		>
			Soigne 20 blessures d'une créature alliée sur le terrain
		</button>
	</div>
{:else}
	<button
		on:click={() => {
			choice = undefined;
		}}
	>
		Retour
	</button>
	<Zone
		bind:system
		bind:entity={system.game.use.card.owner}
		zone={system.game.use.card.owner.zone("Terrain")}
		{condition}
		{fonction}
	/>
{/if}
