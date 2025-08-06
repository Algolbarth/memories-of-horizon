<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé, au choix :
<ul>
	<li>Se place sur le terrain.</li>
	<li>Se détruit pour infliger 30 dégâts à une unité adverse sur le terrain.</li>
</ul>
