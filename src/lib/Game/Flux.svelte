<script>
	export let system;

	function close() {
		system.game.flux = false;
	}

	let tab = [
		"Feu",
		"Air",
		"Végétal",
		"Eau",
		"Terre",
		"Mort",
		"Arcane",
		"Foudre",
		"Lumière",
		"Metal",
		"Glace",
		"Ombre",
	];
</script>

{#if system.game.flux}
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

			<br />

			<div class="container">
				{#each tab as ressource}
					<div class="ressource">
						<button
							style={"background:" +
								system.game.player.ressource(ressource)
									.background_color +
								";color:" +
								(system.game.player.ressource(ressource)
									.light_font
									? "rgba(255, 255, 255, 1)"
									: "rgba(0, 0, 0, 1)")}
							class="big flux"
							on:click={() => {
								system.game.player.ressource(ressource)
									.current++;
								system.game.player.ressource(ressource).max++;
								system.game.player.flux--;
								if (system.game.player.flux == 0) {
									system.game.flux = false;
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
