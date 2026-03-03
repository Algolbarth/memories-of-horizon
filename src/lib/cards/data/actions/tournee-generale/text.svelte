<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import CardInfo from "$lib/cards/utils/card-info.svelte";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Génère autant de <CardInfo bind:system name={"Bière"} /> dans l'inventaire que de créature sur votre terrain.
