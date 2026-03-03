<script lang="ts">
	import CardInfo from "$lib/cards/utils/card-info.svelte";
	import type { System } from "$lib/system/class";
	import type { Restaurant } from "./class";

	export let system: System;
	export let card: Restaurant;
</script>

Quand posé : choisit un objet de famille Nourriture de niveau 2 ou moins dans votre inventaire.

<br />
<br />

Quand se prépare sur le terrain : génère un objet de même nom que l'objet choisi dans votre inventaire.

{#if card.product != undefined}
	<br />
	<br />

	<span class="details">
		Objet choisi : <CardInfo bind:system name={card.product} />
	</span>
{/if}
