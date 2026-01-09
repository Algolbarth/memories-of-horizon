<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé : génère <CardInfo bind:system name={"Monture de chevalier"} /> sur la pile et réduis de 20 le coût de cette carte.
