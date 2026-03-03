<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Place sur votre pile une carte située dans votre défausse. Si c'est une unité, fixe à 1 la santé de cette carte.
