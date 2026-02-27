<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Source from "../../../utils/source.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand se prépare sur le terrain : <Source bind:system bind:card cost={10} text={"augmente de 10 sa constitution et sa force"} />.
