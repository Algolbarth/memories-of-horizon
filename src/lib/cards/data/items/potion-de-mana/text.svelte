<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	export let card: Card;
</script>

Produit 1 mana pour chaque valeur d'infusion.

<br />
<br />

<span class="details">Produit {card.stat("Infusion").value()} mana.</span>
