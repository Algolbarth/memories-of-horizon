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
			class="big"
			on:click={() => {
				choice = "life";
			}}>Augmenter la vie de 10</button
		>
		<br />
		<button
			class="big"
			on:click={() => {
				choice = "heal";
			}}>Soigner 20 blessures</button
		>
	</div>
{:else}
	<button
		on:click={() => {
			choice = undefined;
		}}>Retour</button
	>
	<Zone
		bind:system
		bind:entity={system.game.use.card.owner}
		zone={system.game.use.card.owner.zone("Terrain")}
		{condition}
		{fonction}
	/>
{/if}
