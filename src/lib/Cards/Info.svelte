<script>
	export let system;
	export let name;

	$: card = system.cards.getByName(name);
</script>

<button
	on:click={() => {
		system.view.card = card;
	}}
>
	{name}
</button>

<style>
	button {
		color: darkgreen;
	}

	button:hover {
		color: greenyellow;
	}
</style>
