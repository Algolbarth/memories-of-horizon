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
	<li>Crée <CardInfo bind:system name={"Coquillage"} /> dans la réserve.</li>
	<li>Crée <CardInfo bind:system name={"Conque"} /> dans la réserve.</li>
</ul>
