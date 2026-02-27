<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import CardInfo from "../../../utils/card-info.svelte";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Génère autant de <CardInfo bind:system name={"Bière"} /> dans l'inventaire que de créature alliées sur le terrain.
