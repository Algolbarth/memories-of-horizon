<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand une créature alliée est posée : augmente de 5 la constitution et la force de cette créature.
<br />
<br />
Quand une unité adverse est détruite : produit autant d'or que la constitution max de cette créature.
<br />
<br />
Quand joue : dépense en boucle 1 or et augmente de 1 sa constitution et sa force à chaque fois.
