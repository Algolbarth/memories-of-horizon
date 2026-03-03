<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Source from "$lib/cards/utils/source.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Inflige 5 dégâts à toutes les unités sur le terrain adverse.

<Source bind:system bind:card cost={25} text={"inflige 10 dégâts à la place."} />
