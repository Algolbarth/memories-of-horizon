<script lang="ts">
	import CardInfo from "../../../Utils/Info.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Au début de la phase de préparation : crée <CardInfo bind:system name={"Mélange"} /> dans la main.
