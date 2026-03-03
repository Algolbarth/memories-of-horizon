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
	<li>Augmente de 5 le poison et de 10 la toxicité d'une créature sur le terrain adverse.</li>
</ul>

Quand le porteur attaque : augmente de 3 la toxicité de la créature attaquée.
