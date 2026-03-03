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
	<li>Augmente de 100 la force d'une créature sur votre terrain.</li>
	<li>Augmente de 50 la constitution et la force d'une créature sur votre terrain.</li>
</ul>
