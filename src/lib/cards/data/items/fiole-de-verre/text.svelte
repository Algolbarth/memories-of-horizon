<script lang="ts">
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";
	import CardInfo from "../../../utils/card-info.svelte";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Augmente de 5 l'infusion d'un objet allié de famille Potion (sauf <CardInfo bind:system name={"Concoction"} />) dans l'inventaire.
