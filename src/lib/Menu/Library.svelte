<script lang="ts">
	import Filter from "../Filter/View.svelte";
	import Dropdown from "../Utils/Dropdown.svelte";
	import View from "../Cards/View/Main.svelte";
	import { several } from "../Utils";
	import type { System } from "../System/Class";
	import type { Card } from "../Cards/Class";

	export let system: System;

	let filterWindow: boolean = false;
	let sortType: string = "Nom";

	let nameSelect: string = "";
	let levelSelect: string = "Tous";
	let typeSelect: string = "Tous";
	let familleSelect: string = "Toutes";
	let elementSelect: string = "Tous";
	let communSelect: boolean = true;
	let rareSelect: boolean = false;
	let legendarySelect: boolean = false;

	let cardList: Card[] = [];
	filter();

	function filter() {
		let tab = [];

		for (const card of system.cards.instance) {
			let name = card.name.toLowerCase();

			if (
				(nameSelect == "" || name.includes(nameSelect.toLowerCase())) &&
				(levelSelect == "Tous" ||
					card.level == parseInt(levelSelect)) &&
				(typeSelect == "Tous" || card.type == typeSelect) &&
				(familleSelect == "Toutes" ||
					card.familles.total().includes(familleSelect)) &&
				(elementSelect == "Tous" ||
					card.elements.total().includes(elementSelect)) &&
				((legendarySelect && card.trait("Légendaire").value()) ||
					(rareSelect && card.trait("Rare").value()) ||
					(communSelect &&
						!card.trait("Légendaire").value() &&
						!card.trait("Rare").value()))
			) {
				tab.push(card);
			}
		}

		tab = sort(tab);

		cardList = tab;
	}

	function sort(tab: Card[]) {
		if (sortType == "Niveau") {
			for (let i = 0; i < tab.length; i++) {
				let j = i;
				while (j > 0 && tab[j].level < tab[j - 1].level) {
					let swap = tab[j];
					tab[j] = tab[j - 1];
					tab[j - 1] = swap;
					j--;
				}
			}
		}
		return tab;
	}

	function sorting(
		name: string,
		level: string,
		type: string,
		famille: string,
		element: string,
		commun: boolean,
		rare: boolean,
		legendary: boolean,
	) {
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

<button
	class="close"
	on:click={() => {
		system.view.reset();
		system.page = "Menu";
	}}
>
	X
</button>

<div id="zone">
	<div style="display:flex;margin-bottom:2%;">
		<div style="transform:translate(0,25%);margin-right:1%;">
			{several(cardList.length, "carte")}
			-
			<button
				on:click={() => {
					filterWindow = true;
				}}
			>
				Filtrer
			</button>
			- Trier par
		</div>
		<Dropdown
			array={["Nom", "Niveau"]}
			selected={sortType}
			selecting={function (element: string) {
				sortType = element;
				filter();
			}}
		/>
	</div>
	<div id="list" class="scroll">
		{#each cardList as card}
			<div class="preview">
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
		{/each}
	</div>
</div>

<div id="view">
	<View bind:system />
</div>

{#if filterWindow}
	<Filter
		bind:system
		{nameSelect}
		{levelSelect}
		{typeSelect}
		{familleSelect}
		{elementSelect}
		{communSelect}
		{rareSelect}
		{legendarySelect}
		{sorting}
		{close}
	/>
{/if}

<style>
	#zone {
		background-color: var(--zone);
		border: solid;
		margin: 1%;
		padding: 1%;
		width: 50vw;
	}

	#list {
		max-height: 80vh;
	}

	#view {
		position: fixed;
		top: 0%;
		left: 54vw;
	}
</style>
