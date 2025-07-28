<script>
	export let system;
	export let card;
	export let condition;
	export let fonction;

	$: isPlayer = card.owner == system.game.player ? true : false;
</script>

<div
	class={(isPlayer || fonction != undefined ? "container " : "") +
		(card == system.game.fighter ? "attacker " : "") +
		"preview"}
>
	<div id={isPlayer || fonction != undefined ? "infos" : ""}>
		{#if card.locked}
			<div id="locked">&#x1F512</div>
		{/if}
		{#if !card.cache}
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
		{:else}
			<button>???</button>
		{/if}
	</div>

	{#if isPlayer || fonction != undefined}
		<div id="actions">
			{#if system.game.phase == "Préparation" && fonction == undefined}
				{#if card.zone.name == "Main" || card.zone.name == "Terrain"}
					<button
						on:click={() => {
							card.sell();
							system = system;
						}}
					>
						Vendre
					</button>
				{/if}
				{#if card.zone.name == "Boutique"}
					{#if card.canBuy()}
						<button
							on:click={() => {
								card.buy();
								system = system;
							}}
						>
							Acheter
						</button>
					{:else}
						<button style="color:darkgrey;">
							Acheter
						</button>
					{/if}
				{:else if card.zone.name == "Main"}
					<button
						on:click={() => {
							card.use();
							system = system;
						}}
					>
						Poser
					</button>
				{:else if card.zone.name == "Lieux"}
					{#if card == card.owner.place}
						Actif
					{:else}
						<button
							on:click={() => {
								card.owner.place = card;
							}}
						>
							Changer
						</button>
					{/if}
				{/if}
				{#if card.zone.name == "Main" || (card.zone.name == "Terrain" && card.type == "Créature")}
					{#if card.slot > 0}
						<button
							on:click={() => {
								card.up();
								system = system;
							}}
						>
							&#9650
						</button>
					{:else}
						<button class="classic useless">&#9650</button>
					{/if}
					{#if card.slot < card.zone.cards.length - 1}
						<button
							on:click={() => {
								card.down();
								system = system;
							}}
						>
							&#9660
						</button>
					{:else}
						<button class="classic useless">&#9660</button>
					{/if}
				{/if}
			{/if}
			{#if fonction != undefined}
				{#if condition(card)}
					<button
						on:click={() => {
							fonction(card);
							system = system;
						}}
					>
						Sélectionner
					</button>
				{/if}
			{/if}
		</div>
	{/if}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.attacker {
		transition: all 0s ease-in-out;
		background-color: var(--attacker);
	}

	.attacker:hover {
		transition: all var(--delay_hover) ease-in-out;
		background-color: var(--attacker_hover);
	}

	.useless {
		color: lightgrey;
	}

	#infos {
		text-align: left;
	}

	#actions {
		text-align: right;
	}

	#locked {
		display: inline-block;
		font-size: small;
	}
</style>
