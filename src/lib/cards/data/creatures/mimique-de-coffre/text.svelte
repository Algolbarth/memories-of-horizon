<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé : se place sur le terrain adverse.
<br />
Quand périt sur le terrain : l'adversaire pioche 5 cartes et les verrouille.
