<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import Satiety from "../../../Utils/Satiety.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Soigne 25 blessures à une créature alliée sur le terrain.

<Satiety bind:system bind:card text={"augmente son épine de 5 à la place."} />
