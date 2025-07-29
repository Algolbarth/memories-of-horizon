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
			fonction("Gobelin");
		}}
	>
		Se transforme en Druide de feu (forme gobelin)
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			fonction("Lézard");
		}}
	>
		Se transforme en Druide de feu (forme lézard)
	</button>
</div>
