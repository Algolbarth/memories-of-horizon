<script lang="ts">
	import CardInfo from "../../../utils/card-info.svelte";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé et quand se prépare sur le terrain : génère <CardInfo bind:system name={"Bière"} /> dans l'inventaire.
