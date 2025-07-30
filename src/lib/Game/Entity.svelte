<script lang="ts">
	import type { System } from "../System/Class";
	import { several } from "../Utils";
	import type { Entity } from "./Entity";

	export let system: System;
	export let entity: Entity;
	export let direction: string;
</script>

{#if system.game}
	<div class={"zone " + direction}>
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
					<div>
						{ressource.name}
					</div>
					<div style="text-align:right;margin-right:0.5em">
						{#if ressource.current > 0 || ressource.max > 0}
							{ressource.current}
						{/if}
					</div>
					<div>
						{#if ressource.max > 0}
							/ {ressource.max}
						{/if}
					</div>
					<div>
						{#if ressource.stock > 0}
							{#if ressource.current > 0 || ressource.max > 0}+
							{/if}{several(ressource.stock, "stocké")}
						{/if}
					</div>
					<div>
						{#if ressource.stock > 0 && ressource.current > 0}
							= {ressource.current + ressource.stock}
						{/if}
					</div>
					<div style="text-align:right">
						{#if ressource.name == "Flux" && ressource.stock > 0 && system.game.phase == "Préparation"}
							<button
								on:click={() => {
									system.game.flux = true;
								}}
							>
								Convertir
							</button>
						{/if}
					</div>
				</div>
			{/if}
		{/each}

		{#if system.settings.show_intelligence}
			Intelligence : {entity.totalIntelligence()}
		{/if}
	</div>
{/if}

<style>
	.zone {
		margin-bottom: 1%;
		text-align: left;
	}

	.left {
		margin-right: 1%;
	}

	.right {
		margin-left: 1%;
	}

	div.preview {
		border-color: black;
		display: grid;
		grid-template-columns: 1fr 3em 4em 8em 3em 2fr;
	}
</style>
