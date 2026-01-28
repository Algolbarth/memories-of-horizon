<script lang="ts">
	import Filter from "../Filter/View.svelte";
	import { several } from "../Utils";
	import View from "../Cards/View/Main.svelte";
	import type { System } from "../System/Class";
	import type { Deck } from "./Class";
	import { StandardDeck } from "./Standard";

	export let system: System;
	export let deck: Deck;

	let name: string = deck.name;
	let sorted: boolean = false;

	let nameSelect: string = "";
	let levelSelect: string = "Tous";
	let typeSelect: string = "Tous";
	let familySelect: string = "Toutes";
	let elementSelect: string = "Tous";

	let cardList: string[] = [];
	cards();

	function cards() {
		let tab: string[] = [];

		for (const cardName of deck.cards) {
			let card = system.cards.getByName(cardName);
			let name = card.name.toLowerCase();

			if ((nameSelect == "" || name.includes(nameSelect.toLowerCase())) && (levelSelect == "Tous" || card.level == parseInt(levelSelect)) && (typeSelect == "Tous" || card.type == typeSelect) && (familySelect == "Toutes" || card.isFamily(familySelect)) && (elementSelect == "Tous" || card.elements.total().includes(elementSelect))) {
				tab.push(cardName);
			}
		}

		cardList = tab;
	}

	function sorting(name: string, level: string, type: string, family: string, element: string) {
		nameSelect = name;
		levelSelect = level;
		typeSelect = type;
		familySelect = family;
		elementSelect = element;
		cards();
		sort_close();
	}

	function sort_close() {
		sorted = false;
	}

	function close() {
		if (deck instanceof StandardDeck) {
			system.page = "StandardDecks";
		} else {
			system.page = "WildDecks";
		}
	}
</script>

<div class="taskbar">
	<div>
		<button
			class="square close"
			on:click={() => {
				system.view.reset();
				system.page = "Menu";
			}}
		>
			X
		</button>

		<button
			class="square return"
			on:click={() => {
				system.view.reset();
				close();
			}}
		>
			↩
		</button>
	</div>

	<div>
		{#if deck instanceof StandardDeck}
			<button class="taskbar">Deck Standard</button>
		{:else}
			<button class="taskbar">Deck Libre</button>
		{/if}
	</div>
</div>

<div id="head" class="zone side">
	<div>
		{#if deck instanceof StandardDeck}
			{deck.name}
		{:else}
			<input type="text" bind:value={name} />
			{#if name != deck.name}
				<button
					on:click={() => {
						if (deck != undefined && name != undefined) {
							deck.changeName(name, 0);
						}
					}}
				>
					Renommer
				</button>
			{/if}
		{/if}

		<br />

		<button
			on:click={() => {
				if (deck != undefined) {
					system.view.reset();
					system.deck = deck.clone();
					name = system.deck.name;
				}
			}}
		>
			Cloner
		</button>
	</div>

	<div style="text-align:right;">
		{#if !(deck instanceof StandardDeck)}
			<button
				class="delete"
				on:click={() => {
					if (deck != undefined) {
						system.view.reset();
						deck.delete();
						system.page = "WildDecks";
					}
				}}
			>
				Supprimer
			</button>
		{/if}
	</div>
</div>

<div class="zone side">
	<div class="zone_taskbar">
		<div>
			{#if deck?.cards.length == 0}
				0 Carte
			{:else}
				{cardList.length}
				/
				{several(deck.cards.length, ["Carte"])}
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
			{#if deck.canModify()}
				<button
					class="active"
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
					{#if !(deck instanceof StandardDeck)}
						{#if i > 0}
							<button
								class="active"
								on:click={() => {
									if (deck != undefined) {
										let temp = deck.cards[i - 1];
										deck.cards[i - 1] = card;
										deck.cards[i] = temp;
										cards();
									}
								}}
							>
								&#9650
							</button>
						{:else}
							<button class="desactivate">&#9650</button>
						{/if}

						{#if i < deck.cards.length - 1}
							<button
								class="active"
								on:click={() => {
									if (deck != undefined) {
										let temp = deck.cards[i + 1];
										deck.cards[i + 1] = card;
										deck.cards[i] = temp;
										cards();
									}
								}}
							>
								&#9660
							</button>
						{:else}
							<button class="desactivate">&#9660</button>
						{/if}
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<div id="view">
	<View bind:system />
</div>

{#if sorted}
	<Filter bind:system {nameSelect} {levelSelect} {typeSelect} {familySelect} {elementSelect} rarity={false} {sorting} {sort_close} />
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
		margin-bottom: 1vw;
	}

	#list {
		max-height: 70vh;
	}

	.preview {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	button.desactivate {
		background: transparent;
		color: var(--desactivate);
	}

	#view {
		position: fixed;
		top: 0;
		left: 54vw;
	}
</style>
