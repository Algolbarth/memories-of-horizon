<script lang="ts">
	import type { System } from "../System/Class";
	import type { Entity } from "./Entity";
	import Preview from "./Preview.svelte";
	import { Stack } from "./Stack";
	import type { Zone } from "./Zone";

	export let system: System;
	export let zone: Zone;
	export let entity: Entity;
	export let select_condition: Function | undefined;
	export let select_action: Function | undefined;
	export let direction: string = "left";
</script>

{#if system.game}
	<div class={"zone " + direction}>
		<div class="zone_taskbar">
			<div class="infos">
				<div>
					{zone.name}
				</div>

				<div>
					{#if zone.name != "Défausse"}
						({zone.cards.length} / {zone.size})
					{:else}
						{zone.cards.length}
					{/if}
				</div>

				<div>
					{#if zone instanceof Stack}
						Nv {zone.level()}
					{/if}
				</div>
			</div>

			<div style="text-align:right;">
				{#if zone instanceof Stack}
					{#if entity == system.game.player && zone.level() < 20 && select_action == undefined && system.game.phase == "Préparation"}
						{#if entity.canUpStack()}
							<button
								class="active"
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
						{zone.level() * 10} Or -
					{/if}

					{#if entity == system.game.player && select_action == undefined && system.game.phase == "Préparation"}
						{#if entity.canActualiseStack()}
							<button
								class="active"
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

					{#if entity == system.game.player && select_action == undefined && system.game.phase == "Préparation"}
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
				{:else if zone.name == "Région" && entity == system.game.player}
					5 Or pour changer de lieu actif
				{/if}
			</div>
		</div>

		<div id="list">
			{#if zone.cards.length > 0}
				{#each zone.cards as card}
					<Preview bind:system bind:card bind:select_condition bind:select_action />
				{/each}
			{:else}
				Vide
				<br />
			{/if}
		</div>
	</div>
{/if}

<style>
	div.zone {
		margin-bottom: 1%;
	}

	div.left {
		margin-right: 1%;
	}

	div.right {
		margin-left: 1%;
	}

	div.zone_taskbar {
		grid-template-columns: 1fr 2fr;
		text-align: left;
	}

	div.infos {
		display: grid;
		grid-template-columns: 0.75fr 1fr 4em;
	}
</style>
