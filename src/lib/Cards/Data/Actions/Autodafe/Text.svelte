<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Détruit toutes les cartes alliées dans la boutique. Inflige autant de dégâts à toutes les unités adverses sur le terrain que de cartes détruites.
