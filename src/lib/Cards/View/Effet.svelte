<script lang="ts">
	import type { System } from "../../System/Class";
	import type { Card } from "../Class";

	export let card: Card;
	export let system: System;
</script>

<div class="box">
	<span class="box_title">Effet</span>

	<br />

	<svelte:component this={card.text} bind:system bind:card />
</div>
