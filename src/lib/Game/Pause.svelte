<script>
	export let system;

	function close() {
		system.game.pause = false;
	}
</script>

{#if system.game.pause}
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
		height: 40vh;
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
