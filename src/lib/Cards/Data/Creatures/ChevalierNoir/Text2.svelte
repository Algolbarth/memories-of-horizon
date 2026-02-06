<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import Prime from "../../../Utils/Prime.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand meurt : <Prime bind:system bind:card cost={20} text={"fixe à 1 sa santé et reste sur le terrain."} />
