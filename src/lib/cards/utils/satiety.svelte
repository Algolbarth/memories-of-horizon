<script lang="ts">
	import type { System } from "../../system/class";
	import type { Card } from "../class";

	export let system: System;
	export let card: Card;
	export let text: string;
</script>

{#if system.game != undefined && card.canSatiety()}
	<span style={"color:var(--satiety_effect)"}>Satieté : {text}</span>
{:else}
	Satieté : {text}
{/if}
