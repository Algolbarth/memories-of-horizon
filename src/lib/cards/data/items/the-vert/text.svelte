<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Satiety from "../../../utils/satiety.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Soigne 20 blessures à une créature alliée sur le terrain.

<Satiety bind:system bind:card text={"augmente son intelligence de 2 à la place."} />
