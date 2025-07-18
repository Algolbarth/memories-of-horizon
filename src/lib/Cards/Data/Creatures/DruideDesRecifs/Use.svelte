<script>
	export let system;

	function fonction(choice) {
		system.game.use.card.useEffect(choice);
		system.game.use.reset();
		system = system;
	}
</script>

<div class="center" style="text-align:center">
	<button
		class="big choice"
		on:click={() => {
			fonction("Ondin");
		}}
	>
		Forme ondin
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			fonction("Tortue");
		}}
	>
		Forme tortue
	</button>
</div>
