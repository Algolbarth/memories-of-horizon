<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Prime from "../../../utils/prime.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand périt : <Prime bind:system bind:card cost={20} text={"fixe à 1 sa santé et reste sur le terrain."} />
