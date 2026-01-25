<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

S'équipe sur une créature alliée sur le terrain.
<br />
<br />
Quand la créature équipée attaque : inflige 10 dégâts à l'unité attaquée pour chaque objet allié de famille Nourriture dans la défausse.
