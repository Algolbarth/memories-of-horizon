<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import DruidText from "../../../Utils/DruidText.svelte";

	export let system: System;
	export let card: Card;
</script>

<DruidText bind:system bind:card />

{#if card.name == "Druide des montagnes (forme nain)"}
	Quand se prépare sur le terrain : augmente sa constitution et sa force de 10.
{/if}
