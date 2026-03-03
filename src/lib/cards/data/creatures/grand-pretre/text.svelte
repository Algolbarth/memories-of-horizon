<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé, au choix :
<ul>
	<li>Augmente de 10 la constitution de toutes les créatures sur votre terrain.</li>
	<li>Soigne 20 blessures à toutes les créatures sur votre terrain.</li>
</ul>
