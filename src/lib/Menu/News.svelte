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

<div class="zone">
	Fonctionnalités à venir :
	<ul>
		<li>
			Ajouts de 2 objets Végétal : <span class="card">Herbes médicinales</span> et <span class="card">Herbes curatives</span>.
			L'objectif est de donner plus d'outils de résilience (soin et gestion de malus) à l'élément Végétal qui a toujours du mal à rester en vie malgré de grosses stats de vie.
		</li>
		<li>
			Ajouts de 4 cartes Terre : <span class="card">Éboulement</span>, <span class="card">Élémentaire des éboulis</span>, <span class="card">Pluie de caillou</span> et <span class="card">Tremblement de terre</span>.
			La mécanique d'étourdissement n'a pas eu le droit à beaucoup de carte lors de sa sortie, l'élément Terre obtient donc deux outils de contrôle de foule.
			Toujours dans l'optique de gérer le terrain adverse les decks Terre pourront plus facilement infliger des dégâts de zone.
		</li>
	</ul>
</div>

<style>
	span.card {
		color: green;
	}
</style>