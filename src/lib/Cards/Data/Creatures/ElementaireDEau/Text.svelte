<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
	import Source from "../../../Utils/Source.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé : <Source bind:system bind:card cost={5} text={"augmente de 5 sa constitution et sa force."} />
