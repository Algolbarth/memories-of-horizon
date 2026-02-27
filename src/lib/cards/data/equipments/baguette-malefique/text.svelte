<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import CardInfo from "../../../utils/card-info.svelte";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

S'équipe à une créature alliée sur le terrain.

<br />
<br />

Quand se prépare sur le terrain : si équipé : génère <CardInfo bind:system name={"Maléfice"} /> dans l'inventaire.
