<script lang="ts">
	import { Unit, type Card } from "../Class";

	export let card: Card;
</script>

<div class="box">
	<i>Traits</i>
	<br />

	{#if card.trait("Légendaire").value()}
		Légendaire
		<br />
	{/if}

	{#if card.trait("Rare").value()}
		Rare
		<br />
	{/if}

	{#if card instanceof Unit && card.trait("Inactif").value()}
		Inactif
		<br />
	{/if}
</div>
