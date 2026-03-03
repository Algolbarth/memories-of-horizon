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
	<li>Augmente de 15 la constitution d'une créature sur votre terrain.</li>
	<li>Soigne 20 blessures d'une créature sur votre terrain.</li>
</ul>
