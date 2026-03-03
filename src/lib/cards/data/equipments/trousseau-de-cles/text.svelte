<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import CardInfo from "$lib/cards/utils/card-info.svelte";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

S'équipe à une créature sur votre terrain.

<br />
<br />

Quand se prépare sur le terrain : si équipé : génère <CardInfo bind:system name={"Clé en or"} /> dans votre inventaire.
