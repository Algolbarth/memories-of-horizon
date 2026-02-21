<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Restaurant } from "./Class";

	export let system: System;
	export let card: Restaurant;
</script>

Quand posé : choisit un objet allié de famille Nourriture de niveau 2 ou moins dans l'inventaire.

<br />
<br />

Quand se prépare sur le terrain : génère un objet de même nom que l'objet choisi.

{#if card.product != undefined}
	<br />
	<br />

	<span class="details">
		Objet choisi : <CardInfo bind:system name={card.product} />
	</span>
{/if}
