<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import DruidText from "../../../utils/druid-text.svelte";

	export let system: System;
	export let card: Card;
</script>

<DruidText bind:system bind:card />

{#if card.name == "Druide des plaines (forme humain)"}
	Quand se prépare sur le terrain : pioche 2 cartes.
{/if}
