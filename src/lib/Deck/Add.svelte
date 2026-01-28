<script lang="ts">
	import Filter from "../Filter/View.svelte";
	import { several } from "../Utils";
	import View from "../Cards/View/Main.svelte";
	import type { System } from "../System/Class";
	import type { Card } from "../Cards/Class";

	export let system: System;

	let filterWindow: boolean = false;

	let nameSelect: string = "";
	let levelSelect: string = "Tous";
	let typeSelect: string = "Tous";
	let familySelect: string = "Toutes";
	let elementSelect: string = "Tous";

	let cardList: Card[] = [];
	filter();

	function filter() {
		let tab = [];
		for (const card of system.cards.instance) {
			let name = card.name.toLowerCase();

			if ((nameSelect == "" || name.includes(nameSelect.toLowerCase())) && !card.trait("Rare").value() && !card.trait("Légendaire").value() && (levelSelect == "Tous" || card.level == parseInt(levelSelect)) && (typeSelect == "Tous" || card.type == typeSelect) && (familySelect == "Toutes" || card.isFamily(familySelect)) && (elementSelect == "Tous" || card.elements.total().includes(elementSelect))) {
				tab.push(card);
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
		filter();
		sort_close();
	}

	function sort_close() {
		filterWindow = false;
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
				system.page = "Deck";
			}}
		>
			↩
		</button>
	</div>

	<div>
		<button class="taskbar">Decks</button>
	</div>
</div>

{#if system.deck}
	<div class="zone side">
		{several(cardList.length, ["carte"])}
		-
		<button
			on:click={() => {
				filterWindow = true;
			}}
		>
			Filtrer
		</button>

		<div id="list" class="scroll">
			{#each cardList as card}
				<div class={(system.deck.check(card.name) ? "present " : "") + "preview"}>
					<div>
						<button
							class={system.deck.check(card.name) ? "present " : ""}
							on:click={() => {
								system.view.card = card;
							}}
							on:mouseenter={() => {
								system.view.quick = card;
							}}
							on:mouseleave={() => {
								system.view.quick = undefined;
							}}
						>
							{card.name}
						</button>
					</div>

					<div style="text-align:right;">
						{#if !system.deck.check(card.name)}
							<button
								class="active"
								on:click={() => {
									if (system.deck) {
										system.deck.add(card.name);
										system = system;
									}
								}}
							>
								Ajouter
							</button>
						{:else}
							<button
								class="remove"
								on:click={() => {
									if (system.deck) {
										system.deck.remove(card.name);
										system = system;
									}
								}}
							>
								Enlever
							</button>
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

{#if filterWindow}
	<Filter bind:system {nameSelect} {levelSelect} {typeSelect} {familySelect} {elementSelect} rarity={false} {sorting} {sort_close} />
{/if}

<style>
	#list {
		max-height: 80vh;
	}

	.preview {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	div.present {
		background-color: rgb(173, 131, 52);
	}

	div.present:hover {
		background-color: rgb(173, 131, 52);
	}

	button.remove {
		color: var(--close);
	}

	button.remove:hover {
		color: var(--close_hover);
	}

	#view {
		position: fixed;
		top: 0;
		left: 54vw;
	}
</style>
