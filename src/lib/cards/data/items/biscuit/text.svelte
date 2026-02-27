<script lang="ts">
	import CardInfo from "../../../utils/card-info.svelte";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Soigne 20 blessures à une créature alliée sur le terrain.

{#if system.game != undefined && card.canSatiety()}
	<span style={"color:var(--satiety_effect)"}>Satieté : génère un <CardInfo bind:system name={"Bonhomme biscuit"} /> sur le terrain à la place.</span>
{:else}
	Satieté : génère un <CardInfo bind:system name={"Bonhomme biscuit"} /> sur le terrain à la place.
{/if}
