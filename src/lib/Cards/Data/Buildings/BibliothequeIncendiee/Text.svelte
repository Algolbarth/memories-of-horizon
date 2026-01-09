<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import CardInfo from "../../../Utils/CardInfo.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand <CardInfo bind:system name={"Autodafé"} /> ou <CardInfo bind:system name={"Bûcher des vanités"} /> est posé : génère <CardInfo bind:system name={"Écrits calcinés"} /> dans la réserve.
