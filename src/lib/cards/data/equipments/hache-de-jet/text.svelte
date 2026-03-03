<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Au choix :
<ul>
	<li>S'équipe à une créature sur votre terrain.</li>
	<li>Inflige 50 dégâts à une unité sur le terrain adverse.</li>
</ul>
