<script lang="ts">
	import CardInfo from "../../../utils/card-info.svelte";
	import type { System } from "../../../../system/class";
	import type { Card } from "../../../class";

	export let system: System;
	// svelte-ignore export_let_unused
	export let card: Card;
</script>

Quand posé : inflige autant de dégâts que possible à une unité adverse et dépense autant d'or.

<br />
<br />

Quand périt : se réincarne en <CardInfo bind:system name={"Chevalier noir"} />.
