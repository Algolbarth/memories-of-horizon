<script>
	import CardInfo from "../../../Utils/Info.svelte";

	export let system;
	export let card;
</script>

Au choix :
<ul>
	<li>
		Crée un <CardInfo bind:system name={"Élémentaire de caillou"} /> sur le terrain.
	</li>
	<li>
		Créé un <CardInfo bind:system name={"Mur de roche"} /> sur le terrain.
	</li>
</ul>

Sorcellerie 50 : crée les deux sur le terrain à la place.
