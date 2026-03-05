<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import CardInfo from "$lib/cards/utils/card-info.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Soigne 10 blessures à une créature sur votre terrain.

{#if system.game != undefined && card.canSatiety()}
	<span style={"color:var(--satiety_effect)"}>Satieté : génère 2 <CardInfo bind:system name={"Souris"} /> sur votre terrain à la place.</span>
{:else}
	Satieté : génère 2 <CardInfo bind:system name={"Souris"} /> sur votre terrain à la place.
{/if}
