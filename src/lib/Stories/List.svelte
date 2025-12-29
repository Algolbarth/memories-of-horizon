<script lang="ts">
	import type { Story } from "./Story";
	import type { System } from "../System/Class";
    import View from "./View.svelte";

	export let system: System;

	let story: undefined | Story = undefined;
</script>

<button
	class="close"
	on:click={() => {
		system.page = "Menu";
	}}
>
	X
</button>

<br />
<br />

<div class="zone">
	<div id="list" class="scroll">
		{#each system.stories as s}
			{#if s.unlock}
				<div class="preview">
					<button
						on:click={() => {
							story = s;
						}}
					>
						{s.title}
					</button>
				</div>
			{/if}
		{/each}
	</div>
</div>

{#if story != undefined}
	<View bind:story />
{/if}

<style>
	.zone {
		background-color: var(--zone);
		border: solid;
		padding: 1%;
		width: 50vw;
	}

	#list {
		max-height: 80vh;
	}
</style>
