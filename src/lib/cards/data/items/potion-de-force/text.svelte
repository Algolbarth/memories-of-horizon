<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	export let card: Card;
</script>

Augmente de 4 la force d'une créature sur votre terrain pendant ce tour pour chaque valeur d'infusion.

<br />
<br />

<span class="details">
	Augmente de {card.stat("Infusion").value() * 4} la force d'une créature sur votre terrain pendant ce tour.
</span>
