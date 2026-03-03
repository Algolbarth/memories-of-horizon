<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Inflige 100 dégâts à une unité sur le terrain adverse. Dépense autant d'eau que possible et inflige 2 fois plus de dégâts supplémentaires.
