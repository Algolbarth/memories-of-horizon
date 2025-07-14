<script>
	import Zone from "./Zone.svelte";

	export let system;
	export let zone;
</script>

<div class="zones">
	<Zone
		bind:system
		bind:entity={system.game.player}
		zone={system.game.player.zone(zone)}
		condition={undefined}
		fonction={undefined}
	/>
	<div style="text-align:right;">
		<Zone
			bind:system
			bind:entity={system.game.bot}
			zone={system.game.bot.zone(zone)}
			condition={undefined}
			fonction={undefined}
		/>
	</div>
</div>

<style>
	.zones {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
</style>
