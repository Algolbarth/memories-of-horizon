<script lang="ts">
	import CardInfo from "../../../Utils/Info.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Transforme en <CardInfo bind:system name={"Grenouille"} /> une créature adverse sur le terrain.
