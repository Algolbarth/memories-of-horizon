<script lang="ts">
	import CardInfo from "$lib/cards/utils/card-info.svelte";
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Au début de la phase de combat : génère <CardInfo bind:system name={"Chat"} /> sur votre terrain.

<br />
<br />

Quand attaque : stocke 1 or.
