<script lang="ts">
	import type { System } from "../System/Class";
	import Dropdown from "../Utils/Dropdown.svelte";

	export let system: System;
	export let nameSelect: string;
	export let levelSelect: string;
	export let typeSelect: string;
	export let familySelect: string;
	export let elementSelect: string;
	export let rarity: boolean = true;
	export let communSelect: boolean = false;
	export let rareSelect: boolean = false;
	export let legendarySelect: boolean = false;
	export let sorting: Function;
	export let sort_close: Function;
</script>

<div class="window">
	<div id="body" class="center">
		<div style="text-align:right">
			<button
				class="square close"
				on:click={() => {
					sort_close();
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
						array={system.sort.levels}
						selected={levelSelect}
						selecting={function (element: string) {
							levelSelect = element;
						}}
					/>
				</div>
			</div>

			<div class="container">
				Type
				<div>
					<Dropdown
						array={system.sort.types}
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
						array={system.sort.families}
						selected={familySelect}
						selecting={function (element: string) {
							familySelect = element;
						}}
					/>
				</div>
			</div>

			<div class="container">
				Élément
				<div>
					<Dropdown
						array={system.sort.elements}
						selected={elementSelect}
						selecting={function (element: string) {
							elementSelect = element;
						}}
					/>
				</div>
			</div>
		</div>

		<br />

		{#if rarity}
			<div class="checkboxes">
				<div>Rareté</div>

				<div>
					<input type="checkbox" bind:checked={communSelect} id="commun" />
					<label for="commun">Commune</label>
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
				if (rarity) {
					sorting(nameSelect, levelSelect, typeSelect, familySelect, elementSelect, communSelect, rareSelect, legendarySelect);
				} else {
					sorting(nameSelect, levelSelect, typeSelect, familySelect, elementSelect);
				}
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
		border-width: 5px;
		text-align: center;
	}

	#options {
		text-align: left;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		padding-bottom: 10px;
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
