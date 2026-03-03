<script lang="ts">
	import CardInfo from "$lib/cards/utils/card-info.svelte";
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Sorcery from "$lib/cards/utils/sorcery.svelte";

	export let system: System;
	export let card: Card;
</script>

Au choix :
<ul>
	<li>
		Remplit votre terrain de <CardInfo bind:system name={"Élémentaire de caillou"} />.
	</li>
	<li>Inflige 5 dégâts à toutes les unités sur le terrain adverse.</li>
</ul>

<Sorcery bind:system bind:card cost={30} text={"les deux effets s'activent à la place."} />
