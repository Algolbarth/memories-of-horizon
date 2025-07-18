<script>
	export let system;
	export let entity;
</script>

<div id="player-info">
	Vie : {entity.life.current} / {entity.life.max}

	<br />

	{#each entity.ressources as ressource}
		{#if ressource.current > 0 || ressource.max > 0 || ressource.stock > 0}
			<div
				class="preview"
				style={"background:" +
					system.ressources.find(ressource.name).color +
					";color:" +
					(system.ressources.find(ressource.name).light_font
						? "rgba(255, 255, 255, 1)"
						: "rgba(0, 0, 0, 1)")}
			>
				{ressource.name} : {ressource.current}
				{#if ressource.max > 0}
					/ {ressource.max}
				{/if}
				{#if ressource.stock > 0}
					+ {ressource.stock}
				{/if}
			</div>
		{/if}
	{/each}

	{#if entity.ressource("Flux").stock > 0 && system.game.phase == "Préparation"}
		<button
			on:click={() => {
				system.game.flux = true;
			}}
		>
			Convertir le flux
		</button>
	{/if}

	{#if system.settings.show_intelligence}
		Intelligence : {entity.totalIntelligence()}
	{/if}
</div>

<style>
	#player-info {
		background-color: var(--zone);
		border: solid;
		margin: 1%;
		padding: 1%;
	}

	div.preview {
		border-color: black;
	}
</style>
