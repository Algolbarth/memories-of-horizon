<script lang="ts">
	import { Game } from "../Game/Game";
	import type { System } from "../System/Class";

	export let system: System;

	function preconstruct() {
		system.game = new Game(system, "Pré-construit");
		system.game.init();
		system = system;
	}
</script>

<div class="taskbar">
	<div>
		<button
			class="square close"
			on:click={() => {
				system.page = "Menu";
			}}
		>
			X
		</button>
	</div>

	<div>
		<button class="taskbar">Modes de jeu</button>
	</div>
</div>

<div id="body">
	<button
		class="big menu"
		on:click={() => {
			preconstruct();
		}}
	>
		Pré-construit
	</button>

	<br />
	<br />

	<button
		class="big menu"
		on:click={() => {
			system.page = "Construit";
		}}
	>
		Construit
	</button>

	<br />
	<br />
	<br />
	<br />

	<button
		class="big menu"
		on:click={() => {
			system.page = "Training";
		}}
	>
		Entraînement
	</button>
</div>

<style>
	#body {
		text-align: center;
	}
</style>
