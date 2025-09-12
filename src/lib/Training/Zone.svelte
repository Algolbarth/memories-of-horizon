<script lang="ts">
	import type { System } from "../System/Class";
	import type { TrainZone } from "./Train";

	export let system: System;
	export let zone: TrainZone;
	export let entity: string;

	let level: number = zone.level!;
	let size: number = zone.size!;
</script>

<div class={"zone " + (entity == "player" ? "left" : "right")}>
	<div class="taskbar">
		<div class="infos">
			<div>
				{zone.name}
			</div>
			<div>
				{#if zone.name == "Pile"}
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
			</div>
			<div>
				{#if zone.name != "Défausse"}
					(
					{zone.cards.length} /
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
					)
				{/if}
			</div>
		</div>
		<div style="text-align:right;">
			{#if zone.size == undefined || zone.cards.length < zone.size}
				<button
					class="check"
					on:click={() => {
						system.view.reset();
						system.train.add.entity = entity;
						system.train.add.zone = zone;
					}}
				>
					Ajouter une carte
				</button>
			{/if}
		</div>
	</div>

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
					{#if zone.name != "Région" || zone.cards.length > 1}
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
					{#if zone.name != "Région" || zone.cards.length > 1}
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
		margin-bottom: 1%;
	}

	.left {
		margin-right: 1%;
	}

	.right {
		margin-left: 1%;
	}

	div.taskbar {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	div.infos {
		display: grid;
		grid-template-columns: 0.75fr 4em 1fr;
	}

	div.preview {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.remove {
		color: var(--close_hover);
	}

	.remove:hover {
		color: var(--close);
	}

	button.check {
		color: darkgreen;
	}

	button.check:hover {
		color: greenyellow;
	}
</style>
