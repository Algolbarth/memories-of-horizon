<script lang="ts">
	import type { System } from "../../system/class";
	import type { Creature } from "../class/creature";

	export let system: System;
	export let card: Creature;
</script>

<div class="box">
	<span class="box_title">Équipements</span>
	({card.equipments.length} / {card.stat("Maniement").value()})

	<br />

	{#each card.equipments as equipment}
		<button
			class="active"
			on:click={() => {
				system.view.card = equipment;
			}}
		>
			{equipment.name}
		</button>

		<br />
	{/each}
</div>
