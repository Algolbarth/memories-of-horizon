<script lang="ts">
	import CardInfo from "../../../Utils/Info.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé : inflige autant de dégâts que possible à une unité adverse et dépense autant d'or.
<br />
Quand meurt : se transforme en <CardInfo bind:system name={"Chevalier noir"} />, se soigne toutes ses blessures et reste sur le terrain.
