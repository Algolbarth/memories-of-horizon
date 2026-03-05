<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand une autre unité est posée : si sur le terrain :
<ul>
	<li>Si c'est une créature d'élément Feu : augmente de 5 la force de cette créature.</li>
	<li>Si c'est une unité qui n'est pas d'élément Feu : inflige 5 dégâts à cette unité.</li>
</ul>
