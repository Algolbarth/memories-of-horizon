<script lang="ts">
	import type { System } from "../../system/class";
	import type { Card } from "../class";

	export let system: System;
	export let card: Card;
	export let text: string;
	export let cost: number;
</script>

{#if system.game != undefined && card.owner().totalIntelligence() >= cost}
	<span style="color:var(--resolve_effect);">Résolution {cost} : {text}</span>
{:else}
	Résolution {cost} : {text}
{/if}
