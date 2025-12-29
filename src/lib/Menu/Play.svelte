<script lang="ts">
	import { Game } from "../Game/Game";
	import type { System } from "../System/Class";

	export let system: System;

	function aventure() {
		system.game = new Game(system, "Aventure");
		system.game.init();
		system = system;
	}
</script>

<button
	class="close"
	on:click={() => {
		system.page = "Menu";
	}}
>
	X
</button>

<div id="body">
	<button
		class="big menu"
		on:click={() => {
			aventure();
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
