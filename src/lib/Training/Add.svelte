<script lang="ts">
	import { Card, Unit } from "../Cards/Class";
	import View from "../Cards/View/Main.svelte";
	import Filter from "../Filter/View.svelte";
	import type { System } from "../System/Class";
	import { several } from "../Utils";

	export let system: System;

	function closing() {
		filterWindow = false;
		system.view.reset();
		system.train.add.reset();
		system = system;
	}

	let filterWindow = false;

	let nameSelect = "";
	let levelSelect = "Tous";
	let typeSelect = "Tous";
	let familleSelect = "Toutes";
	let elementSelect = "Tous";
	let communSelect = true;
	let rareSelect = false;
	let legendarySelect = false;

	let cardList: Card[] = [];

	$: zone = system.train.add.zone;

	function filter() {
		let tab = [];
		for (const card of system.cards.instance) {
			let name = card.name.toLowerCase();

			if ((nameSelect == "" || name.includes(nameSelect.toLowerCase())) && (!card.trait("Légendaire").value() || system.train.add.entity == "bot") && (levelSelect == "Tous" || card.level == parseInt(levelSelect)) && (typeSelect == "Tous" || card.type == typeSelect) && (card.type == "Lieu" || (zone != undefined && zone.name != "Région")) && (card instanceof Unit || (zone != undefined && zone.name != "Terrain")) && (familleSelect == "Toutes" || card.familles.total().includes(familleSelect)) && (elementSelect == "Tous" || card.elements.total().includes(elementSelect)) && ((legendarySelect && card.trait("Légendaire").value()) || (rareSelect && card.trait("Rare").value()) || (communSelect && !card.trait("Légendaire").value() && !card.trait("Rare").value()))) {
				tab.push(card);
			}
		}
		cardList = tab;

		return "";
	}

	function sorting(name: string, level: string, type: string, famille: string, element: string, commun: boolean, rare: boolean, legendary: boolean) {
		nameSelect = name;
		levelSelect = level;
		typeSelect = type;
		familleSelect = famille;
		elementSelect = element;
		communSelect = commun;
		rareSelect = rare;
		legendarySelect = legendary;
		filter();
		close();
	}

	function close() {
		filterWindow = false;
	}
</script>

{#if zone != undefined}
	{filter()}
	<div class="window">
		<div class="body">
			<button
				class="close"
				on:click={() => {
					closing();
				}}
			>
				X
			</button>

			<br />
			<br />

			<div id="side">
				{zone.name}
				-
				{#if zone.name != "Défausse"}
					({zone.cards.length} / {zone.size}) -
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
								{#if zone.size != undefined && zone.size > zone.cards.length}
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
{/if}

{#if filterWindow}
	<Filter bind:system {nameSelect} {levelSelect} {typeSelect} {familleSelect} {elementSelect} {communSelect} {rareSelect} {legendarySelect} {sorting} {close} />
{/if}

<style>
	#side {
		background-color: var(--zone);
		border: solid;
		padding: 1%;
		width: 50vw;
	}

	#list {
		max-height: 80vh;
	}

	.preview {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	#view {
		position: fixed;
		top: 0%;
		left: 54vw;
	}
</style>
