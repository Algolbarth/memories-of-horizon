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
		Se transforme en Druide des plaines (forme humain)
	</button>

	<br />

	<button
		class="big choice"
		on:click={() => {
			fonction("Loup");
		}}
	>
		Se transforme en Druide des plaines (forme loup)
	</button>
</div>
