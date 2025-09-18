<script lang="ts">
	import DoubleZone from "./DoubleZone.svelte";
	import Entity from "./Entity.svelte";
	import View from "../Cards/View/Main.svelte";
	import Use from "./Use.svelte";
	import Flux from "./Flux.svelte";
	import Pause from "./Pause.svelte";
	import { onDestroy, onMount } from "svelte";
	import type { System } from "../System/Class";

	export let system: System;

	let show_flux: boolean = false;
	let auto: number | undefined;

	function refresh() {
		system = system;
	}

	onMount(() => {
		auto = setInterval(refresh, 100);
	});

	onDestroy(() => {
		clearInterval(auto);
		auto = undefined;
	});
</script>

{#if system.game}
	<div id="taskbar">
		<div>
			{#if system.game.mode != "Entraînement" && system.game.chapter}
				Chapitre {system.game.chapter.number}
				- Étape {system.game.player.step} / {system.game.chapter.steps.length}
			{/if}
			{#if system.game.isBattle() && !system.game.isEndBattle()}
				- Tour de combat {system.game.turn}
			{/if}
		</div>

		<div style="text-align:center;">
			{#if !system.game.isBattle()}
				<button
					class="fight"
					on:click={() => {
						if (system.game) {
							system.view.reset();
							system.game.newBattle();
							system = system;
						}
					}}
				>
					Combattre
				</button>
				{#if system.game.mode == "Entraînement"}
					-
					<button
						class="check"
						on:click={() => {
							if (system.game) {
								system.view.reset();
								system.game.bot.play();
								system = system;
							}
						}}
					>
						Tour de l'ordi
					</button>
				{/if}
			{:else if !system.game.isEndBattle()}
				{#if system.game.auto != null}
					<button
						on:click={() => {
							if (system.game) {
								system.game.stopAuto();
							}
						}}
					>
						Désactiver mode auto
					</button>
				{:else}
					<button
						on:click={() => {
							if (system.game) {
								system.game.startAuto();
							}
						}}
					>
						Activer mode auto
					</button>
					-
					<button
						on:click={() => {
							if (system.game) {
								system.view.reset();
								system.game.actionBattle();
							}
						}}
					>
						Prochaine action
					</button>
				{/if}
			{:else}
				<button
					on:click={() => {
						if (system.game) {
							system.view.reset();
							system.game.actionBattle();
							system = system;
						}
					}}
				>
					Résultats
				</button>
			{/if}
		</div>

		<div style="text-align:right">
			<button
				on:click={() => {
					if (system.game) {
						system.game.pause = true;
						system.page = "Game";
					}
				}}
			>
				Pause
			</button>
		</div>
	</div>

	<div id="container" class="scroll">
		<div class="entities">
			<div>
				<Entity bind:system bind:entity={system.game.player} direction={"left"} bind:show_flux />
			</div>
			<div style="text-align:right;">
				<Entity bind:system bind:entity={system.game.bot} direction={"right"} bind:show_flux />
			</div>
		</div>

		{#if !system.game.isBattle()}
			<DoubleZone bind:system zone={"Région"} />
			<DoubleZone bind:system zone={"Pile"} />
			<DoubleZone bind:system zone={"Réserve"} />
		{/if}

		<DoubleZone bind:system zone={"Terrain"} />

		{#if !system.game.isBattle()}
			<DoubleZone bind:system zone={"Défausse"} />
		{/if}
	</div>

	<Use bind:system />

	{#if show_flux}
		<Flux bind:system bind:show_flux />
	{/if}

	<div class="center">
		<View bind:system />
	</div>

	<Pause bind:system />
{/if}

<style>
	#taskbar {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		background: var(--card);
		padding: 0.5%;
		border: solid;
		margin-bottom: 1%;
	}

	#container {
		height: 90vh;
	}

	.entities {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	button.fight {
		color: darkred;
	}

	button.fight:hover {
		color: red;
	}

	button.check {
		color: darkgreen;
	}

	button.check:hover {
		color: greenyellow;
	}
</style>
