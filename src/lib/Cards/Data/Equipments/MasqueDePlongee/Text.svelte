<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import CardInfo from "../../../Utils/CardInfo.svelte";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

S'équipe à une créature alliée sur le terrain.

<br />
<br />

Quand se prépare sur le terrain : si équipé : augmente jusqu'à 10 la garde du porteur et génère <CardInfo bind:system name={"Bulle protectrice"} /> dans l'inventaire.
