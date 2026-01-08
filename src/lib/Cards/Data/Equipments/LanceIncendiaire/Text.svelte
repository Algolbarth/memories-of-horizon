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
Quand la créature équipée attaque : augmente de 5 la brûlure de l'unité attaquée et diminue d'autant l'endurance de l'unité attaquée que la valeur de brûlure de l'unité attaquée.
