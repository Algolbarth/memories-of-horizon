<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
    import CardInfo from "../../../Utils/CardInfo.svelte";

	export let system: System;
	export let card: Card;
</script>

Crée <CardInfo bind:system name={"Homonculus"} /> sur le terrain. Fixe la force et la santé de cette carte à sa valeur d'infusion.

<br />
<br />

<i>Fixe à {card.stat("Infusion").value()} la force et la santé de <CardInfo bind:system name={"Homonculus"} /> .</i>
