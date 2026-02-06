<script lang="ts">
	import CardInfo from "../../../Utils/CardInfo.svelte";
	import type { System } from "../../../../System/Class";
	import type { Card } from "../../../Class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé : inflige autant de dégâts que possible à une unité adverse et dépense autant d'or.

<br />
<br />

Quand meurt : se réincarne en <CardInfo bind:system name={"Chevalier noir"} />.
