<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Au choix :
<ul>
	<li>Découvre 1 carte.</li>
	<li>Augmente de 1 l'initiative d'une créature sur votre terrain pendant ce tour.</li>
</ul>
