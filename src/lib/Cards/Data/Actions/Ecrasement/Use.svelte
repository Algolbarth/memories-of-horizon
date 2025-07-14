<script>
	import Zone from "../../../../Game/Zone.svelte";

	export let system;

	function condition() {
		return true;
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
