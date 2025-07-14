<script>
	import Zone from "../../../../Game/Zone.svelte";

	export let system;

	function condition(card) {
		return true;
	}

	function fonction(card) {
		system.game.use.card.useEffect(card);
		system.game.use.reset();
	}
</script>

<Zone
	bind:system
	bind:entity={system.game.use.card.owner}
	zone={system.game.use.card.owner.zone("Défausse")}
	{condition}
	{fonction}
/>
