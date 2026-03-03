<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand une carte alliée de famille Nourriture est posée : si sur le terrain : produit 10 ressources de chaque élément de cette carte.
