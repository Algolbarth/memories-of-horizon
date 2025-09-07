<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand une unité est posée :
<ul>
	<li>Si c'est une créature d'élément Feu : augmente de 5 l'attaque de cette créature.</li>
	<li>Si c'est une unité qui n'est pas d'élément Feu : inflige 5 dégâts à cette unité.</li>
</ul>
