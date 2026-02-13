<script lang="ts">
	import type { Card } from "../Cards/Class";
	import { Creature } from "../Cards/Class/Creature";
	import { Location } from "../Cards/Class/Location";
	import type { System } from "../System/Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
	export let selectCondition: Function | undefined;
	export let selectAction: Function | undefined;

	$: is_player = card.owner == system.game?.player ? true : false;
</script>

{#if system.game && card.owner && card.zone}
	<div class={(is_player || selectAction != undefined ? "container " : "") + (card == system.game.fighter ? "attacker " : "") + "preview"}>
		<div id={is_player || selectAction != undefined ? "infos" : ""}>
			{#if card.locked}
				<img src="/assets/Pictures/lock.svg" alt="locked" class="locked" />
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

		{#if is_player || selectAction != undefined}
			<div id="actions">
				{#if system.game.phase == "Préparation" && selectAction == undefined}
					{#if card.zone.name == "Inventaire" || card.zone.name == "Terrain"}
						<button
							class="active"
							on:click={() => {
								card.sell();
								system = system;
							}}
						>
							Vendre
						</button>
					{/if}

					{#if card.zone.name == "Pile"}
						{#if card.canBuy()}
							<button
								class="active"
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
					{:else if card.zone.name == "Inventaire"}
						{#if card.canUse()}
							<button
								class="active"
								on:click={() => {
									card.use();
									system = system;
								}}
							>
								Poser
							</button>
						{:else}
							Poser
						{/if}
					{:else if card.zone.name == "Région"}
						{#if card == card.owner.place}
							<span>Actif</span>
						{:else if card.owner.ressource("Or").total() >= 5}
							<button
								class="active"
								on:click={() => {
									if (card.owner && card instanceof Location) {
										card.owner.place = card;
										card.owner.ressource("Or").spend(5);
									}
								}}
							>
								Changer
							</button>
						{:else}
							<button>Changer</button>
						{/if}
					{/if}

					{#if card.zone.name == "Inventaire" || (card.zone.name == "Terrain" && card instanceof Creature)}
						{#if card.slot != undefined && card.slot > 0}
							<button
								class="active"
								on:click={() => {
									card.up();
									system = system;
								}}
							>
								&#9650
							</button>
						{:else}
							<button class="desactivate">&#9650</button>
						{/if}

						{#if card.slot != undefined && card.slot < card.zone.cards.length - 1}
							<button
								class="active"
								on:click={() => {
									card.down();
									system = system;
								}}
							>
								&#9660
							</button>
						{:else}
							<button class="desactivate">&#9660</button>
						{/if}
					{/if}
				{/if}

				{#if selectAction != undefined && selectCondition != undefined}
					{#if selectCondition(card)}
						<button
							class="active"
							on:click={() => {
								selectAction(card);
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

	button.desactivate {
		background: transparent;
		color: var(--desactivate);
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
</style>
