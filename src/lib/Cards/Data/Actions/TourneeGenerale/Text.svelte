<script lang="ts">
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";
    import CardInfo from "../../../Utils/CardInfo.svelte";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Crée autant de <CardInfo bind:system name={"Bière"} /> dans la main que de créature alliées sur le terrain.