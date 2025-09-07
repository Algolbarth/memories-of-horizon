<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
    import CardInfo from "../../../Utils/CardInfo.svelte";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Augmente de 25 l'infusion d'un objet allié de famille Potion (sauf <CardInfo bind:system name={"Concoction"} />) dans la main.