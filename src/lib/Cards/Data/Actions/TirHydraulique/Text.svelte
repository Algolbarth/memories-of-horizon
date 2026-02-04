<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import Source from "../../../Utils/Source.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Inflige 30 dégâts à une unité adverse sur le terrain.

<Source bind:system bind:card cost={15} text={"inflige 60 dégâts à la place."} />
