<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Au début d'un round : inflige 20 dégâts à l'unité adverse sur le terrain en première position.
