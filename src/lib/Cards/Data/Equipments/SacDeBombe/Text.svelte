<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import CardInfo from "../../../Utils/CardInfo.svelte";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

S'équipe sur une créature alliée sur le terrain.
<br />
<br />
Au début de la phase de préparation, quand équipé : crée <CardInfo bind:system name={"Bombe"} /> dans la réserve.
