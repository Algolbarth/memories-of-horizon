<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Source from "$lib/cards/utils/source.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé, au choix :
<ul>
	<li>Augmente de 1 la taille de votre pile.</li>
	<li>Augmente de 1 la taille de votre inventaire.</li>
	<li>Augmente de 1 la taille de votre terrain.</li>
</ul>

<Source bind:system bind:card cost={100} text={"augmente de 1 la taille de la pile, l'inventaire et de votre terrains."} />
