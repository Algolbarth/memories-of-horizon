<script lang="ts">
	import type { Card } from "../Cards/Class";
	import type { System } from "../System/Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
	export let condition: Function | undefined;
	export let fonction: Function | undefined;

	$: isPlayer = card.owner == system.game?.player ? true : false;
</script>

{#if system.game && card.zone}
	<div class={(isPlayer || fonction != undefined ? "container " : "") + (card == system.game.fighter ? "attacker " : "") + "preview"}>
		<div id={isPlayer || fonction != undefined ? "infos" : ""}>
			{#if card.locked}
				<img src="./src/assets/Pictures/lock.svg" alt="locked" class="locked" />
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
								class="check"
								on:click={() => {
									card.buy();
									system = system;
								}}
							>
								Acheter
							</button>
						{:else}
							Acheter
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
						{#if card == card.owner?.place}
							<span style="color:darkgreen">Actif</span>
						{:else}
							<button
								on:click={() => {
									if (card.owner) {
										card.owner.place = card;
									}
								}}
							>
								Changer
							</button>
						{/if}
					{/if}
					{#if card.zone.name == "Main" || (card.zone.name == "Terrain" && card.type == "Créature")}
						{#if card.slot && card.slot > 0}
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
						{#if card.slot && card.slot < card.zone.cards.length - 1}
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
				{#if fonction != undefined && condition != undefined}
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
{/if}

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

	img.locked {
		width: 1em;
		transform: translate(0, 10%);
	}

	button.check {
		color: darkgreen;
	}

	button.check:hover {
		color: greenyellow;
	}
</style>
