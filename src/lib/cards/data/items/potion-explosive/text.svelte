<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	// svelte-ignore export_let_unused
	export let system: System;
	export let card: Card;
</script>

Inflige 2 dégâts à une unité adverse sur le terrain pour chaque valeur d'infusion.

<br />
<br />

<span class="details">
	Inflige {card.stat("Infusion").value() * 2} dégâts à une unité adverse sur le terrain.
</span>
