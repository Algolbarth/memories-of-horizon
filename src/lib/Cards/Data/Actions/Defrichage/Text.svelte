<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Augmente de 1 la taille du terrain et de la pile alliée.
<br />
Produit autant d'or que la taille de la pile alliée.
<br />
Produit autant de végétal que la taille du terrain allié.
