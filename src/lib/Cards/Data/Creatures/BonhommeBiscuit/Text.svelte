<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand un objet de famille Nourriture est utilisé sur lui : augmente de 3 sa force et sa santé.
