<script lang="ts">
	import { Unit, type Card } from "../Class";

	export let card: Card;
</script>

<div class="box">
	<i>Traits</i>
	<br />

	{#each card.traits as trait}
		{#if trait.value()}
			{trait.name}
			<br />
		{/if}
	{/each}
</div>
