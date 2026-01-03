<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Place sur la pile une carte alliée située dans la défausse. Si c'est une unité, fixe à 1 la santé de cette carte.
