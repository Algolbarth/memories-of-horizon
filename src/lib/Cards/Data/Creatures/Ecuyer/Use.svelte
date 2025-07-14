<script>
	import Zone from "../../../../Game/Zone.svelte";

	export let system;

	function condition(card) {
		if (
			card.type == "Créature" &&
			card.familles.total().includes("Chevalier") &&
			!card.mounted
		) {
			return true;
		}
		return false;
	}

	function fonction(card) {
		system.game.use.card.useEffect(card);
		system.game.use.reset();
	}
</script>

<Zone
	bind:system
	bind:entity={system.game.use.card.owner}
	zone={system.game.use.card.owner.zone("Terrain")}
	{condition}
	{fonction}
/>
