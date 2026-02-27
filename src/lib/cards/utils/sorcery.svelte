<script lang="ts">
	import type { System } from "../../system/class";
	import type { Card } from "../class";

	export let system: System;
	export let card: Card;
	export let text: string;
	export let cost: number;
</script>

{#if system.game != undefined && card.owner().ressource("Mana").total() >= cost}
	<span style={"color:var(--sorcery_effect)"}>Sorcellerie {cost} : {text}</span>
{:else}
	Sorcellerie {cost} : {text}
{/if}
