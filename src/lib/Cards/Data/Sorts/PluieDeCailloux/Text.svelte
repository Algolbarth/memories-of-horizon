<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Au choix :
<ul>
	<li>
		Remplit le terrain allié de <CardInfo bind:system name={"Élémentaire de caillou"} />.
	</li>
	<li>
		Inflige 6 dégâts à toutes les unités adverses sur le terrain.
	</li>
</ul>

Sorcellerie 30 : les deux effets s'activent à la place.
