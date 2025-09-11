<script lang="ts">
	import type { System } from "../System/Class";
	import type { TrainEntity } from "./Train";

	export let system: System;
	export let entity: TrainEntity;

	let life: number = entity.life;
	let gold: number = entity.gold;
	let flux: number = entity.flux;
	let mana: number = entity.mana;
</script>

<div class={"zone " + (entity == system.train.player ? "left" : "right")}>
	<div class="preview life">
		<div>Santé</div>
		<div>
			<input
				type="number"
				min="1"
				bind:value={life}
				on:change={() => {
					if (life < 1) {
						life = 1;
					} else {
						entity.life = life;
					}
				}}
			/>
		</div>
	</div>
	<div class="preview">
		<div>Or</div>
		<div></div>
		<div>
			<input
				type="number"
				min="0"
				bind:value={gold}
				on:change={() => {
					if (gold < 0) {
						gold = 0;
					} else {
						entity.gold = gold;
					}
				}}
			/>
		</div>
	</div>
	<div class="preview" style={"background:" + system.ressources.find("Flux")?.color + ";color:" + (system.ressources.find("Flux")?.light_font ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)")}>
		<div>Flux</div>
		<div></div>
		<div></div>
		<div>
			<input
				type="number"
				min="0"
				bind:value={flux}
				on:change={() => {
					if (flux < 0) {
						flux = 0;
					} else {
						entity.flux = flux;
					}
				}}
			/>
		</div>
	</div>
	<div class="preview" style={"background:" + system.ressources.find("Mana")?.color + ";color:" + (system.ressources.find("Mana")?.light_font ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)")}>
		<div>Mana</div>
		<div></div>
		<div></div>
		<div>
			<input
				type="number"
				min="0"
				bind:value={mana}
				on:change={() => {
					if (mana < 0) {
						mana = 0;
					} else {
						entity.mana = mana;
					}
				}}
			/>
		</div>
	</div>
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

	div.preview {
		border-color: black;
		display: grid;
		grid-template-columns: 1fr 3em 4em 8em 3em 2fr;
	}

	div.life {
		background: pink;
	}

	input[type="number"] {
		width: 3em;
	}
</style>
