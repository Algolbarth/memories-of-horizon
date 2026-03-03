<script lang="ts">
	import type { System } from "../system/class";

	export let system: System;
</script>

<div class="taskbar">
	<div>
		<button
			class="square close"
			on:click={() => {
				system.page = "Menu";
			}}
		>
			X
		</button>
	</div>
	<div>
		<button class="taskbar">Nouveautés</button>
	</div>
</div>

<div class="scroll">
	<div class="zone">
		<div class="paper title">DERNIÈRES FONCTIONNALITÉS</div>

		<div class="paper">
			Buff de <span class="card">Chef barbare</span> : 110 coût en or -> 150 coût en or, 10 force -> 50 force, 10 constitution -> 50 constitution.
		</div>
	</div>

	<div class="zone">
		<div class="paper title">FONCTIONNALITÉS À VENIR</div>

		<div class="paper">Rien pour le moment</div>
	</div>
</div>

<style>
	div.scroll {
		height: 90vh;
	}

	div.zone {
		margin-bottom: 2em;

		background-color: var(--pannel);
		background-image: var(--wood);
	}

	span.card {
		color: var(--active);
	}

	div.paper {
		background-color: var(--preview);
		background-image: var(--paper);

		border: solid;
		border-color: black;

		padding: 1em;
		margin: 1em;
	}

	div.title {
		margin-left: 34vw;
		width: 25vw;

		text-align: center;
	}
</style>
