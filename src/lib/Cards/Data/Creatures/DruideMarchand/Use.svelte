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
			fonction("Humain");
		}}
	>
		Forme humain
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			fonction("Boeuf");
		}}
	>
		Forme boeuf
	</button>
</div>
