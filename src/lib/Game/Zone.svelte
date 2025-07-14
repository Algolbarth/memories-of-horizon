<script>
	import Preview from "./Preview.svelte";

	export let system;
	export let zone;
	export let entity;
	export let condition;
	export let fonction;
</script>

<div id="body">
	{zone.name}
	{#if zone.name == "Boutique"}
		Nv {zone.level}
	{/if}
	{#if zone.name != "Défausse"}
		- ({zone.cards.length} / {zone.size})
	{/if}
	{#if zone.name == "Boutique"}
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
				<Preview bind:system bind:card bind:condition bind:fonction />
			{/each}
		{:else}
			<i>Vide</i>
			<br />
		{/if}
	</div>
</div>

<style>
	#body {
		background-color: var(--zone);
		border: solid;
		margin: 1%;
		padding: 1%;
	}
</style>
