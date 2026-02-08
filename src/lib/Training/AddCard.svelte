<script lang="ts">
	import { Card, Unit } from "../Cards/Class";
	import View from "../Cards/View/Main.svelte";
	import Filter from "../Filter/View.svelte";
	import type { System } from "../System/Class";
	import { several } from "../Utils";
	import type { TrainZone } from "./Train";

	export let system: System;
	export let zone: TrainZone;

	function close() {
		filterWindow = false;
		system.view.reset();
		system.train.add.reset();
		system = system;
	}

	let filterWindow = false;

	let nameSelect = "";
	let levelSelect = "Tous";
	let typeSelect = "Tous";
	let familySelect = "Toutes";
	let elementSelect = "Tous";
	let communSelect = true;
	let rareSelect = false;
	let legendarySelect = false;

	let cardList: Card[] = [];

	function filter() {
		let tab = [];
		for (const card of system.cards.instance) {
			let name = card.name.toLowerCase();

			if ((nameSelect == "" || name.includes(nameSelect.toLowerCase())) && (!card.trait("Légendaire").value() || system.train.add.is_bot) && (levelSelect == "Tous" || card.level == parseInt(levelSelect)) && (typeSelect == "Tous" || card.type == typeSelect) && (card.type == "Lieu" || (zone != undefined && zone.name != "Région")) && (card instanceof Unit || (zone != undefined && zone.name != "Terrain")) && (familySelect == "Toutes" || card.isFamily(familySelect)) && (elementSelect == "Tous" || card.isElement(elementSelect)) && ((legendarySelect && card.trait("Légendaire").value()) || (rareSelect && card.trait("Rare").value()) || (communSelect && !card.trait("Légendaire").value() && !card.trait("Rare").value()))) {
				tab.push(card);
			}
		}
		cardList = tab;

		return "";
	}

	function sorting(name: string, level: string, type: string, family: string, element: string, commun: boolean, rare: boolean, legendary: boolean) {
		nameSelect = name;
		levelSelect = level;
		typeSelect = type;
		familySelect = family;
		elementSelect = element;
		communSelect = commun;
		rareSelect = rare;
		legendarySelect = legendary;
		filter();
		sort_close();
	}

	function sort_close() {
		filterWindow = false;
	}
</script>

{filter()}
<div class="window">
	<div class="body">
		<div class="taskbar">
			<div>
				<button
					class="square close"
					on:click={() => {
						system.page = "Menu";
						close();
					}}
				>
					X
				</button>

				<button
					class="square return"
					on:click={() => {
						close();
					}}
				>
					↩
				</button>
			</div>

			<div>
				<button class="taskbar">Ajouter une carte</button>
			</div>
		</div>

		<div class="zone side">
			{zone.name}
			-
			{#if zone.name != "Défausse"}
				({zone.cards.length} / {zone.size}) -
			{:else}
				({zone.cards.length} / ∞) -
			{/if}
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
					<div class="preview">
						<div>
							<button
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
							{#if zone.size == undefined || zone.size > zone.cards.length}
								<button
									on:click={() => {
										zone.cards.push(card.name);
										system = system;
									}}
								>
									Ajouter
								</button>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<div id="view">
	<View bind:system />
</div>

{#if filterWindow}
	<Filter bind:system {nameSelect} {levelSelect} {typeSelect} {familySelect} {elementSelect} {communSelect} {rareSelect} {legendarySelect} {sorting} {sort_close} />
{/if}

<style>
	#list {
		max-height: 80vh;
	}

	.preview {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	#view {
		position: fixed;
		top: 0;
		left: 54vw;
	}
</style>
