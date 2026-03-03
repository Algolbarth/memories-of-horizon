<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import Satiety from "$lib/cards/utils/satiety.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Soigne 10 blessures à une créature sur votre terrain pour chaque carte de familles Nourriture et Plante dans votre défausse.

<Satiety bind:card bind:system text={"augmente de 5 sa constitution et sa force pour chaque carte de familles Nourriture et Plante dans votre défausse à la place."} />
