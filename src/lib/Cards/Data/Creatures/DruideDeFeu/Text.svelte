<script lang="ts">
	import CardInfo from "../../../Utils/Info.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	export let card: Card;
</script>

Quand posé, au choix :
<ul>
	<li>
		Se transforme en <CardInfo bind:system name={"Druide de feu (forme gobelin)"} />.
	</li>
	<li>
		Se transforme en <CardInfo bind:system name={"Druide de feu (forme lézard)"} />.
	</li>
</ul>

{#if card.name == "Druide de feu (forme gobelin)"}
	Au début de la phase de préparation : augmente son attaque de 10.
{/if}
