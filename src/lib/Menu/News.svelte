<script lang="ts">
	import type { System } from "../System/Class";

	export let system: System;
</script>

<button
	class="close"
	on:click={() => {
		system.page = "Menu";
	}}
>
	X
</button>

<br />
<br />

<div class="scroll">
	<div class="zone">
		<div class="paper title">DERNIÈRES NOUVEAUTÉS</div>

		<div class="paper">
			Les potions ont une stat d'infusion encore inexploitée, alors des cartes Neutre vont permettre de fusionner et augmenter cette stat.
			<ul>
				<li>
					<span class="card">Concoction</span> est un objet potion regroupant plusieurs effets de potions différentes.
				</li>
				<li>
					<span class="card">Mélange</span> est une action permettant de créer une <span class="card">Concoction</span> à partir de 2 potions dans la réserve.
				</li>
				<li>
					<span class="card">Chaudron</span> est un bâtiment créant
					<span class="card">Mélange</span> dans la réserve à chaque tour.
				</li>
				<li>
					<span class="card">Alambic</span> est un bâtiment augmentant l'infusion des potions en réserve à chaque étape.
				</li>
				<li>
					<span class="card">Fiole de verre</span> est un objet augmentant l'infusion d'une potion en réserve.
				</li>
			</ul>
		</div>

		<div class="paper">
			Dans l'optique de gérer le terrain adverse, l'élément Terre pourra plus facilement infliger des dégâts de zone.
			<ul>
				<li>
					<span class="card">Pluie de caillou</span> est une action infligeant des dégâts à toutes les unités adverses ou remplissant le terrain d'<span class="card">Élémentaire de caillou</span>.
				</li>
				<li>
					<span class="card">Tremblement de terre</span> est une action infligeant des dégâts à toutes les unités, alliées comme adverses.
				</li>
			</ul>
		</div>

		<div class="paper">
			L'objectif est de donner plus d'outils de résilience à l'élément Végétal qui a toujours du mal à rester sur le terrain.
			<ul>
				<li>
					<span class="card">Herbes médicinales</span> est un objet soignant 50 blessures à une créature.
				</li>
			</ul>
		</div>

		<div class="paper">
			Ajouter des cartes Neutre pour enlever des debuffs facilement.
			<ul>
				<li>
					<span class="card">Remède</span> est un objet enlevant un debuff à une créature.
				</li>
				<li>
					<span class="card">Panacée</span> est un objet enlevant tous les debuffs d'une créature.
				</li>
			</ul>
		</div>

		<div class="paper">
			Ajouts de 4 cartes neutres : <span class="card">Homme d'affaires</span>, <span class="card">Marché</span>,
			<span class="card">Commissaire priseur</span>
			et <span class="card">Négociant</span>.
		</div>

		<div class="paper">
			Buff de <span class="card">Chef barbare</span> : 110 coût en or -> 150 coût en or, 10 force -> 50 force, 10 constitution -> 50 constitution.
		</div>
	</div>

	<div class="zone">
		<div class="paper title">NOUVEAUTÉS À VENIR</div>

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
