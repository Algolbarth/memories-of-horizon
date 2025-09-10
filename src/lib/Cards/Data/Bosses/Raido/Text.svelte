<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand une créature alliée est posée : augmente de 5 la force et la constitution de cette créature.
<br />
<br />
Quand une unité adverse meurt : produit autant d'or que la constitution max de cette créature.
<br />
<br />
Quand joue : dépense en boucle 1 or et augmente de 1 sa force et sa constitution à chaque fois.
