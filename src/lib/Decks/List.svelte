<script lang="ts">
	import type { System } from "../System/Class";
	import { several } from "../Utils";
	import { Deck } from "./Deck";
	import View from "./View.svelte";

	export let system: System;

	function newDeck() {
		let deck = new Deck(system);
		system.decks.push(deck);
		system.deck = deck;
		system.page = "Deck";
	}
</script>

<button
	class="close"
	on:click={() => {
		system.view.reset();
		system.page = "Menu";
	}}
>
	X
</button>

<br />
<br />

<div id="zone">
	<div class="taskbar">
		<div>
			{several(system.decks.length, "Deck")}
		</div>

		<div style="text-align: right;">
			<button
				class="check"
				on:click={() => {
					newDeck();
				}}
			>
				Créer un nouveau deck
			</button>
		</div>
	</div>

	<div id="list" class="scroll">
		{#each system.decks as deck, i}
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
							system.deck = deck;
							system.view.reset();
							system.page = "Deck";
						}}
					>
						Modifier
					</button>
					{#if i > 0}
						<button
							on:click={() => {
								let temp = system.decks[i - 1];
								system.decks[i - 1] = deck;
								system.decks[i] = temp;
							}}
						>
							&#9650
						</button>
					{:else}
						<button class="classic useless">&#9650</button>
					{/if}
					{#if i < system.decks.length - 1}
						<button
							on:click={() => {
								let temp = system.decks[i + 1];
								system.decks[i + 1] = deck;
								system.decks[i] = temp;
							}}
						>
							&#9660
						</button>
					{:else}
						<button class="classic useless">&#9660</button>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<div id="view">
	<View bind:system />
</div>

<style>
	#zone {
		background-color: var(--zone);
		border: solid;
		padding: 1%;
		width: 50vw;
	}

	div.taskbar {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	#list {
		max-height: 80vh;
	}

	.preview {
		border: solid;
		margin-top: 1%;
		margin-bottom: 1%;
		padding: 1%;
		background-color: var(--preview_deck);
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.useless {
		color: lightgrey;
	}

	#view {
		position: fixed;
		top: 0%;
		left: 54vw;
	}

	button.check {
		color: darkgreen;
	}

	button.check:hover {
		color: greenyellow;
	}
</style>
