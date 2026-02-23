<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé : génère 2 <CardInfo bind:system name={"Chien"} /> sur le terrain.

<br />
<br />

Quand se prépare sur le terrain : génère <CardInfo bind:system name={"Chien"} /> sur le terrain.
