<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	export let card: Card;
</script>

Soigne 2 blessures à une créature sur votre terrain pour chaque valeur d'infusion.

<br />
<br />

<span class="details">
	Soigne {card.stat("Infusion").value() * 2} blessures à une créature sur votre terrain.
</span>
