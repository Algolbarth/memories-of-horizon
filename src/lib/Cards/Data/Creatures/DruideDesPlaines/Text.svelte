<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import DruidText from "../../../Utils/DruidText.svelte";

	export let system: System;
	export let card: Card;
</script>

<DruidText bind:system bind:card />

{#if card.name == "Druide des plaines (forme humain)"}
	Au début de la phase de préparation : pioche 2 cartes.
{/if}
