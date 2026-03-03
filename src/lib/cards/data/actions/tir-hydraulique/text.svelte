<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Source from "$lib/cards/utils/source.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Inflige 30 dégâts à une unité sur le terrain adverse.

<Source bind:system bind:card cost={15} text={"inflige 60 dégâts à la place."} />
