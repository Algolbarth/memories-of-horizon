<script lang="ts">
	import CardInfo from "../../../utils/card-info.svelte";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand <CardInfo bind:system name={"Boule de feu"} /> est posée : génère <CardInfo bind:system name={"Boule de feu"} /> sur la pile.
