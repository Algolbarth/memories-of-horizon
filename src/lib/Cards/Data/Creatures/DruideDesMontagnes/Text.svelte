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
		Se transforme en <CardInfo bind:system name={"Druide des montagnes (forme nain)"} />.
	</li>
	<li>
		Se transforme en <CardInfo bind:system name={"Druide des montagnes (forme ours)"} />.
	</li>
</ul>

{#if card.name == "Druide des montagnes (forme nain)"}
	Au début de la phase de préparation : augmente sa force et sa constitution de 10.
{/if}
