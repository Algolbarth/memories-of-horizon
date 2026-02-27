<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import DruidText from "../../../utils/druid-text.svelte";

	export let system: System;
	export let card: Card;
</script>

<DruidText bind:system bind:card />

{#if card.name == "Druide des bois (forme elfe)"}
	Quand une action alliée est posée : augmente de 6 sa constitution.
{/if}
