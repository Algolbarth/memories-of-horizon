<script lang="ts">
	import type { Step } from "../Chapters/Class";
	import type { System } from "../System/Class";

	export let system: System;

	let step: Step | undefined = system.game?.chapter?.steps[system.game.player.step - 1];
</script>

{#if system.game && system.game.chapter && step}
	<div id="body" class="center">
		<div class="center">
			<div class="container">
				<div class="paper info">
					Chapitre {system.game.chapter.number}
				</div>

				<div class="paper info">
					Étape {system.game.player.step} / {system.game.chapter.steps.length}
				</div>
			</div>

			<br />
			<br />

			<div class="paper story">
				{step.dialogs[step.dialog]}
			</div>

			<br />
			<br />

			<button
				class="big"
				on:click={() => {
					if (system.game && system.game.chapter) {
						system.game.chapter.nextDialog();
						step = step;
						system = system;
					}
				}}
			>
				Suivant ({step.dialog + 1}/{step.dialogs.length})
			</button>
		</div>
	</div>
{/if}

<style>
	#body {
		width: 50vw;
		height: 50vh;

		text-align: center;

		background-color: var(--pannel);
		background-image: var(--wood);

		border: solid;
		border-color: black;
	}

	div.container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		width: 40vw;
	}

	div.paper {
		transition: all var(--delay) ease-in-out;

		background-color: var(--preview);
		background-image: var(--paper);

		padding: 0.5em;

		border: solid;
		border-color: black;
	}

	div.paper:hover {
		transition: all var(--delay_hover) ease-in-out;
		
		background-color: var(--preview_hover);
	}

	div.info {
		width: 10vw;
		margin-left: 5vw;
	}

	div.story {
		padding: 1em;

		width: 40vw;
	}

	button.big {
		background-color: var(--card_box);
		background-image: var(--paper);
	}

	button.big:hover {
		color: black;

		border-color: black;

		background-color: var(--preview_hover);
	}
</style>
