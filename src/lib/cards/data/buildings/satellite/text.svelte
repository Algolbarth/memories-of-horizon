<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand arrive sur le terrain : augmente d'autant sa constitution et sa puissance que de flux possédé.

<br />
<br />

Au début d'un round : inflige autant de dégâts à l'unité sur le terrain adverse en première position que sa puissance.
