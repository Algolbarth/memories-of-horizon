<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Prime from "$lib/cards/utils/prime.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé : <Prime bind:system bind:card cost={5} text={"augmente de 5 sa constitution et sa force."} />
