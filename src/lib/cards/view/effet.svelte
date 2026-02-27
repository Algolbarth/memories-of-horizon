<script lang="ts">
	import type { System } from "../../system/class";
	import type { Card } from "../class";

	export let card: Card;
	export let system: System;
</script>

<div class="box">
	<span class="box_title">Effet</span>

	<br />

	<svelte:component this={card.text} bind:system bind:card />
</div>
