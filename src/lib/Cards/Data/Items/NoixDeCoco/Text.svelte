<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import Satiety from "../../../Utils/Satiety.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Soigne 40 blessures à une créature sur le terrain.

<Satiety bind:system bind:card text={"augmente jusqu'à 1 son étourdissement à la place."} />
