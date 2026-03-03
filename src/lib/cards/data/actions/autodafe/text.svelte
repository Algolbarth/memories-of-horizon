<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Meule toutes les cartes sur votre pile. Inflige autant de dégâts à toutes les unités sur le terrain adverse que de cartes meulées.
