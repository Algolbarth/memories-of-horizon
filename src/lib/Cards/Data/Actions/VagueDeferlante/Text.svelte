<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import Source from "../../../Utils/Source.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Inflige 5 dégâts à toutes les unités adverses sur le terrain.

<Source bind:system bind:card cost={25} text={"inflige 10 dégâts à la place."} />
