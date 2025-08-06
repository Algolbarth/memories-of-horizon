<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Soigne 2 blessures à une créature alliée sur le terrain pour chaque valeur d'infusion.

<br />
<br />

<i>
	Soigne {card.stat("Infusion").value() * 2} blessures à une créature alliée sur le terrain.
</i>
