<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

S'équipe à une créature alliée sur le terrain.
<br />
<br />
Quand se prépare sur le terrain : si équipé : génère une créature du même nom que le porteur sur la pile.
