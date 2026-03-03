<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import CardInfo from "$lib/cards/utils/card-info.svelte";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Augmente de 25 l'infusion d'un objet de famille Potion (sauf <CardInfo bind:system name={"Concoction"} />) dans votre inventaire.
