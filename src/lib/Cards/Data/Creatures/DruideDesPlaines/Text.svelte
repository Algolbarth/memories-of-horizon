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
		Se transforme en <CardInfo bind:system name={"Druide des plaines (forme humain)"} />.
	</li>
	<li>
		Se transforme en <CardInfo bind:system name={"Druide des plaines (forme loup)"} />.
	</li>
</ul>

{#if card.name == "Druide des plaines (forme humain)"}
	Au début de la phase de préparation : pioche 2 cartes.
{/if}
