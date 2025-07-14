<script>
	export let card;
	export let system;
</script>

<div class="box">
	<i>Effet</i>

	<br />

	<svelte:component this={card.text} bind:system bind:card />
</div>
