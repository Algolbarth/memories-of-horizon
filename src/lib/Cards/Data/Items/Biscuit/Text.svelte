<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Soigne 20 blessures à une créature alliée sur le terrain. Si cette créature n'est pas blessée, génère un <CardInfo bind:system name={"Bonhomme biscuit"} /> sur le terrain à la place.
