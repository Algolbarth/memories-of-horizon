<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand une créature alliée est posée : augmente de 5 l'attaque et la vie de cette créature.
<br />
<br />
Quand une unité adverse meurt : produit autant d'or que la vie max de cette créature.
<br />
<br />
Quand joue : dépense en boucle 1 or et augmente de 1 son attaque et sa vie à chaque fois.
