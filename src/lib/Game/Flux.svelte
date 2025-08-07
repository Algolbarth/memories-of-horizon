<script lang="ts">
	import type { System } from "../System/Class";

	export let system: System;

	function close() {
		if (system.game) {
			system.game.show_flux = false;
		}
	}

	let number_selected = "1";
	let numbers = ["1", "5", "10", "100", "Max"];
	let tab = ["Feu", "Air", "Végétal", "Eau", "Terre", "Mort", "Arcane", "Foudre", "Lumière", "Metal", "Glace", "Ombre"];
</script>

{#if system.game && system.game.show_flux}
	<div class="window">
		<div id="body" class="center">
			<div class="options">
				<div class="number">
					{#each numbers as number}
						<button
							class={"number" + (number_selected == number ? " selected" : "")}
							on:click={() => {
								number_selected = number;
							}}
						>
							{number}
						</button>
					{/each}
				</div>

				<div style="text-align:right;">
					<button
						class="close"
						on:click={() => {
							close();
						}}
					>
						X
					</button>
				</div>
			</div>

			<br />

			<div class="container">
				{#each tab as ressource}
					<div class="ressource">
						<button
							style={"background:" + system.ressources.find(ressource).color + ";color:" + (system.ressources.find(ressource).light_font ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)")}
							class="big flux"
							on:click={() => {
								let add: number;

								if (number_selected == "Max") {
									add = system.game.player.ressource("Flux").stock;
								}
								else {
									add = parseInt(number_selected);
									if (add > system.game.player.ressource("Flux").stock) {
										add = system.game.player.ressource("Flux").stock;
									}
								}

								system.game.player.ressource(ressource).current += add;
								system.game.player.ressource(ressource).max += add;
								system.game.player.ressource("Flux").stock -= add;

								if (system.game.player.ressource("Flux").stock == 0) {
									system.game.show_flux = false;
								}
							}}
						>
							{ressource}
						</button>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	.window {
		background: var(--shadow);
	}

	#body {
		background-color: var(--card);
		width: 50%;
		min-height: max-content;
		max-height: 60vh;
		padding: 1%;
		border: solid;
		border-width: 5px;
	}

	div.options {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}

	div.number {
		display: flex;
		place-items: center;
	}

	button.number {
		background: grey;
		margin-right: 1em;
		padding: 0.3em;
		width: 3em;
		text-align: center;
		border: solid;
	}

	button.number:hover {
		color: black;
	}

	button.selected {
		background: gold;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	.ressource {
		text-align: center;
	}

	button.flux {
		height: 10vh;
		width: 80%;
		border-color: black;
	}

	button.flux:hover {
		border-color: gold;
	}
</style>
