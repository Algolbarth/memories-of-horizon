<script lang="ts">
	import CardInfo from "$lib/cards/utils/card-info.svelte";
	import type { System } from "$lib/system/class";
	import type { Card } from "$lib/cards/class/class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand se prépare sur le terrain : génère <CardInfo bind:system name={"Pierre philosophale"} /> dans votre inventaire.

<br />
<br />

Quand <CardInfo bind:system name={"Pierre philosophale"} /> est posée : si sur le terrain : augmente d'autant sa constitution et sa force que le flux dépensé.
