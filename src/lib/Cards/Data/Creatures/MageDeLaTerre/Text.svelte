<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand une carte alliée de famille Sort est posée : crée un <CardInfo bind:system name={"Élémentaire de caillou"} /> dans la main.
