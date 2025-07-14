<script>
	import DoubleZone from "./DoubleZone.svelte";
	import Entity from "./Entity.svelte";
	import View from "../Cards/View/Main.svelte";
	import Use from "./Use.svelte";
	import Flux from "./Flux.svelte";
	import Pause from "./Pause.svelte";
	import { onDestroy, onMount } from "svelte";

	export let system;

	let auto;

	function refresh() {
		system = system;
	}

	onMount(() => {
		auto = setInterval(refresh, 100);
	});

	onDestroy(() => {
		clearInterval(auto);
		auto = null;
	});
</script>

<div id="taskbar">
	<div>
		{#if system.game.mode != "Entraînement"}
			Chapitre {system.game.chapter.number}
			- Étape {system.game.player.step} / {system.game.chapter.steps
				.length}
			-
		{/if}
		{#if !system.game.isBattle()}
			<button
				on:click={() => {
					system.view.reset();
					system.game.newBattle();
					system = system;
				}}
			>
				Combattre
			</button>
			{#if system.game.mode == "Entraînement"}
				-
				<button
					on:click={() => {
						system.view.reset();
						system.game.bot.play();
						system = system;
					}}
				>
					Tour de l'ordi
				</button>
			{/if}
		{:else if !system.game.isEndBattle()}
			Tour de combat {system.game.turn}
			-
			{#if system.game.auto != null}
				<button
					on:click={() => {
						system.game.stopAuto();
					}}
				>
					Désactiver mode auto
				</button>
			{:else}
				<button
					on:click={() => {
						system.game.startAuto();
					}}
				>
					Activer mode auto
				</button>
				-
				<button
					on:click={() => {
						system.view.reset();
						system.game.actionBattle();
					}}
				>
					Prochaine action
				</button>
			{/if}
		{:else}
			Combat fini -
			<button
				on:click={() => {
					system.view.reset();
					system.game.actionBattle();
					system = system;
				}}
			>
				Résultats
			</button>
		{/if}
	</div>
	<div style="text-align:right">
		<button
			on:click={() => {
				system.game.pause = true;
				system.page = "Game";
			}}
		>
			Pause
		</button>
	</div>
</div>

<br />

<div id="container" class="scroll">
	<div class="zone">
		<div>
			<Entity bind:system bind:entity={system.game.player} />
		</div>
		<div style="text-align:right;">
			<Entity bind:system bind:entity={system.game.bot} />
		</div>
	</div>

	{#if !system.game.isBattle()}
		<DoubleZone bind:system zone={"Lieux"} />
		<DoubleZone bind:system zone={"Boutique"} />
		<DoubleZone bind:system zone={"Main"} />
	{/if}

	<DoubleZone bind:system zone={"Terrain"} />

	{#if !system.game.isBattle()}
		<DoubleZone bind:system zone={"Défausse"} />
	{/if}
</div>

<Use bind:system />

<Flux bind:system />

<div class="center">
	<View bind:system />
</div>

<Pause bind:system />

<style>
	#taskbar {
		height: 2vh;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	#container {
		height: 94vh;
	}

	.zone {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
</style>
