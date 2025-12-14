<script lang="ts">
	import type { Step } from "../Chapters/Class";
	import type { System } from "../System/Class";

	export let system: System;

	let step: Step | undefined = system.game?.chapter?.steps[system.game.player.step - 1];
</script>

{#if system.game && system.game.chapter && step}
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
{/if}

<style>
	#body {
		text-align: center;
	}
</style>
