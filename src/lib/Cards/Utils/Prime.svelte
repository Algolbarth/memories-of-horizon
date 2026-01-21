<script lang="ts">
	import type { System } from "../../System/Class";
	import type { Card } from "../Class";

	export let system: System;
	export let card: Card;
	export let text: string;
	export let cost: number;
</script>

{#if system.game != undefined && card.owner && card.owner.ressource("Or").total() >= cost}
	<span style="color:var(--prime_effect);">Prime {cost} : {text}</span>
{:else}
	Prime {cost} : {text}
{/if}
