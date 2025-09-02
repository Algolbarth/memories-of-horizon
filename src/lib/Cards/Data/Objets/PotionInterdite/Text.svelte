<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
    import CardInfo from "../../../Utils/CardInfo.svelte";

	export let system: System;
	export let card: Card;
</script>

Crée <CardInfo bind:system name={"Homonculus"} /> sur le terrain. Fixe l'attaque et la vie de cette carte à sa valeur d'infusion.

<br />
<br />

<i>Fixe à {card.stat("Infusion").value()} l'attaque et la vie de <CardInfo bind:system name={"Homonculus"} /> .</i>
