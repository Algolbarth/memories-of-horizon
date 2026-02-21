<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé et quand se prépare sur le terrain : génère 2 <CardInfo bind:system name={"Coffre en bois"} /> dans l'inventaire.
