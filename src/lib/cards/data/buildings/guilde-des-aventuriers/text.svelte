<script lang="ts">
	import CardInfo from "../../../utils/card-info.svelte";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand se prépare sur le terrain : génère <CardInfo bind:system name={"Aventurier"} /> dans l'inventaire.

<br />
<br />

Quand <CardInfo bind:system name={"Aventurier"} /> est posée : pioche 1 carte du même type que celui choisi.
