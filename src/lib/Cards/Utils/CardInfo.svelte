<script lang="ts">
	import type { System } from "../../System/Class";

	export let system: System;
	export let name: string;

	$: card = system.cards.getByName(name);
</script>

<button
	on:click={() => {
		system.view.card = card;
	}}
>
	{name}
</button>

<style>
	button {
		color: darkgreen;
	}

	button:hover {
		color: greenyellow;
	}
</style>
