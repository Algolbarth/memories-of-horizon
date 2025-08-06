<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

S'équipe sur une créature alliée sur le terrain.
<br />
<br />
Si la créature équipée détruit une unité au combat : stocke 5 eau.
