<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	export let card: Card;
</script>

Quand posé, au choix :
<ul>
	<li>
		Se transforme en <CardInfo bind:system name={"Druide des récifs (forme ondin)"} />.
	</li>
	<li>
		Se transforme en <CardInfo bind:system name={"Druide des récifs (forme tortue)"} />.
	</li>
</ul>

{#if card.name == "Druide des récifs (forme ondin)"}
	Au début de la phase de préparation : augmente de 1 la capacité en eau.
{/if}
