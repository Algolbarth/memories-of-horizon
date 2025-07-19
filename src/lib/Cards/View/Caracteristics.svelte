<script>
	export let system;
	export let card;

	function cout(c) {
		let tab = [];
		for (const cost of c.cout) {
			if (cost.value() > 0) {
				tab.push(cost);
			}
		}
		return tab;
	}

	function vente(c) {
		let tab = [];
		for (const sell of c.vente) {
			if (sell.value() > 0) {
				tab.push(sell);
			}
		}
		return tab;
	}
</script>

<div class="box">
	{card.name}
</div>

<div class="container box">
	<div class="cost">
		Nv {card.level}
	</div>
	{#each card.elements.total() as element, i}
		<div
			class="cost"
			style={"background:" +
				system.ressources.find("", element).color +
				";color:" +
				(system.ressources.find("", element).light_font
					? "rgba(255, 255, 255, 1)"
					: "rgba(0, 0, 0, 1)")}
		>
			{element}
		</div>
	{/each}
</div>

{#if cout(card).length > 0 || vente(card).length > 0}
	<div class="box">
		<div class="little-container">
			{#if cout(card).length > 0}
				{#each cout(card) as cost, i}
					<div
						class="cost"
						style={"background:" +
							system.ressources.find(cost.name).color +
							";color:" +
							(system.ressources.find(cost.name).light_font
								? "rgba(255, 255, 255, 1)"
								: "rgba(0, 0, 0, 1)")}
					>
						{cost.value()}
					</div>
				{/each}
			{:else}
				<div>
					<i>Rien</i>
				</div>
			{/if}
		</div>

		<hr />

		<div class="little-container">
			{#if vente(card).length > 0}
				{#each vente(card) as sell, i}
					<div
						class="cost"
						style={"background:" +
							system.ressources.find(sell.name).color +
							";color:" +
							(system.ressources.find(sell.name).light_font
								? "rgba(255, 255, 255, 1)"
								: "rgba(0, 0, 0, 1)")}
					>
						{sell.value()}
					</div>
				{/each}
			{:else}
				<div>
					<i>Rien</i>
				</div>
			{/if}
		</div>
	</div>
{/if}

<div class="box">
	{card.type}
	{#if card.familles.total().length > 0}
		-
		{#each card.familles.total() as famille, i}
			{#if i > 0}&nbsp{/if}{famille}
		{/each}
	{/if}
</div>

<style>
	div.little-container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	div.container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	div.cost {
		display: inline;
		padding: 0.2em;
		margin-right: 0.5em;

		border: solid;
		border-color: black;
		border-width: 2px;
		border-radius: 5px;
	}
</style>
