<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	export let card: Card;
</script>

Inflige 2 dégâts à une unité sur le terrain adverse pour chaque valeur d'infusion.

<br />
<br />

<span class="details">
	Inflige {card.stat("Infusion").value() * 2} dégâts à une unité sur le terrain adverse.
</span>
