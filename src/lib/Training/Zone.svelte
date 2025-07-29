<script lang="ts">
	import type { System } from "../System/Class";
	import type { Train_Zone } from "./Train";

	export let system: System;
	export let zone: Train_Zone;
	export let entity: string;

	let level:number = zone.level!;
	let size:number = zone.size!;
</script>

<div class="zone">
	{zone.name}
	{#if zone.name == "Boutique"}
		Nv
		<input
			type="number"
			min="1"
			max="20"
			bind:value={level}
			on:change={() => {
				if (level < 1) {
					level = 1;
				} else if (level > 20) {
					level = 20;
				} else {
					zone.level = level;
				}
			}}
		/>
	{/if}
	-
	{#if zone.name != "Défausse"}
		({zone.cards.length} /
		<input
			type="number"
			min="1"
			max="999"
			bind:value={size}
			on:change={() => {
				if (size < 1) {
					size = 1;
				} else {
					zone.size = size;
				}
			}}
		/>
		) -
	{/if}
	<button
		on:click={() => {
			system.view.reset();
			system.train.add.entity = entity;
			system.train.add.zone = zone;
		}}
	>
		Ajouter une carte
	</button>

	{#each zone.cards as card, i}
		<div class="preview">
			{#if entity == "player"}
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
					{#if zone.name != "Lieux" || zone.cards.length > 1}
						<button
							class="remove"
							on:click={() => {
								zone.cards.splice(i, 1);
								system = system;
							}}
						>
							Enlever
						</button>
					{/if}
				</div>
			{:else}
				<div>
					{#if zone.name != "Lieux" || zone.cards.length > 1}
						<button
							class="remove"
							on:click={() => {
								zone.cards.splice(i, 1);
								system = system;
							}}
						>
							Enlever
						</button>
					{/if}
				</div>
				<div style="text-align:right;">
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
			{/if}
		</div>
	{/each}
</div>

<style>
	.zone {
		background-color: var(--zone);
		border: solid;
		margin: 1%;
		padding: 1%;
	}

	.preview {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.remove {
		color: var(--close_hover);
	}

	.remove:hover {
		color: var(--close);
	}
</style>
