<script lang="ts">
	import type { System } from "../System/Class";

	export let system: System;

	function close() {
		if (system.game) {
			system.game.use.reset();
			system = system;
		}
	}
</script>

{#if system.game && system.game.use.card}
	<div class="window">
		<div class="body">
			<button
				class="square close"
				on:click={() => {
					close();
				}}
			>
				X
			</button>

			<br />
			<br />

			<div class="side">
				<svelte:component this={system.game.use.svelte} bind:system />
			</div>
		</div>
	</div>
{/if}
