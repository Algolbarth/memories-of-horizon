<script>
	export let system;

	let step = system.game.chapter.steps[system.game.player.step - 1];
</script>

<div id="body" class="center">
	Chapitre {system.game.chapter.number}
	- Étape {system.game.player.step} / {system.game.chapter.steps.length}

	<br />
	<br />

	{step.dialogs[step.dialog]}

	<br />
	<br />

	<button
		class="big"
		on:click={() => {
			system.game.chapter.nextDialog();
			step = step;
			system = system;
		}}
	>
		Suivant
	</button>
</div>

<style>
	#body {
		text-align: center;
	}
</style>
