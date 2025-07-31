<script lang="ts">
	import type { Card } from "../Class";

	export let card: Card;
</script>

<div class="box">
	<i>Statistiques</i>
	<br />

	{#each card.stats as stat}
		{#if stat.condition()}
			{stat.name} :
			{#if stat.current != undefined}
				{stat.current} /
			{/if}
			{stat.value()}
			<br />
		{/if}
	{/each}
</div>
