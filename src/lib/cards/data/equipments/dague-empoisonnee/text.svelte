<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Au choix :
<ul>
	<li>S'équipe à une créature alliée sur le terrain.</li>
	<li>Augmente de 5 le poison et de 10 la toxicité d'une créature adverse sur le terrain.</li>
</ul>

Quand le porteur attaque : augmente de 3 la toxicité de la créature attaquée.
