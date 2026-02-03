<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import CardInfo from "../../../Utils/CardInfo.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé, au choix :
<ul>
	<li>Génère <CardInfo bind:system name={"Coquillage"} /> dans l'inventaire.</li>
	<li>Génère <CardInfo bind:system name={"Conque"} /> dans l'inventaire.</li>
</ul>
