<script lang="ts">
	import type { System } from "../../System/Class";
	import { Card } from "../Class";
	import { Creature } from "../Class/Creature";
	import { Equipment } from "../Class/Equipment";
	import Caracteristics from "./Caracteristics.svelte";
	import Description from "./Description.svelte";
	import Effet from "./Effet.svelte";
	import Equipments from "./Equipments.svelte";
	import EquipStat from "./EquipStat.svelte";
	import EquipTrait from "./EquipTrait.svelte";
	import Stat from "./Stat.svelte";
	import Trait from "./Trait.svelte";

	export let system: System;

	$: card = system.view.quick == undefined ? system.view.card : system.view.quick;

	function close() {
		system.view.card = undefined;
		system = system;
	}
</script>

{#if card != undefined && card instanceof Card}
	<div id="shadow">
		<div id="body">
			<div id="content">
				<div style="text-align:right;">
					<button
						class="close"
						on:click={() => {
							close();
						}}
					>
						X
					</button>
				</div>
				<div style="max-height: 80vh;" class="scroll">
					<Caracteristics bind:card bind:system />
					{#if card.text != undefined}
						<Effet bind:card bind:system />
					{/if}
					{#if card.hasTrait()}
						<Trait bind:card />
					{/if}
					{#if card.hasStat()}
						<Stat bind:card />
					{/if}
					{#if card instanceof Equipment && card.hasEquipTrait()}
						<EquipTrait bind:card />
					{/if}
					{#if card instanceof Equipment && card.hasEquipStat()}
						<EquipStat bind:card />
					{/if}
					{#if card instanceof Creature}
						<Equipments bind:card bind:system />
					{/if}

					<br />

					<Description bind:card />
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	#shadow {
		width: 40vw;
		height: 90vh;
		margin: 2.5vh;
	}

	#shadow::before {
		content: "";
		position: absolute;
		z-index: -1;
		width: 40vw;
		height: 90vh;
		border: solid;
		border-width: 10px;
		border-radius: 20px;
		box-shadow: 0px 15px 15px rgba(0, 0, 0, 1);
		opacity: 0;
		transition: opacity 1s ease-in-out;
	}

	#shadow:hover::before {
		transition: opacity 0.5s ease-in-out;
		opacity: 1;
	}

	#body {
		position: relative;
		display: inline-block;
		border: solid;
		border-width: 10px;
		border-radius: 20px;
		width: 100%;
		height: 100%;
		background-color: var(--card);
		box-shadow: 0px 5px 5px rgba(0, 0, 0, 1);
		transition: all 0.5s ease-in-out;
	}

	#body:hover {
		transition: all 1s ease-in-out;
		box-shadow: none;
	}

	#content {
		padding: 2%;
		display: grid;
		grid-template-rows: auto 1fr;
	}
</style>
