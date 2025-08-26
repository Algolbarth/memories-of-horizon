<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand meurt : se transforme en <CardInfo bind:system name={"Chevalier géant"} />, se soigne toutes ses blessures et reste sur le terrain.
