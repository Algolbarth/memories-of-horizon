<script lang="ts">
	import type { System } from "../System/Class";
	import type { Entity } from "./Entity";
	import Preview from "./Preview.svelte";
	import { Stack } from "./Stack";
	import type { Zone } from "./Zone";

	export let system: System;
	export let zone: Zone;
	export let entity: Entity;
	export let condition: Function | undefined;
	export let fonction: Function | undefined;
	export let direction: string = "left";
</script>

{#if system.game}
	<div class={"zone " + direction}>
		{zone.name}
		{#if zone instanceof Stack}
			Nv {zone.level}
		{/if}
		{#if zone.name != "Défausse"}
			- ({zone.cards.length} / {zone.size})
		{/if}
		{#if zone instanceof Stack}
			{#if entity == system.game.player && fonction == undefined && system.game.phase == "Préparation"}
				-
				{#if entity.canActualiseStack()}
					<button
						class="check"
						on:click={() => {
							entity.actualiseStack();
							system = system;
						}}
					>
						Actualiser
					</button>
				{:else}
					Actualiser
				{/if}
				{10} Or
			{/if}
			{#if entity == system.game.player && zone.level < 20 && fonction == undefined && system.game.phase == "Préparation"}
				-
				{#if entity.canUpStack()}
					<button
						class="check"
						on:click={() => {
							entity.upStack();
							system = system;
						}}
					>
						Améliorer
					</button>
				{:else}
					Améliorer
				{/if}
				{zone.level * 10} Or
			{/if}
			{#if entity == system.game.player && fonction == undefined && system.game.phase == "Préparation"}
				-
				<button
					on:click={() => {
						entity.lock();
						system = system;
					}}
				>
					{#if entity.isFullLocked()}
						Déverrouiller
					{:else}
						Verrouiller
					{/if}
				</button>
			{/if}
		{/if}
		<div id="list">
			{#if zone.cards.length > 0}
				{#each zone.cards as card}
					<Preview bind:system bind:card bind:condition bind:fonction />
				{/each}
			{:else}
				<i>Vide</i>
				<br />
			{/if}
		</div>
	</div>
{/if}

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

	button.check {
		color: darkgreen;
	}

	button.check:hover {
		color: greenyellow;
	}
</style>
