<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	export let card: Card;
</script>

Augmente de 2 la résistance d'une créature alliée sur le terrain pendant ce tour pour chaque valeur d'infusion.

<br />
<br />

<span class="details">
	Augmente de {card.stat("Infusion").value() * 2} la résistance d'une créature alliée sur le terrain pendant ce tour.
</span>
