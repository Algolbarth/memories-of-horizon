<script lang="ts">
	import CardInfo from "../../../utils/card-info.svelte";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Sorcery from "../../../utils/sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Au choix :
<ul>
	<li>
		Génère un <CardInfo bind:system name={"Élémentaire de roche"} /> sur le terrain.
	</li>
	<li>
		Créé un <CardInfo bind:system name={"Mur de roche"} /> sur le terrain.
	</li>
</ul>

<Sorcery bind:system bind:card cost={50} text={"génère les deux sur le terrain à la place."} />
