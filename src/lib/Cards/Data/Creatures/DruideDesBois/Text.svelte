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
		Se transforme en <CardInfo bind:system name={"Druide des bois (forme elfe)"} />.
	</li>
	<li>
		Se transforme en <CardInfo bind:system name={"Druide des bois (forme renard)"} />.
	</li>
</ul>

{#if card.name == "Druide des bois (forme elfe)"}
	Quand une action alliée est jouée : augmente de 6 sa santé.
{/if}
