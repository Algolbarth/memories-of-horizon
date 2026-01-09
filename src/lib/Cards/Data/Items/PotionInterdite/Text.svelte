<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import CardInfo from "../../../Utils/CardInfo.svelte";

	export let system: System;
	export let card: Card;
</script>

Génère <CardInfo bind:system name={"Homonculus"} /> sur le terrain. Fixe la constitution et la force de cette carte à sa valeur d'infusion.

<br />
<br />

<span class="details">Fixe à {card.stat("Infusion").value()} la constitution et la force de <CardInfo bind:system name={"Homonculus"} /> .</span>
