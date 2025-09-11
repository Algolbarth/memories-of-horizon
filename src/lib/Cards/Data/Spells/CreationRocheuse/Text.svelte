<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
    import Sorcery from "../../../Utils/Sorcery.svelte";

	export let system: System;
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

<Sorcery bind:system bind:card cost={50} text={"crée les deux sur le terrain à la place."} />
