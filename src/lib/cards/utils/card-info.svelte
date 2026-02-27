<script lang="ts">
	import type { System } from "../../system/class";

	export let system: System;
	export let name: string;

	$: card = system.cards.getByName(name);
</script>

<button
	class="active"
	on:click={() => {
		system.view.card = card;
	}}
>
	{name}
</button>
