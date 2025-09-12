<script lang="ts">
	import Filter from "../Filter/View.svelte";
	import { several } from "../Utils";
	import View from "../Cards/View/Main.svelte";
	import type { System } from "../System/Class";

	export let system: System;

	let name: string = system.deck!.name;
	let sorted: boolean = false;
	let move: boolean;
	if (system.deck?.canModify()) {
		move = false;
	} else {
		move = true;
	}

	let nameSelect: string = "";
	let levelSelect: string = "Tous";
	let typeSelect: string = "Tous";
	let familleSelect: string = "Toutes";
	let elementSelect: string = "Tous";

	let cardList: string[] = [];
	cards();

	function cards() {
		let tab: string[] = [];

		if (system.deck?.cards) {
			for (const cardName of system.deck?.cards) {
				let card = system.cards.getByName(cardName);
				let name = card.name.toLowerCase();

				if ((nameSelect == "" || name.includes(nameSelect.toLowerCase())) && (levelSelect == "Tous" || card.level == levelSelect) && (typeSelect == "Tous" || card.type == typeSelect) && (familleSelect == "Toutes" || card.familles.total().includes(familleSelect)) && (elementSelect == "Tous" || card.elements.total().includes(elementSelect))) {
					tab.push(cardName);
				}
			}
		}

		cardList = tab;
	}

	function sorting(name: string, level: string, type: string, famille: string, element: string) {
		nameSelect = name;
		levelSelect = level;
		typeSelect = type;
		familleSelect = famille;
		elementSelect = element;
		cards();
		close();
	}

	function close() {
		sorted = false;
	}
</script>

<button
	class="close"
	on:click={() => {
		system.view.reset();
		system.page = "Decks";
	}}
>
	X
</button>

<br />
<br />

{#if system.deck != undefined}
	<div id="head" class="zone">
		<div>
			<input type="text" bind:value={name} />
			{#if name != system.deck.name}
				<button
					on:click={() => {
						if (system.deck != undefined && name != undefined) {
							system.deck.changeName(name, 0);
						}
					}}
				>
					Renommer
				</button>
			{/if}

			<br />

			<button
				on:click={() => {
					if (system.deck != undefined) {
						system.view.reset();
						system.deck.clone();
						system.page = "Decks";
					}
				}}
			>
				Cloner
			</button>
		</div>
		<div style="text-align:right;">
			<button
				class="delete"
				on:click={() => {
					if (system.deck != undefined) {
						system.view.reset();
						system.deck.delete();
						system = system;
						system.page = "Decks";
					}
				}}
			>
				Supprimer
			</button>
		</div>
	</div>

	<div class="zone">
		<div class="taskbar">
			<div>
				{#if system.deck?.cards.length == 0}
					0 Carte
				{:else}
					{cardList.length}
					/
					{several(system.deck.cards.length, "Carte")}
					-
					<button
						on:click={() => {
							sorted = true;
						}}
					>
						Filtrer
					</button>
				{/if}
			</div>

			<div style="text-align: right;">
				{#if system.deck.canModify()}
					<button
						class="check"
						on:click={() => {
							system.view.reset();
							system.page = "Add";
						}}
					>
						Modifier les cartes
					</button>
				{/if}
			</div>
		</div>

		<div id="list" class="scroll">
			{#each cardList as card, i}
				<div class="preview">
					<div>
						<button
							on:click={() => {
								system.view.card = system.cards.getByName(card);
							}}
							on:mouseenter={() => {
								system.view.quick = system.cards.getByName(card);
							}}
							on:mouseleave={() => {
								system.view.quick = undefined;
							}}
						>
							{card}
						</button>
					</div>
					<div style="text-align:right;">
						{#if i > 0}
							<button
								on:click={() => {
									if (system.deck != undefined) {
										let temp = system.deck.cards[i - 1];
										system.deck.cards[i - 1] = card;
										system.deck.cards[i] = temp;
										cards();
									}
								}}
							>
								&#9650
							</button>
						{:else}
							<button class="useless">&#9650</button>
						{/if}
						{#if i < system.deck.cards.length - 1}
							<button
								on:click={() => {
									if (system.deck != undefined) {
										let temp = system.deck.cards[i + 1];
										system.deck.cards[i + 1] = card;
										system.deck.cards[i] = temp;
										cards();
									}
								}}
							>
								&#9660
							</button>
						{:else}
							<button class="useless">&#9660</button>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div id="view">
		<View bind:system />
	</div>
{/if}

{#if sorted}
	<Filter bind:system {nameSelect} {levelSelect} {typeSelect} {familleSelect} {elementSelect} rarity={false} {sorting} {close} />
{/if}

<style>
	#head {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.delete {
		color: red;
	}

	.delete:hover {
		color: gold;
	}

	.zone {
		width: 50vw;
		margin-bottom: 1%;
	}

	div.taskbar {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	#list {
		max-height: 70vh;
	}

	.preview {
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
