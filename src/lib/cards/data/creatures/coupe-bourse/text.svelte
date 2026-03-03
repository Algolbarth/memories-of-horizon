<script lang="ts">
	import CardInfo from "../../../utils/card-info.svelte";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand se prépare sur le terrain : génère <CardInfo bind:system name={"Vol à la tire"} /> dans l'inventaire.

<br />
<br />

Quand <CardInfo bind:system name={"Vol à la tire"} /> est posée : augmente de 10 sa vente en or.
