<script>
	import Zone from "../../../../Game/Zone.svelte";
	export let system;

	let choice = undefined;

	function condition(card) {
		if (card.type == "Bâtiment") {
			return true;
		}
		return false;
	}

	function condition2() {
		return true;
	}

	function fonction(card) {
		system.game.use.card.useEffect(card, choice);
		system.game.use.reset();
	}
</script>

{#if choice == undefined}
	<div class="center">
		<button
			class="big choice"
			on:click={() => {
				choice = "heal";
			}}
		>
			Soigne 20 blessures à un bâtiment allié sur le terrain
		</button>

		<br />

		<button
			class="big"
			on:click={() => {
				choice = "damage";
			}}
		>
			Inflige 20 dégâts à une unité adverse sur le terrain
		</button>
	</div>
{:else if choice == "heal"}
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
{:else if choice == "damage"}
	<button
		on:click={() => {
			choice = undefined;
		}}
	>
		Retour
	</button>
	<Zone
		bind:system
		entity={system.game.use.card.owner.adversary()}
		zone={system.game.use.card.owner.adversary().zone("Terrain")}
		condition={condition2}
		{fonction}
	/>
{/if}
