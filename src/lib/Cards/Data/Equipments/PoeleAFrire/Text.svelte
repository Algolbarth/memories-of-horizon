<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

S'équipe à une créature alliée sur le terrain.
<br />
<br />
Quand le porteur attaque : inflige 10 dégâts à l'unité attaquée pour chaque objet allié de famille Nourriture dans la défausse.
