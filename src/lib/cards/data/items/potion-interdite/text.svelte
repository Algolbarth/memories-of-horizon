<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import CardInfo from "$lib/cards/utils/card-info.svelte";

	export let system: System;
	export let card: Card;
</script>

Génère <CardInfo bind:system name={"Homonculus"} /> sur votre terrain. Fixe la constitution et la force de cette carte à sa valeur d'infusion.

<br />
<br />

<span class="details">Fixe à {card.stat("Infusion").value()} la constitution et la force de <CardInfo bind:system name={"Homonculus"} /> .</span>
