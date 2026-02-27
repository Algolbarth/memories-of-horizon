<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Source from "../../../utils/source.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé, au choix :
<ul>
	<li>Augmente de 1 la taille de la pile alliée.</li>
	<li>Augmente de 1 la taille de l'inventaire allié.</li>
	<li>Augmente de 1 la taille du terrain allié.</li>
</ul>

<Source bind:system bind:card cost={100} text={"augmente de 1 la taille de la pile, l'inventaire et du terrain alliés."} />
