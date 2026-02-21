<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	// svelte-ignore export_let_unused
	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Meule toutes les cartes alliées sur la pile. Inflige autant de dégâts à une unité adverse sur le terrain que 10 fois le nombre de cartes meulées.
