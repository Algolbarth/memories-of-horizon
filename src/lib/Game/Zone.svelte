<script lang="ts">
	import type { System } from "../System/Class";
	import type { Entity } from "./Entity";
	import Preview from "./Preview.svelte";
	import { Shop } from "./Shop";
	import type { Zone } from "./Zone";

	export let system: System;
	export let zone: Zone;
	export let entity: Entity;
	export let condition: Function | undefined;
	export let fonction: Function | undefined;
</script>

{#if system.game}
	<div id="body">
		{zone.name}
		{#if zone instanceof Shop}
			Nv {zone.level}
		{/if}
		{#if zone.name != "Défausse"}
			- ({zone.cards.length} / {zone.size})
		{/if}
		{#if zone instanceof Shop}
			{#if entity == system.game.player && fonction == undefined && system.game.phase == "Préparation"}
				-
				<button
					on:click={() => {
						entity.actualiseShop();
						system = system;
					}}
				>
					Actualiser
				</button>
				{10} Or
			{/if}
			{#if entity == system.game.player && zone.level < 20 && fonction == undefined && system.game.phase == "Préparation"}
				-
				<button
					on:click={() => {
						entity.upShop();
						system = system;
					}}
				>
					Améliorer
				</button>
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
					Verrouiller
				</button>
			{/if}
		{/if}
		<div id="list">
			{#if zone.cards.length > 0}
				{#each zone.cards as card}
					<Preview
						bind:system
						bind:card
						bind:condition
						bind:fonction
					/>
				{/each}
			{:else}
				<i>Vide</i>
				<br />
			{/if}
		</div>
	</div>
{/if}

<style>
	#body {
		background-color: var(--zone);
		border: solid;
		margin: 1%;
		padding: 1%;
	}
</style>
