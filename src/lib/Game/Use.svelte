<script>
	export let system;

	function close() {
		system.game.use.reset();
		system = system;
	}
</script>

{#if system.game.use.card != undefined}
	<div id="body">
		<button
			class="close"
			on:click={() => {
				close();
			}}
		>
			X
		</button>

		<br />
		<br />

		<div id="side">
			<svelte:component this={system.game.use.svelte} bind:system />
		</div>
	</div>
{/if}

<style>
	#body {
		position: fixed;
		background: var(--background);
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		padding: 1%;
	}

	#side {
		width: 50%;
	}
</style>
