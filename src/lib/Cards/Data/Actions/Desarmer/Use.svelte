<script>
	import Zone from "../../../../Game/Zone.svelte";

	export let system;

	function condition(card) {
		if (card.type == "Créature" && card.equipments.length > 0) {
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
	entity={system.game.use.card.owner.adversary()}
	zone={system.game.use.card.owner.adversary().zone("Terrain")}
	{condition}
	{fonction}
/>
