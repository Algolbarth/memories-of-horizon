<script lang="ts">
	import type { System } from "../../System/Class";
    import type { Creature } from "../Data/Creatures/Creature";

	export let system: System;
	export let card: Creature;
</script>

<div class="box">
	<i>Équipements</i>
	({card.equipments.length} / {card.stat("Maniement").value()})

	<br />

	{#each card.equipments as equipment}
		<button
			on:click={() => {
				system.view.card = equipment;
			}}
		>
			{equipment.name}
		</button>
		<br />
	{/each}
</div>
