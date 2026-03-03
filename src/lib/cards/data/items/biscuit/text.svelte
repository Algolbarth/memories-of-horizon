<script lang="ts">
	import CardInfo from "$lib/cards/utils/card-info.svelte";
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Soigne 20 blessures à une créature sur votre terrain.

{#if system.game != undefined && card.canSatiety()}
	<span style={"color:var(--satiety_effect)"}>Satieté : génère un <CardInfo bind:system name={"Bonhomme biscuit"} /> sur votre terrain à la place.</span>
{:else}
	Satieté : génère un <CardInfo bind:system name={"Bonhomme biscuit"} /> sur votre terrain à la place.
{/if}
