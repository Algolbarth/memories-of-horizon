<script lang="ts">
	import type { System } from "../../System/Class";
	import type { Card } from "../Class";

	export let system: System;
	export let card: Card;
	export let text: string;
	export let cost: number;
</script>

{#if system.game != undefined && card.owner.ressource("Mana").total() >= cost}
	<span style={"color:" + system.ressources.find("Mana")?.color}>Sorcellerie {cost} : {text}</span>
{:else}
	Sorcellerie {cost} : {text}
{/if}
