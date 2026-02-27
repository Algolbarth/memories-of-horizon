<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import DruidText from "../../../utils/druid-text.svelte";

	export let system: System;
	export let card: Card;
</script>

<DruidText bind:system bind:card />

{#if card.name == "Druide marchand (forme humain)"}
	Quand se prépare sur le terrain : augmente de 1 la production en or.
{/if}
