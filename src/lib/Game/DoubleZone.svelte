<script lang="ts">
	import type { System } from "../System/Class";
	import Zone from "./Zone.svelte";

	export let system: System;
	export let zone: string;
</script>

{#if system.game}
	<div class="zones">
		<Zone bind:system bind:entity={system.game.player} zone={system.game.player.zone(zone)} select_condition={undefined} select_action={undefined} direction={"left"} />
		<div style="text-align:right;">
			<Zone bind:system bind:entity={system.game.bot} zone={system.game.bot.zone(zone)} select_condition={undefined} select_action={undefined} direction={"right"} />
		</div>
	</div>
{/if}

<style>
	.zones {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
</style>
