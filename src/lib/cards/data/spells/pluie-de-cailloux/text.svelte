<script lang="ts">
	import CardInfo from "../../../utils/card-info.svelte";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Sorcery from "../../../utils/sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Au choix :
<ul>
	<li>
		Remplit le terrain allié de <CardInfo bind:system name={"Élémentaire de caillou"} />.
	</li>
	<li>Inflige 5 dégâts à toutes les unités adverses sur le terrain.</li>
</ul>

<Sorcery bind:system bind:card cost={30} text={"les deux effets s'activent à la place."} />
