<script lang="ts">
	import { Game } from "../Game/Game";
	import View from "../Decks/View.svelte";
	import { several } from "../Utils";
	import type { System } from "../System/Class";

	export let system: System;

	let array = [];

	for (const deck of system.decks) {
		if (deck.playable()) {
			array.push(deck);
		}
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

	<div>
		<button class="taskbar">Mode construit</button>
	</div>
</div>

<div class="zone">
	<div class="zone_taskbar">
		<div>
			{several(array.length, ["Deck"])} jouable{#if array.length > 1}s{/if}
		</div>

		<div style="text-align: right;">
			<button
				class="active"
				on:click={() => {
					system.page = "Decks";
				}}
			>
				Consulter les decks
			</button>
		</div>
	</div>

	<div id="list" class="scroll">
		{#each array as deck}
			<div class="preview">
				<div>
					<button
						on:mouseenter={() => {
							system.view.quick = deck;
						}}
						on:mouseleave={() => {
							system.view.quick = undefined;
						}}
						on:click={() => {
							system.view.card = deck;
						}}
					>
						{deck.name}
					</button>
				</div>
				<div style="text-align:right">
					<button
						on:click={() => {
							system.view.reset();
							system.game = new Game(system, "Construit", deck);
							system.game.init();
							system = system;
						}}
					>
						Jouer
					</button>
				</div>
			</div>
		{/each}
	</div>
</div>

<div id="view">
	<View bind:system />
</div>

<style>
	.zone {
		background-color: var(--zone);
		border: solid;
		padding: 1%;
		width: 50vw;
	}

	#list {
		max-height: 85vh;
	}

	.preview {
		border: solid;
		margin-top: 1%;
		margin-bottom: 1%;
		padding: 1%;
		background-color: var(--deck_preview);
		background-image: var(--leather);
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	#view {
		position: fixed;
		top: 0%;
		left: 54vw;
	}
</style>
