<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import Satiety from "../../../utils/satiety.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Soigne 10 blessures à une créature alliée sur le terrain pour chaque carte alliée de familles Nourriture et Plante dans la défausse.

<Satiety bind:card bind:system text={"augmente de 5 sa constitution et sa force pour chaque carte alliée de familles Nourriture et Plante dans la défausse à la place."} />
