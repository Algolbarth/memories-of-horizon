<script>
	export let system;

	function fonction(choice) {
		system.game.use.card.useEffect(choice);
		system.game.use.reset();
	}
</script>

<div class="center" style="text-align:center">
	<button
		class="big choice"
		on:click={() => {
			fonction("Créature");
		}}
	>
		Se place sur le terrain
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			fonction("Effet");
		}}
	>
		Se détruit pour infliger 5 dégâts à toutes les unités adverses
	</button>
</div>
