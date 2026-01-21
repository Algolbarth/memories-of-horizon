<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé : se place sur le terrain adverse.
<br />
Quand meurt sur le terrain : l'adversaire pioche 5 cartes et les verrouille.
