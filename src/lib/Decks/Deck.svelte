<script>
	import Filter from "../Filter/View.svelte";
	import { several } from "../Utils";
	import View from "../Cards/View/Main.svelte";

	export let system;

	let name = system.deck.name;
	let sorted = false;
	let move;
	if (system.deck.canModify()) {
		move = false;
	} else {
		move = true;
	}

	let nameSelect = "";
	let levelSelect = "Tous";
	let typeSelect = "Tous";
	let familleSelect = "Toutes";
	let elementSelect = "Tous";

	let cardList = [];
	cards();

	function cards() {
		let tab = [];
		for (const cardName of system.deck.cards) {
			let card = system.cards.getByName(cardName);
			let name = card.name.toLowerCase();
			
			if (
				(nameSelect == "" || name.includes(nameSelect.toLowerCase())) &&
				(levelSelect == "Tous" || card.level == levelSelect) &&
				(typeSelect == "Tous" || card.type == typeSelect) &&
				(familleSelect == "Toutes" ||
					card.familles.total().includes(familleSelect)) &&
				(elementSelect == "Tous" ||
					card.elements.total().includes(elementSelect))
			) {
				tab.push(cardName);
			}
		}
		cardList = tab;
	}

	function sorting(name, level, type, famille, element) {
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

<div id="head" class="zone">
	<div>
		<input type="text" bind:value={name} />
		{#if name != system.deck.name}
			<button
				on:click={() => {
					system.deck.changeName(name, 0);
				}}
			>
				Renommer
			</button>
		{/if}

		<br />

		<button
			on:click={() => {
				system.view.reset();
				system.deck.clone();
				system.page = "Decks";
			}}
		>
			Cloner
		</button>
	</div>
	<div style="text-align:right;">
		<button
			class="classic delete"
			on:click={() => {
				system.view.reset();
				system.deck.delete();
				system = system;
				system.page = "Decks";
			}}
		>
			Supprimer
		</button>
	</div>
</div>
<div class="zone">
	{cardList.length}
	/
	{several(system.deck.cards.length, "carte")}
	-
	<button
		on:click={() => {
			sorted = true;
		}}
	>
		Filtrer
	</button>
	{#if system.deck.canModify()}
		-
		<button
			on:click={() => {
				system.view.reset();
				system.page = "Add";
			}}
		>
			Modifier les cartes
		</button>
	{/if}
	<div id="list">
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
								let temp = system.deck.cards[i - 1];
								system.deck.cards[i - 1] = card;
								system.deck.cards[i] = temp;
								cards();
							}}
						>
							&#9650
						</button>
					{:else}
						<button class="classic useless">&#9650</button>
					{/if}
					{#if i < system.deck.cards.length - 1}
						<button
							on:click={() => {
								let temp = system.deck.cards[i + 1];
								system.deck.cards[i + 1] = card;
								system.deck.cards[i] = temp;
								cards();
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

{#if sorted}
	<Filter
		bind:system
		{nameSelect}
		{levelSelect}
		{typeSelect}
		{familleSelect}
		{elementSelect}
		rarity={false}
		{sorting}
		{close}
	/>
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
		background-color: var(--zone);
		border: solid;
		margin: 1%;
		padding: 1%;
		width: 50vw;
	}

	#list {
		max-height: 85vh;
		overflow-y: scroll;
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
</style>
