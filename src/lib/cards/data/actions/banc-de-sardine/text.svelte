<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import CardInfo from "../../../utils/card-info.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Génère 5 <CardInfo bind:system name={"Sardine"} /> dans l'inventaire.
