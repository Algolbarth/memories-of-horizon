<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Au choix :
<ul>
	<li>
		Crée un <CardInfo bind:system name={"Élémentaire de roche"} /> sur le terrain.
	</li>
	<li>
		Créé un <CardInfo bind:system name={"Mur de roche"} /> sur le terrain.
	</li>
</ul>

Sorcellerie 50 : crée les deux sur le terrain à la place.
