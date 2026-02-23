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

Quand une unité adverse périt : produit autant d'or que la constitution max de cette créature.

<br />
<br />

Quand joue : dépense autant d'or que possible et augmente d'autant sa constitution et sa force.
