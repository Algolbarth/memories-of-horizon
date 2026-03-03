<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Source from "$lib/cards/utils/source.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Augmente de 5 la constitution et la force de toutes les créatures d'élément Eau sur votre terrain.

<Source bind:system bind:card cost={50} text={"augmente de 10 à la place."} />
