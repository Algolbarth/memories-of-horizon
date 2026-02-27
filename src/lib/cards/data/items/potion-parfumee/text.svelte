<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	// svelte-ignore export_let_unused
	export let system: System;
	export let card: Card;
</script>

Augmente de 1 la protection d'une créature sur le terrain pendant ce tour pour toutes les 5 valeur d'infusion.

<br />
<br />

<span class="details">
	Augmente de {Math.floor(card.stat("Infusion").value() / 5)} la protection d'une créature sur le terrain pendant ce tour.
</span>
