<script lang="ts">
	import type { System } from "../../System/Class";
	import type { Card } from "../Class";

	export let system: System;
	export let card: Card;
	export let text: string;
</script>

{#if system.game != undefined && card.owner && card.canSatiety()}
	<span style={"color:var(--satiety_effect)"}>Satieté : {text}</span>
{:else}
	Satieté : {text}
{/if}
