<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Produit 1 mana pour chaque valeur d'infusion.

<br />
<br />

<i>Produit {card.stat("Infusion").value()} mana.</i>
