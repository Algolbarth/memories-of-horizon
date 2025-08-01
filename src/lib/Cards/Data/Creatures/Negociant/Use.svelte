<script>
	import Zone from "../../../../Game/Zone.svelte";

	export let system;

	function condition(card) {
		if (card.getCout("Or").value() > 0) {
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
	zone={system.game.use.card.owner.zone("Boutique")}
	{condition}
	{fonction}
/>
