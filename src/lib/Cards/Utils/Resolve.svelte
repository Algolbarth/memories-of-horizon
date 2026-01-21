<script lang="ts">
	import type { System } from "../../System/Class";
	import type { Card } from "../Class";

	export let system: System;
	export let card: Card;
	export let text: string;
	export let cost: number;
</script>

{#if system.game != undefined && card.owner && card.owner.totalIntelligence() >= cost}
	<span style="color:var(--resolve_effect);">Résolution {cost} : {text}</span>
{:else}
	Résolution {cost} : {text}
{/if}
