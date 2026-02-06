<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import DruidText from "../../../Utils/DruidText.svelte";

	export let system: System;
	export let card: Card;
</script>

<DruidText bind:system bind:card />

{#if card.name == "Druide des récifs (forme ondin)"}
	Au début de la phase de préparation : augmente de 1 la production en eau.
{/if}
