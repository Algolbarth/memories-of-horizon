<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	export let card: Card;
</script>

Quand posé : choisit un objet allié de famille Nourriture dans la réserve.
<br />
<br />
Au début d'une étape de préparation : crée un objet de même nom que l'objet choisi dans la réserve.

{#if card.product != undefined}
	<br />
	<br />

	Objet choisi : <CardInfo bind:system name={card.product} />
{/if}
