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
	<li>Soigne 20 blessures à un bâtiment sur votre terrain.</li>
	<li>Inflige 20 dégâts à une unité sur le terrain adverse.</li>
</ul>
