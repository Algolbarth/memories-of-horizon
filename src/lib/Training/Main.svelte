<script lang="ts">
	import Entity from "./Entity.svelte";
	import Zone from "./Zone.svelte";
	import Add from "./Add.svelte";
	import View from "../Cards/View/Main.svelte";
	import { Game } from "../Game/Game";
	import type { System } from "../System/Class";

	export let system: System;
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

		<button
			class="square return"
			on:click={() => {
				system.view.reset();
				system.page = "Play";
			}}
		>
			↩
		</button>
	</div>

	<div style="text-align:center">
		<button
			class="taskbar train"
			on:click={() => {
				system.view.reset();
				system.game = new Game(system, "Entraînement", system.train.deck);
				system.game.init();
				system.page = "Game";
			}}
		>
			Lancer l'entraînement
		</button>
	</div>

	<div></div>
</div>

<div id="body" class="scroll">
	<div class="bi-zone">
		<Entity bind:system bind:entity={system.train.player} />
		<Entity bind:system bind:entity={system.train.bot} />
	</div>
	{#each system.train.bot.zones as zone, i}
		<div class="bi-zone">
			<Zone bind:system entity="player" bind:zone={system.train.player.zones[i]} />
			<Zone bind:system entity="bot" bind:zone />
		</div>
	{/each}
</div>

<Add bind:system />

{#if system.train.add.zone == undefined}
	<div class="center">
		<View bind:system />
	</div>
{/if}

<style>
	#body {
		height: 90vh;
	}

	.bi-zone {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	button.train {
		background-color: var(--menu);
	}

	button.train:hover {
		background-color: var(--menu_hover);
	}
</style>
