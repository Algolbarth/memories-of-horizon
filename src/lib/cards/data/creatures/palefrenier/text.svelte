<script lang="ts">
	import CardInfo from "../../../utils/card-info.svelte";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé : génère <CardInfo bind:system name={"Monture de chevalier"} /> sur la pile et réduis de 20 le coût de cette carte.
