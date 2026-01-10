<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé, au choix :
<ul>
	<li>Augmente de 1 la taille de la pile alliée.</li>
	<li>Augmente de 1 la taille de la réserve alliée.</li>
	<li>Augmente de 1 la taille du terrain allié.</li>
</ul>

Dépense 100 eau pour augmenter de 1 la taille de la pile, la réserve et du terrain alliés.
