<script lang="ts">
	import type { System } from "../System/Class";
    import { Game } from "./Game";

	export let system: System;

	function close() {
		if (system.game) {
			system.game.pause = false;
		}
	}
</script>

{#if system.game && system.game.pause}
	<div class="window">
		<div id="body" class="center">
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

			<div class="button-list center">
				<button
					class="big"
					on:click={() => {
						system.page = "Settings";
					}}
				>
					Options
				</button>

				{#if system.game.mode == "Entraînement"}
					<button
						class="big"
						on:click={() => {
							system.view.reset();
							system.page = "Training";
							system.game = undefined;
						}}
					>
						Configurer l'entraînement
					</button>

					<button
						class="big"
						on:click={() => {
							system.view.reset();
							system.game = new Game(system, "Entraînement", system.train.deck);
							system.game.init();
						}}
					>
						Relancer l'entraînement
					</button>
				{/if}

				<button
					class="big"
					on:click={() => {
						system.view.reset();
						system.page = "Menu";
						system.game = undefined;
					}}
				>
					Quitter la partie
				</button>
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
		width: 20vw;
		height: 50vh;
		padding: 1%;
		border: solid;
		border-width: 5px;
		text-align: center;
	}

	.button-list {
		display: grid;
		width: 80%;
	}
</style>
