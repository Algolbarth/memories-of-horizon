<script lang="ts">
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";
	import CardInfo from "$lib/cards/utils/card-info.svelte";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand <CardInfo bind:system name={"Autodafé"} /> ou <CardInfo bind:system name={"Bûcher des vanités"} /> est posé : génère <CardInfo bind:system name={"Écrits calcinés"} /> dans votre inventaire.
