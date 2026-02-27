<script lang="ts">
	import type { System } from "../system/class";
	import Dropdown from "../utils/dropdown.svelte";

	export let system: System;
	export let filterFunction: Function;
	export let filter_window: boolean;
	export let only_common: boolean = false;

	let nameSelect: string = system.filter.select_name;
	let levelSelect: string = system.filter.select_level;
	let typeSelect: string = system.filter.select_type;
	let familySelect: string = system.filter.select_family;
	let elementSelect: string = system.filter.select_element;
	let commonSelect: boolean = system.filter.select_common;
	let rareSelect: boolean = system.filter.select_rare;
	let legendarySelect: boolean = system.filter.select_legendary;
</script>

<div class="window">
	<div id="body" class="center">
		<div style="text-align:right">
			<button
				class="square close"
				on:click={() => {
					filter_window = false;
				}}
			>
				X
			</button>
		</div>

		<br />

		<div id="options">
			<div class="container">
				Nom
				<div>
					<input type="text" placeholder={'Exemple: "Dragon"'} bind:value={nameSelect} />
				</div>
			</div>

			<div class="container">
				Niveau
				<div>
					<Dropdown
						array={system.filter.levels}
						selected={levelSelect}
						selecting={function (element: string) {
							levelSelect = element;
						}}
					/>
				</div>
			</div>

			<div class="container">
				Élément
				<div>
					<Dropdown
						array={system.filter.elements}
						selected={elementSelect}
						selecting={function (element: string) {
							elementSelect = element;
						}}
					/>
				</div>
			</div>

			<div class="container">
				Type
				<div>
					<Dropdown
						array={system.filter.types}
						selected={typeSelect}
						selecting={function (element: string) {
							typeSelect = element;
						}}
					/>
				</div>
			</div>

			<div class="container">
				Famille
				<div>
					<Dropdown
						array={system.filter.families}
						selected={familySelect}
						selecting={function (element: string) {
							familySelect = element;
						}}
					/>
				</div>
			</div>
		</div>

		<br />

		{#if !only_common}
			<div class="checkboxes">
				<div>Rareté</div>

				<div>
					<input type="checkbox" bind:checked={commonSelect} id="common" />
					<label for="common">Commune</label>
				</div>

				<div>
					<input type="checkbox" bind:checked={rareSelect} id="rare" />
					<label for="rare">Rare</label>
				</div>

				<div>
					<input type="checkbox" bind:checked={legendarySelect} id="legendary" />
					<label for="legendary">Légendaire</label>
				</div>
			</div>
		{/if}

		<br />

		<button
			class="big"
			on:click={() => {
				if (!only_common) {
					system.filter.changeSelection(nameSelect, levelSelect, typeSelect, familySelect, elementSelect, commonSelect, rareSelect, legendarySelect);
				} else {
					system.filter.changeSelection(nameSelect, levelSelect, typeSelect, familySelect, elementSelect, true, false, false);
				}
				filterFunction();
				filter_window = false;
			}}
		>
			Valider
		</button>
	</div>
</div>

<style>
	.window {
		background: var(--shadow);
	}

	#body {
		width: 30vw;
		padding: 1vw;
		background: var(--zone);
		background-image: var(--asfalt);
		border: solid;
		border-width: 0.5vmin;
		text-align: center;
	}

	#options {
		text-align: left;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		padding-bottom: 1vmin;
	}

	.checkboxes {
		text-align: left;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	.big {
		width: 10vw;
	}

	input[type="text"] {
		width: 100%;
	}
</style>
