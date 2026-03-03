<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Resolve from "$lib/cards/utils/resolve.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Si votre pile est vide : découvre 5 cartes.

<Resolve bind:system bind:card cost={125} text={"découvre autant de carte que nécessaire pour remplir la pile à la place."} />
