<script lang="ts">
	import CardInfo from "$lib/cards/utils/card-info.svelte";
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Au début d'un round : génère <CardInfo bind:system name={"Soldat nain"} /> sur votre terrain.
