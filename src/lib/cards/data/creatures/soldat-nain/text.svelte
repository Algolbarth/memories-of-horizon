<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand arrive sur le terrain : augmente de 2 sa constitution et sa force pour chaque bâtiment allié sur le terrain.
