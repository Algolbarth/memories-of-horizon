<script lang="ts">
	import CardInfo from "../../../utils/card-info.svelte";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand se prépare sur le terrain : génère <CardInfo bind:system name={"Pierre philosophale"} /> dans l'inventaire.
<br />
Quand <CardInfo bind:system name={"Pierre philosophale"} /> est posée : augmente sa constitution et sa force d'autant que le flux dépensé.
