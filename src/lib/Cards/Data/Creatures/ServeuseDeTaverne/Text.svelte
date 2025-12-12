<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé : crée <CardInfo bind:system name={"Bière"} /> sur le terrain.
<br />
<br />
Au début de la phase de préparation : crée <CardInfo bind:system name={"Bière"} /> sur le terrain.
