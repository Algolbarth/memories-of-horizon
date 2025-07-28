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
				fonction("life");
			}}
		>
			Augmente de 10 la vie de toutes les créatures alliées sur le terrain
		</button>

		<br />

		<button
			class="big choice"
			on:click={() => {
				fonction("heal");
			}}
		>
			Soigne 20 blessures à toutes les créatures alliées sur le terrain
		</button>
	</div>

